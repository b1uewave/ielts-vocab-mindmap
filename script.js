/* ==========================================================================
   IELTS Vocab Mindmap - JavaScript Controller
   Dynamic Multi-Unit Support, Bezier Mind-Map Engine, TTS & Dictation Quiz
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Global State
  let currentUnitId = 'unit-1';
  let currentBandFilter = 'all';
  let speechRate = 1.0;
  let synth = window.speechSynthesis;

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
  const modalBandBadge = document.getElementById('modalBandBadge');
  const toggleFlashcardsBtn = document.getElementById('toggleFlashcards');
  const btnDictationQuiz = document.getElementById('btnDictationQuiz');
  const dictationQuizPanel = document.getElementById('dictationQuizPanel');
  const closeQuizBtn = document.getElementById('closeQuizBtn');
  const mindmapWrapper = document.getElementById('mindmapWrapper');
  const audioToast = document.getElementById('audioToast');
  const toastText = document.getElementById('toastText');
  const speedBtns = document.querySelectorAll('.speed-btn');

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
    quadrantsGrid.innerHTML = unit.quadrants.map(q => `
      <section class="quadrant ${q.themeClass}" id="${q.id}">
        <div class="quadrant-header-pill">
          <span class="pill-text">${q.titleCn}</span>
          <span class="count-tag">${q.words.length} 詞</span>
        </div>
        <div class="cards-wrapper grid-layout">
          ${q.words.map(w => {
            const bandVal = w.band || '6.5';
            const bandClass = (bandVal === '5.0') ? 'band-5' : (bandVal === '7.5+') ? 'band-7' : 'band-6';
            return `
            <div class="vocab-card" data-word="${escapeHtml(w.word)}" data-ipa="${escapeHtml(w.ipa)}" data-cn="${escapeHtml(w.cn)}" data-band="${escapeHtml(bandVal)}" data-example="${escapeHtml(w.example)}" data-tip="${escapeHtml(w.tip)}">
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
    `).join('');

    // 4. Bind Card Event Listeners
    bindCardEvents();

    // 5. Apply Active Filters (Search + Band)
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
     4. Card Interactions: Modal & Pronunciation
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

    speakWord(word, card);
    wordModal.style.display = 'flex';
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
     5. Dictation / Spelling Quiz Mode
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
     6. Speed Toggle, Unit Switcher & Search Filter
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

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const vocabCards = document.querySelectorAll('.vocab-card');

    vocabCards.forEach(card => {
      const word = card.getAttribute('data-word').toLowerCase();
      const cn = card.getAttribute('data-cn').toLowerCase();
      const ipa = (card.getAttribute('data-ipa') || '').toLowerCase();
      const band = card.getAttribute('data-band') || '6.5';

      const matchesSearch = !query || word.includes(query) || cn.includes(query) || ipa.includes(query);
      const matchesBand = (currentBandFilter === 'all') || (band === currentBandFilter);

      if (!matchesSearch) {
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

  // Initialize with Unit 1
  renderUnit(currentUnitId);
});
