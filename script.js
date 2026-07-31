/* ==========================================================================
   IELTS Vocab Mindmap - JavaScript Controller
   Dynamic Multi-Unit Support, Bezier Mind-Map Engine, TTS, Auth & Dictation Quiz
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Global State
  let currentUnitId = 'unit-1';
  let currentBandFilter = 'all';
  let currentStatusFilter = 'all'; // 'all', 'learned', 'unlearned'
  let currentQuadrantView = 'all'; // 'all' or specific quadrant id
  let speechRate = 1.0;
  let synth = window.speechSynthesis;

  // User Auth & Memory Tracking State
  let currentUser = JSON.parse(localStorage.getItem('ielts_vocab_user')) || null;
  let currentModalWord = null;

  // Dictation Quiz State
  let quizScope = 'current'; // 'current' or 'all'
  let currentQuizWord = null;
  let quizScore = 0;
  let quizStreak = 0;

  // Theme color dictionary for dynamic SVG connectors
  let currentThemeColors = {};

  // DOM Elements
  const unitSelect = document.getElementById('unitSelect');
  const brandBadge = document.getElementById('brandBadge');
  const pageTitle = document.getElementById('pageTitle');
  const topBarGraphic = document.getElementById('topBarGraphic');
  const topBarStickyNote = document.getElementById('topBarStickyNote');
  const quadrantsGrid = document.getElementById('quadrantsGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearch');
  const bandBtns = document.querySelectorAll('.band-btn');
  const statusBtns = document.querySelectorAll('.status-btn');
  const learnedLockTag = document.getElementById('learnedLockTag');
  const unlearnedLockTag = document.getElementById('unlearnedLockTag');
  const modalBandBadge = document.getElementById('modalBandBadge');
  const toggleFlashcardsBtn = document.getElementById('toggleFlashcards');
  const btnDictationQuiz = document.getElementById('btnDictationQuiz');
  const dictationQuizPanel = document.getElementById('dictationQuizPanel');
  const closeQuizBtn = document.getElementById('closeQuizBtn');
  const mindmapWrapper = document.getElementById('mindmapWrapper');
  const audioToast = document.getElementById('audioToast');
  const toastText = document.getElementById('toastText');
  const speedBtns = document.querySelectorAll('.speed-btn');
  const userProfileBar = document.getElementById('userProfileBar');

  // Word Modal Elements
  const wordModal = document.getElementById('wordModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalWordEn = document.getElementById('modalWordEn');
  const modalWordIpa = document.getElementById('modalWordIpa');
  const modalWordCn = document.getElementById('modalWordCn');
  const modalExample = document.getElementById('modalExample');
  const modalTip = document.getElementById('modalTip');
  const modalIcon = document.getElementById('modalIcon');
  const modalAudioBtn = document.getElementById('modalAudioBtn');
  const modalExampleAudioBtn = document.getElementById('modalExampleAudioBtn');
  const modalLearnToggleBtn = document.getElementById('modalLearnToggleBtn');

  // Login Prompt Modal Elements
  const loginPromptModal = document.getElementById('loginPromptModal');
  const closeLoginModalBtn = document.getElementById('closeLoginModalBtn');
  const btnDemoLogin = document.getElementById('btnDemoLogin');

  // Quiz Panel Elements
  const playQuizAudioBtn = document.getElementById('playQuizAudioBtn');
  const quizInput = document.getElementById('quizInput');
  const quizForm = document.getElementById('quizForm');
  const giveUpQuizBtn = document.getElementById('giveUpQuizBtn');
  const quizFeedback = document.getElementById('quizFeedback');
  const quizScoreEl = document.getElementById('quizScore');
  const quizStreakEl = document.getElementById('quizStreak');
  const quizHintText = document.getElementById('quizHintText');
  const scopeBtns = document.querySelectorAll('.scope-btn');

  /* ------------------------------------------------------------------------
     0. User Authentication & Learned Words Helpers
     ------------------------------------------------------------------------ */
  function getLearnedSet() {
    if (!currentUser || !currentUser.id) return new Set();
    const key = `ielts_learned_${currentUser.id}`;
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    try {
      return new Set(JSON.parse(raw));
    } catch (e) {
      return new Set();
    }
  }

  function saveLearnedSet(learnedSet) {
    if (!currentUser || !currentUser.id) return;
    const key = `ielts_learned_${currentUser.id}`;
    localStorage.setItem(key, JSON.stringify(Array.from(learnedSet)));
  }

  function isWordLearned(word) {
    if (!currentUser || !word) return false;
    const set = getLearnedSet();
    return set.has(word.trim().toLowerCase());
  }

  function toggleWordLearned(word) {
    if (!currentUser) {
      openLoginPromptModal();
      return false;
    }
    const wordKey = word.trim().toLowerCase();
    const set = getLearnedSet();
    let isNowLearned = false;
    if (set.has(wordKey)) {
      set.delete(wordKey);
      isNowLearned = false;
    } else {
      set.add(wordKey);
      isNowLearned = true;
    }
    saveLearnedSet(set);
    updateUserProfileBar();
    renderUnit(currentUnitId);
    return isNowLearned;
  }

  function getTotalWordsCount() {
    let count = 0;
    if (!window.unitsData) return count;
    Object.keys(window.unitsData).forEach(uKey => {
      const u = window.unitsData[uKey];
      if (u && u.quadrants) {
        u.quadrants.forEach(q => {
          count += (q.words ? q.words.length : 0);
        });
      }
    });
    return count;
  }

  function updateUserProfileBar() {
    if (!userProfileBar) return;

    if (currentUser) {
      const learnedCount = getLearnedSet().size;
      const totalCount = getTotalWordsCount();
      const pct = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;
      const avatarHtml = currentUser.picture
        ? `<img src="${currentUser.picture}" class="user-avatar" alt="${escapeHtml(currentUser.name)}">`
        : `<div class="user-avatar-fallback">${escapeHtml((currentUser.name || 'U').charAt(0).toUpperCase())}</div>`;

      userProfileBar.innerHTML = `
        <div class="user-logged-in-box">
          ${avatarHtml}
          <div class="user-info">
            <span class="user-name">${escapeHtml(currentUser.name)}</span>
          </div>
          <span class="user-progress-badge" title="全題庫記憶進度">✅ ${learnedCount}/${totalCount} (${pct}%)</span>
          <button class="btn-logout" id="btnLogout" title="登出帳號">🚪 登出</button>
        </div>
      `;

      const btnLogout = document.getElementById('btnLogout');
      if (btnLogout) {
        btnLogout.addEventListener('click', () => {
          currentUser = null;
          localStorage.removeItem('ielts_vocab_user');
          updateUserProfileBar();
          renderUnit(currentUnitId);
        });
      }
    } else {
      userProfileBar.innerHTML = `
        <div class="user-badge-guest">
          <span>👤 訪客模式</span>
          <button class="btn-google-login" id="headerGoogleLoginBtn" title="點擊進行 Google 登入">
            <span>🔑 登入</span>
          </button>
        </div>
      `;

      const headerGoogleLoginBtn = document.getElementById('headerGoogleLoginBtn');
      if (headerGoogleLoginBtn) {
        headerGoogleLoginBtn.addEventListener('click', () => {
          openLoginPromptModal();
        });
      }
    }

    updateStatusFilterLocks();
  }

  function updateStatusFilterLocks() {
    if (learnedLockTag && unlearnedLockTag) {
      if (currentUser) {
        learnedLockTag.style.display = 'none';
        unlearnedLockTag.style.display = 'none';
      } else {
        learnedLockTag.style.display = 'inline';
        unlearnedLockTag.style.display = 'inline';
      }
    }
  }

  /* ------------------------------------------------------------------------
     1. Dynamic Unit Rendering Engine
     ------------------------------------------------------------------------ */
  function renderUnit(unitId) {
    const unit = window.unitsData[unitId];
    if (!unit) return;

    currentUnitId = unitId;

    // 1. Update Header Information
    brandBadge.textContent = `IELTS Mindmap • Unit ${unit.number}`;
    pageTitle.textContent = unit.badgeText;

    // 2. Render Top Bar Unit Hero (Illustration & Sticky Note)
    if (topBarGraphic) {
      topBarGraphic.innerHTML = `
        <div class="cloud-title-box">
          <h2>Unit ${unit.number}<br><span class="en-title">${escapeHtml(unit.titleEn)}</span><br><span class="cn-title">${escapeHtml(unit.titleCn)}</span></h2>
        </div>
        <div class="hero-svg-wrapper">
          ${unit.centerSvg}
        </div>
      `;
    }

    if (topBarStickyNote) {
      topBarStickyNote.innerHTML = unit.stickyNote ? `
        <div class="pin">📌</div>
        <div class="note-title">${escapeHtml(unit.stickyNote.title)}</div>
        <div class="note-content">${escapeHtml(unit.stickyNote.content)}</div>
      ` : '';
    }

    // 3. Render Quadrants Grid & Cards
    if (currentQuadrantView === 'all') {
      quadrantsGrid.classList.remove('single-quadrant-mode');
      // OVERVIEW MODE: Render ALL 4 Quadrant sections, each showing up to 9 featured cards + 10th More card
      quadrantsGrid.innerHTML = unit.quadrants.map(q => {
        let qWords = [...q.words];

        // Prioritize matching score-band words if a band filter is selected
        if (currentBandFilter !== 'all') {
          qWords.sort((a, b) => {
            const aMatch = (a.band === currentBandFilter);
            const bMatch = (b.band === currentBandFilter);
            if (aMatch && !bMatch) return -1;
            if (!aMatch && bMatch) return 1;
            return 0;
          });
        }

        const top9Words = qWords.slice(0, 9);
        const remainingCount = qWords.length - top9Words.length;

        let cardsHtml = top9Words.map(w => {
          const bandVal = w.band || '6.5';
          const bandClass = (bandVal === '5.0') ? 'band-5' : (bandVal === '7.5+') ? 'band-7' : 'band-6';
          const learnedClass = isWordLearned(w.word) ? 'is-learned' : '';
          return `
            <div class="vocab-card ${learnedClass}" data-word="${escapeHtml(w.word)}" data-ipa="${escapeHtml(w.ipa)}" data-cn="${escapeHtml(w.cn)}" data-band="${escapeHtml(bandVal)}" data-example="${escapeHtml(w.example)}" data-tip="${escapeHtml(w.tip)}">
              <span class="band-badge ${bandClass}">${escapeHtml(bandVal)}</span>
              <div class="card-inner">
                <div class="card-icon-wrapper">${w.icon}</div>
                <div class="card-body">
                  <div class="word-en">${escapeHtml(w.word)}</div>
                  <div class="word-ipa">${escapeHtml(w.ipa)}</div>
                  <div class="word-cn">${escapeHtml(w.cn)}</div>
                </div>
                <button class="audio-btn" title="朗讀">🔊</button>
              </div>
            </div>
          `;
        }).join('');

        if (remainingCount > 0) {
          cardsHtml += `
            <div class="more-action-card btn-expand-quadrant" data-quadrant-id="${q.id}" title="展開 ${escapeHtml(q.titleCn)} 完整分頁">
              <div class="more-card-count">+${remainingCount}</div>
              <div class="more-card-text">More <span class="more-card-arrow">➔</span></div>
            </div>
          `;
        }

        return `
          <section class="quadrant ${q.themeClass}" id="${q.id}">
            <div class="quadrant-header-pill">
              <span class="pill-text">${q.titleCn}</span>
              <span class="count-tag">${q.words.length} 詞</span>
            </div>
            <div class="cards-wrapper grid-layout">
              ${cardsHtml}
            </div>
          </section>
        `;
      }).join('');

      // Bind click event on all .btn-expand-quadrant cards
      quadrantsGrid.querySelectorAll('.btn-expand-quadrant').forEach(card => {
        card.addEventListener('click', () => {
          const qId = card.getAttribute('data-quadrant-id');
          currentQuadrantView = qId;
          renderUnit(currentUnitId);
        });
      });

    } else {
      // EXPANDED FULL-WIDTH QUADRANT MODE: Show only the selected quadrant with ALL words + Floating Back button
      quadrantsGrid.classList.add('single-quadrant-mode');
      const targetQuadrant = unit.quadrants.find(q => q.id === currentQuadrantView) || unit.quadrants[0];

      let qWords = [...targetQuadrant.words];
      if (currentBandFilter !== 'all') {
        qWords.sort((a, b) => {
          const aMatch = (a.band === currentBandFilter);
          const bMatch = (b.band === currentBandFilter);
          if (aMatch && !bMatch) return -1;
          if (!aMatch && bMatch) return 1;
          return 0;
        });
      }

      quadrantsGrid.innerHTML = `
        <section class="quadrant ${targetQuadrant.themeClass} expanded-full" id="${targetQuadrant.id}">
          <div class="quadrant-header-pill">
            <span class="pill-text">📌 ${targetQuadrant.titleCn}</span>
            <span class="count-tag">共 ${targetQuadrant.words.length} 詞</span>
          </div>
          <div class="cards-wrapper grid-layout">
            ${qWords.map(w => {
              const bandVal = w.band || '6.5';
              const bandClass = (bandVal === '5.0') ? 'band-5' : (bandVal === '7.5+') ? 'band-7' : 'band-6';
              const learnedClass = isWordLearned(w.word) ? 'is-learned' : '';
              return `
                <div class="vocab-card ${learnedClass}" data-word="${escapeHtml(w.word)}" data-ipa="${escapeHtml(w.ipa)}" data-cn="${escapeHtml(w.cn)}" data-band="${escapeHtml(bandVal)}" data-example="${escapeHtml(w.example)}" data-tip="${escapeHtml(w.tip)}">
                  <span class="band-badge ${bandClass}">${escapeHtml(bandVal)}</span>
                  <div class="card-inner">
                    <div class="card-icon-wrapper">${w.icon}</div>
                    <div class="card-body">
                      <div class="word-en">${escapeHtml(w.word)}</div>
                      <div class="word-ipa">${escapeHtml(w.ipa)}</div>
                      <div class="word-cn">${escapeHtml(w.cn)}</div>
                    </div>
                    <button class="audio-btn" title="朗讀">🔊</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Floating Back Button at Bottom Right -->
        <button id="btnFloatingBack" class="floating-back-btn" title="返回單元總覽">
          ⬅️ 返回單元總覽 (Back to Overview)
        </button>
      `;

      const btnFloatingBack = document.getElementById('btnFloatingBack');
      if (btnFloatingBack) {
        btnFloatingBack.addEventListener('click', () => {
          currentQuadrantView = 'all';
          renderUnit(currentUnitId);
        });
      }
    }

    // 4. Bind Card Event Listeners
    bindCardEvents();

    // 5. Apply Active Filters (Search + Band + Status)
    applyFilters();
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ------------------------------------------------------------------------
     3. Text-To-Speech (Audio Pronunciation)
     ------------------------------------------------------------------------ */
  function speakWord(text, cardElement = null) {
    if (!synth) {
      alert('您的瀏覽器不支援語音合成功能');
      return;
    }

    if (synth.speaking) {
      synth.cancel();
      document.querySelectorAll('.vocab-card.speaking').forEach(c => c.classList.remove('speaking'));
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = speechRate;

    utterance.onstart = () => {
      if (cardElement) cardElement.classList.add('speaking');
      toastText.textContent = `朗讀中: "${text}"`;
      audioToast.classList.add('show');
    };

    utterance.onend = () => {
      if (cardElement) cardElement.classList.remove('speaking');
      audioToast.classList.remove('show');
    };

    utterance.onerror = () => {
      if (cardElement) cardElement.classList.remove('speaking');
      audioToast.classList.remove('show');
    };

    synth.speak(utterance);
  }

  /* ------------------------------------------------------------------------
     4. Card Interactions: Modal & Pronunciation & Learned Toggle
     ------------------------------------------------------------------------ */
  function bindCardEvents() {
    const vocabCards = document.querySelectorAll('.vocab-card');
    vocabCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // If audio button specifically clicked
        if (e.target.closest('.audio-btn')) {
          e.stopPropagation();
          const word = card.getAttribute('data-word');
          speakWord(word, card);
          return;
        }

        // If in flashcard mode, click toggles flip
        if (document.body.classList.contains('flashcard-mode')) {
          card.classList.toggle('flipped');
          speakWord(card.getAttribute('data-word'), card);
          return;
        }

        // Default: Open Word Detail Modal
        openWordModal(card);
      });
    });
  }

  function openWordModal(card) {
    const word = card.getAttribute('data-word');
    const ipa = card.getAttribute('data-ipa') || '';
    const cn = card.getAttribute('data-cn') || '';
    const band = card.getAttribute('data-band') || '6.5';
    const example = card.getAttribute('data-example') || '';
    const tip = card.getAttribute('data-tip') || '';
    const iconSvg = card.querySelector('.custom-icon');

    currentModalWord = word;

    modalWordEn.textContent = word;
    modalWordIpa.textContent = ipa;
    modalWordCn.textContent = cn;
    modalExample.textContent = example;
    modalTip.textContent = tip;

    if (modalBandBadge) {
      modalBandBadge.textContent = band;
      modalBandBadge.className = `modal-band-tag ${band === '5.0' ? 'band-5' : band === '7.5+' ? 'band-7' : 'band-6'}`;
    }

    if (iconSvg) {
      modalIcon.innerHTML = iconSvg.outerHTML;
    }

    modalAudioBtn.onclick = () => speakWord(word);
    modalExampleAudioBtn.onclick = () => speakWord(example);

    updateModalLearnBtn();

    speakWord(word, card);
    wordModal.style.display = 'flex';
  }

  function updateModalLearnBtn() {
    if (!modalLearnToggleBtn || !currentModalWord) return;
    if (!currentUser) {
      modalLearnToggleBtn.className = 'modal-learn-btn is-guest';
      modalLearnToggleBtn.innerHTML = `
        <span class="learn-icon">🔒</span>
        <span class="learn-text">標記為已背過 (需登入)</span>
      `;
    } else {
      const learned = isWordLearned(currentModalWord);
      if (learned) {
        modalLearnToggleBtn.className = 'modal-learn-btn is-learned';
        modalLearnToggleBtn.innerHTML = `
          <span class="learn-icon">✅</span>
          <span class="learn-text">已背起來 (點擊取消標記)</span>
        `;
      } else {
        modalLearnToggleBtn.className = 'modal-learn-btn';
        modalLearnToggleBtn.innerHTML = `
          <span class="learn-icon">⬜</span>
          <span class="learn-text">標記為已背過 (綠底標示)</span>
        `;
      }
    }
  }

  if (modalLearnToggleBtn) {
    modalLearnToggleBtn.addEventListener('click', () => {
      if (!currentModalWord) return;
      if (!currentUser) {
        openLoginPromptModal();
        return;
      }
      toggleWordLearned(currentModalWord);
      updateModalLearnBtn();
    });
  }

  closeModalBtn.addEventListener('click', () => {
    wordModal.style.display = 'none';
  });

  wordModal.addEventListener('click', (e) => {
    if (e.target === wordModal) {
      wordModal.style.display = 'none';
    }
  });

  /* ------------------------------------------------------------------------
     5. Login Prompt Modal & Google Auth Integration
     ------------------------------------------------------------------------ */
  function openLoginPromptModal() {
    if (loginPromptModal) {
      loginPromptModal.style.display = 'flex';
      renderGoogleSignInButton();
    }
  }

  function closeLoginPromptModal() {
    if (loginPromptModal) {
      loginPromptModal.style.display = 'none';
    }
  }

  if (closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener('click', closeLoginPromptModal);
  }

  if (loginPromptModal) {
    loginPromptModal.addEventListener('click', (e) => {
      if (e.target === loginPromptModal) {
        closeLoginPromptModal();
      }
    });
  }

  if (btnDemoLogin) {
    btnDemoLogin.addEventListener('click', () => {
      currentUser = {
        id: 'demo_user_ielts_01',
        name: 'Alex (測試用戶)',
        email: 'alex.test@ieltsmindmap.com',
        picture: ''
      };
      localStorage.setItem('ielts_vocab_user', JSON.stringify(currentUser));
      updateUserProfileBar();
      closeLoginPromptModal();
      renderUnit(currentUnitId);
    });
  }

  window.handleGoogleSignInResponse = function(response) {
    if (response && response.credential) {
      const payload = parseJwt(response.credential);
      if (payload) {
        currentUser = {
          id: payload.sub,
          name: payload.name || payload.email,
          email: payload.email,
          picture: payload.picture || ''
        };
        localStorage.setItem('ielts_vocab_user', JSON.stringify(currentUser));
        updateUserProfileBar();
        closeLoginPromptModal();
        renderUnit(currentUnitId);
      }
    }
  };

  function parseJwt(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  }

  // Google OAuth Configuration
  const GOOGLE_CLIENT_ID = '492622968470-ui05h0hun2a894bfk0lbv8e4ldmthpvp.apps.googleusercontent.com';

  function renderGoogleSignInButton() {
    const gsiContainer = document.getElementById('gsiPromptContainer');
    if (!gsiContainer) return;

    const isConfigured = GOOGLE_CLIENT_ID &&
                         !GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE_CLIENT_ID') &&
                         !GOOGLE_CLIENT_ID.includes('965432109876');

    if (isConfigured && window.google && google.accounts && google.accounts.id) {
      gsiContainer.innerHTML = '';
      try {
        google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: window.handleGoogleSignInResponse
        });
        google.accounts.id.renderButton(gsiContainer, {
          theme: 'outline',
          size: 'large',
          width: 280,
          text: 'signin_with',
          shape: 'pill'
        });
      } catch (e) {
        console.warn('Google Auth render warning:', e);
        renderGoogleNotice(gsiContainer);
      }
    } else {
      renderGoogleNotice(gsiContainer);
    }
  }

  function renderGoogleNotice(container) {
    container.innerHTML = `
      <div style="background:#eff6ff; border:1.5px solid #bfdbfe; border-radius:12px; padding:12px 14px; text-align:left; font-size:12px; color:#1e40af; line-height:1.5; margin-bottom:12px;">
        <strong>💡 提示：</strong> 尚未填入您的 Google OAuth Client ID。
        <br><span style="color:#3b82f6;">您可以在 <code>script.js</code> 第 7 行填入 Client ID 即可正式啟用。目前您可以直接點擊下方「測試帳號一鍵登入」立刻體驗完整功能！</span>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     6. Dictation / Spelling Quiz Mode
     ------------------------------------------------------------------------ */
  btnDictationQuiz.addEventListener('click', () => {
    if (dictationQuizPanel.style.display === 'none' || !dictationQuizPanel.style.display) {
      dictationQuizPanel.style.display = 'block';
      startNextQuizQuestion();
    } else {
      dictationQuizPanel.style.display = 'none';
    }
  });

  closeQuizBtn.addEventListener('click', () => {
    dictationQuizPanel.style.display = 'none';
  });

  scopeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scopeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      quizScope = btn.getAttribute('data-scope');
      startNextQuizQuestion();
    });
  });

  function startNextQuizQuestion() {
    let candidateCards = [];

    if (quizScope === 'current') {
      candidateCards = Array.from(document.querySelectorAll('.vocab-card'));
    } else {
      // All units
      const allWords = [];
      Object.keys(window.unitsData).forEach(uKey => {
        const u = window.unitsData[uKey];
        u.quadrants.forEach(q => {
          q.words.forEach(w => {
            allWords.push({ word: w.word, category: `${u.titleEn} - ${q.titleCn}` });
          });
        });
      });

      if (allWords.length > 0) {
        const randomItem = allWords[Math.floor(Math.random() * allWords.length)];
        currentQuizWord = randomItem.word;
        quizHintText.textContent = `類別：${randomItem.category} | 字母數：${currentQuizWord.length} 字`;
        quizInput.value = '';
        quizFeedback.style.display = 'none';
        quizInput.focus();
        setTimeout(() => speakWord(currentQuizWord), 300);
        return;
      }
    }

    if (candidateCards.length === 0) return;

    const randomCard = candidateCards[Math.floor(Math.random() * candidateCards.length)];
    currentQuizWord = randomCard.getAttribute('data-word');
    const sectionPill = randomCard.closest('.quadrant').querySelector('.pill-text');
    const sectionName = sectionPill ? sectionPill.textContent : '';

    quizHintText.textContent = `類別：${sectionName} | 字母數：${currentQuizWord.length} 字`;
    quizInput.value = '';
    quizFeedback.style.display = 'none';
    quizInput.focus();

    setTimeout(() => speakWord(currentQuizWord), 300);
  }

  playQuizAudioBtn.addEventListener('click', () => {
    if (currentQuizWord) {
      speakWord(currentQuizWord);
    }
  });

  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentQuizWord) return;

    const userInput = quizInput.value.trim().toLowerCase();
    const targetWord = currentQuizWord.trim().toLowerCase();

    if (userInput === targetWord) {
      quizScore += 10;
      quizStreak += 1;
      quizScoreEl.textContent = quizScore;
      quizStreakEl.textContent = quizStreak;

      quizFeedback.className = 'quiz-feedback success';
      quizFeedback.textContent = `🎉 太棒了！拼寫正確：${currentQuizWord}`;
      quizFeedback.style.display = 'inline-block';

      setTimeout(startNextQuizQuestion, 1400);
    } else {
      quizStreak = 0;
      quizStreakEl.textContent = quizStreak;

      quizFeedback.className = 'quiz-feedback error';
      quizFeedback.textContent = `❌ 拼寫有誤，請重試！（已重播語音）`;
      quizFeedback.style.display = 'inline-block';

      speakWord(currentQuizWord);
    }
  });

  giveUpQuizBtn.addEventListener('click', () => {
    if (!currentQuizWord) return;
    quizFeedback.className = 'quiz-feedback error';
    quizFeedback.textContent = `💡 正確拼寫是：${currentQuizWord}`;
    quizFeedback.style.display = 'inline-block';
    quizInput.value = currentQuizWord;
  });

  /* ------------------------------------------------------------------------
     7. Speed Toggle, Unit Switcher & Filter Handling
     ------------------------------------------------------------------------ */
  unitSelect.addEventListener('change', (e) => {
    renderUnit(e.target.value);
  });

  speedBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      speedBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      speechRate = parseFloat(btn.getAttribute('data-speed'));
    });
  });

  bandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bandBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBandFilter = btn.getAttribute('data-band');
      applyFilters();
    });
  });

  statusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const status = btn.getAttribute('data-status');
      if (status !== 'all' && !currentUser) {
        openLoginPromptModal();
        return;
      }
      statusBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStatusFilter = status;
      applyFilters();
    });
  });

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const vocabCards = document.querySelectorAll('.vocab-card');

    vocabCards.forEach(card => {
      const word = card.getAttribute('data-word').toLowerCase();
      const cn = card.getAttribute('data-cn').toLowerCase();
      const ipa = (card.getAttribute('data-ipa') || '').toLowerCase();
      const band = card.getAttribute('data-band') || '6.5';
      const isLearned = card.classList.contains('is-learned');

      const matchesSearch = !query || word.includes(query) || cn.includes(query) || ipa.includes(query);
      const matchesBand = (currentBandFilter === 'all') || (band === currentBandFilter);
      const matchesStatus = (currentStatusFilter === 'all') ||
                            (currentStatusFilter === 'learned' && isLearned) ||
                            (currentStatusFilter === 'unlearned' && !isLearned);

      if (!matchesSearch || !matchesStatus) {
        card.style.display = 'none';
        card.classList.remove('dimmed');
      } else {
        card.style.display = 'flex';
        if (!matchesBand) {
          card.classList.add('dimmed');
        } else {
          card.classList.remove('dimmed');
        }
      }
    });
  }

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';
    applyFilters();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    applyFilters();
  });

  toggleFlashcardsBtn.addEventListener('click', () => {
    document.body.classList.toggle('flashcard-mode');
    const isModeActive = document.body.classList.contains('flashcard-mode');

    toggleFlashcardsBtn.style.background = isModeActive ? '#fef3c7' : '#ffffff';
    toggleFlashcardsBtn.style.borderColor = isModeActive ? '#f59e0b' : '#cbd5e1';
  });

  // Initialize App
  updateUserProfileBar();
  renderUnit(currentUnitId);
});
