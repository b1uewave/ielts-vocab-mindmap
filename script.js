/* ==========================================================================
   IELTS Vocab Mindmap - JavaScript Controller
   Dynamic Multi-Unit Support, Bezier Mind-Map Engine, TTS, Auth & Dictation Quiz
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Global State
  let currentSubject = 'ielts'; // 'ielts' or 'swe-interview'
  let currentRoleTrack = 'all'; // 'all', 'frontend', 'backend', 'sre', 'sdet', 'mobile'
  let sweUnlocked = localStorage.getItem('swe_interview_unlocked') === 'true';
  const VIP_PASSCODE = 'SWE2026';
  let currentUnitId = 'unit-1';
  let currentBandFilter = 'all';
  let currentStatusFilter = 'all'; // 'all', 'learned', 'unlearned'
  let currentQuadrantView = 'all'; // 'all' or specific quadrant id
  let speechRate = 1.0;
  let synth = window.speechSynthesis;

  // User Auth & Memory Tracking State
  let currentUser = null;
  try {
    const stored = localStorage.getItem('ielts_vocab_user');
    if (stored && stored !== 'undefined' && stored !== 'null') {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object' && (parsed.id || parsed.email || parsed.name)) {
        currentUser = parsed;
      }
    }
  } catch (e) {
    currentUser = null;
  }
  let currentModalWord = null;

  // Dictation Quiz State
  let quizScope = 'current'; // 'current' or 'all'
  let currentQuizWord = null;
  let quizScore = 0;
  let quizStreak = 0;

  // Theme color dictionary for dynamic SVG connectors
  let currentThemeColors = {};

  // DOM Elements
  const subjectSelect = document.getElementById('subjectSelect');
  const roleTrackFilterGroup = document.getElementById('roleTrackFilterGroup');
  const roleBtns = document.querySelectorAll('.role-btn');
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

  // Access Code Modal Elements
  const accessCodeModal = document.getElementById('accessCodeModal');
  const closeAccessModalBtn = document.getElementById('closeAccessModalBtn');
  const accessCodeInput = document.getElementById('accessCodeInput');
  const btnSubmitAccessCode = document.getElementById('btnSubmitAccessCode');
  const accessCodeError = document.getElementById('accessCodeError');

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
  /* ------------------------------------------------------------------------
     0. Supabase (PostgreSQL) Database Integration & Hybrid Sync
     ------------------------------------------------------------------------ */
  // Supabase Configuration
  const SUPABASE_URL = 'https://fcceeisskcgegpbvuzch.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_Ht3BFrEwq9-t8-EPXJPr_g_rIxttZpm';

  let supabase = null;
  let isSupabaseConfigured = false;

  function initSupabase() {
    if (window.supabase && window.supabase.createClient) {
      if (SUPABASE_URL && SUPABASE_ANON_KEY &&
          !SUPABASE_URL.includes('YOUR_SUPABASE_URL') &&
          !SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY')) {
        try {
          supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          isSupabaseConfigured = true;
        } catch (e) {
          console.warn('Supabase init warning:', e);
          isSupabaseConfigured = false;
        }
      }
    }
  }

  initSupabase();

  async function syncLearnedWordsFromSupabase(userId) {
    if (!isSupabaseConfigured || !supabase || !userId) return;
    try {
      const { data, error } = await supabase
        .from('user_learned_words')
        .select('word')
        .eq('user_id', userId);

      if (error) {
        console.warn('Supabase fetch error:', error);
        return;
      }

      if (data && Array.isArray(data)) {
        const localSet = getLearnedSet();
        data.forEach(item => {
          if (item && item.word) {
            localSet.add(item.word.trim().toLowerCase());
          }
        });
        saveLearnedSet(localSet);
        updateUserProfileBar();
        renderUnit(currentUnitId);
      }
    } catch (e) {
      console.warn('Supabase sync exception:', e);
    }
  }

  async function addWordToSupabase(userId, word, unitId = '') {
    if (!isSupabaseConfigured || !supabase || !userId || !word) return;
    try {
      await supabase
        .from('user_learned_words')
        .upsert(
          { user_id: userId, word: word.trim().toLowerCase(), unit_id: unitId },
          { onConflict: 'user_id,word' }
        );
    } catch (e) {
      console.warn('Supabase insert error:', e);
    }
  }

  async function removeWordFromSupabase(userId, word) {
    if (!isSupabaseConfigured || !supabase || !userId || !word) return;
    try {
      await supabase
        .from('user_learned_words')
        .delete()
        .eq('user_id', userId)
        .eq('word', word.trim().toLowerCase());
    } catch (e) {
      console.warn('Supabase delete error:', e);
    }
  }

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
      if (isSupabaseConfigured) {
        removeWordFromSupabase(currentUser.id, wordKey);
      }
    } else {
      set.add(wordKey);
      isNowLearned = true;
      if (isSupabaseConfigured) {
        addWordToSupabase(currentUser.id, wordKey, currentUnitId);
      }
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

      const cloudBadgeHtml = isSupabaseConfigured
        ? `<span class="cloud-status-badge synced" title="已成功連接 Supabase PostgreSQL 雲端資料庫">☁️ 雲端同步</span>`
        : `<span class="cloud-status-badge local" title="使用 LocalStorage 本機快取模式">💾 本機快取</span>`;

      userProfileBar.innerHTML = `
        <div class="user-logged-in-box">
          ${avatarHtml}
          <div class="user-info">
            <span class="user-name">${escapeHtml(currentUser.name)}</span>
          </div>
          ${cloudBadgeHtml}
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
          if (currentSubject === 'swe-interview') {
            currentSubject = 'ielts';
            if (subjectSelect) subjectSelect.value = 'ielts';
            populateUnitDropdown();
            currentUnitId = 'unit-1';
            unitSelect.value = 'unit-1';
          }
          renderUnit(currentUnitId);
        });
      }
    } else {
      userProfileBar.innerHTML = `
        <div class="user-badge-guest">
          <span class="guest-status-text">👤 訪客模式</span>
          <button class="btn-google-login" id="headerGoogleLoginBtn" title="點擊進行 Google 登入">
            <span>🔑 Google 帳號登入</span>
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

  function isGmailUser() {
    if (!currentUser || !currentUser.email) return false;
    const email = currentUser.email.toLowerCase().trim();
    return email.endsWith('@gmail.com') || email.includes('gmail');
  }

  function checkSWEAccess() {
    return isGmailUser();
  }

  if (subjectSelect) {
    subjectSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      if (selected === 'swe-interview') {
        if (!checkSWEAccess()) {
          subjectSelect.value = currentSubject;
          openLoginPromptModal();
          return;
        }
      }
      currentSubject = selected;
      currentQuadrantView = 'all';
      populateUnitDropdown();
      const defaultUnit = (currentSubject === 'swe-interview') ? 'swe-mod-1' : 'unit-1';
      unitSelect.value = defaultUnit;
      renderUnit(defaultUnit);
    });
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
     Bookmark / Favorite QA Questions Helpers
     ------------------------------------------------------------------------ */
  function getBookmarkedQASet() {
    const raw = localStorage.getItem('ielts_vocab_bookmarked_qa');
    if (!raw) return new Set();
    try {
      return new Set(JSON.parse(raw));
    } catch (e) {
      return new Set();
    }
  }

  function saveBookmarkedQASet(set) {
    localStorage.setItem('ielts_vocab_bookmarked_qa', JSON.stringify(Array.from(set)));
  }

  function isQABookmarked(qaId) {
    return getBookmarkedQASet().has(qaId);
  }

  function toggleQABookmark(qaId) {
    const set = getBookmarkedQASet();
    let isNowBookmarked = false;
    if (set.has(qaId)) {
      set.delete(qaId);
      isNowBookmarked = false;
    } else {
      set.add(qaId);
      isNowBookmarked = true;
    }
    saveBookmarkedQASet(set);
    return isNowBookmarked;
  }

  function updateHeaderControlsForSubject() {
    const bandFilterGroup = document.querySelector('.band-filter-group');
    const filterLearnedBtnText = document.querySelector('#filterLearnedBtn .btn-text');
    const filterUnlearnedBtnText = document.querySelector('#filterUnlearnedBtn .btn-text');
    const btnToggleAllQA = document.getElementById('btnToggleAllQA');

    if (currentSubject === 'swe-interview') {
      if (bandFilterGroup) bandFilterGroup.style.display = 'none';
      if (btnDictationQuiz) btnDictationQuiz.style.display = 'none';
      if (btnToggleAllQA) btnToggleAllQA.style.display = 'inline-flex';
      if (filterLearnedBtnText) filterLearnedBtnText.textContent = '已收藏 ⭐';
      if (filterUnlearnedBtnText) filterUnlearnedBtnText.textContent = '未收藏 ⏳';
    } else {
      if (bandFilterGroup) bandFilterGroup.style.display = 'flex';
      if (btnDictationQuiz) btnDictationQuiz.style.display = 'inline-flex';
      if (btnToggleAllQA) btnToggleAllQA.style.display = 'none';
      if (filterLearnedBtnText) filterLearnedBtnText.textContent = '已背完 ✅';
      if (filterUnlearnedBtnText) filterUnlearnedBtnText.textContent = '未背完 ⏳';
    }
  }

  const btnToggleAllQA = document.getElementById('btnToggleAllQA');
  if (btnToggleAllQA) {
    btnToggleAllQA.addEventListener('click', () => {
      const qaCards = document.querySelectorAll('.qa-card');
      if (qaCards.length === 0) return;

      const hasCollapsed = Array.from(qaCards).some(card => card.classList.contains('collapsed'));

      qaCards.forEach(card => {
        const indicator = card.querySelector('.qa-toggle-indicator');
        if (hasCollapsed) {
          card.classList.remove('collapsed');
          card.classList.add('expanded');
          if (indicator) indicator.innerHTML = '▲ 收起詳情 🔼';
        } else {
          card.classList.remove('expanded');
          card.classList.add('collapsed');
          if (indicator) indicator.innerHTML = '💡 點擊展開範例與解說 🔽';
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     1. Dynamic Unit Rendering Engine & Subject Switcher
     ------------------------------------------------------------------------ */
  function getCurrentDataset() {
    return (currentSubject === 'swe-interview') ? window.interviewData : window.unitsData;
  }

  function populateUnitDropdown() {
    if (!unitSelect) return;
    unitSelect.innerHTML = '';
    const dataset = getCurrentDataset();
    if (dataset) {
      Object.keys(dataset).forEach(uId => {
        const u = dataset[uId];
        const opt = document.createElement('option');
        opt.value = uId;
        if (currentSubject === 'swe-interview') {
          opt.textContent = u.moduleName || `Module ${u.number}: ${u.titleEn} (${u.titleCn})`;
        } else {
          opt.textContent = `Unit ${u.number}: ${u.titleEn} (${u.titleCn})`;
        }
        unitSelect.appendChild(opt);
      });
    }

    // Toggle visibility of roleTrackFilterGroup
    if (roleTrackFilterGroup) {
      roleTrackFilterGroup.style.display = (currentSubject === 'swe-interview') ? 'flex' : 'none';
    }

    updateHeaderControlsForSubject();
  }

  function checkSWEAccess() {
    if (sweUnlocked) return true;
    return false;
  }

  function openAccessCodeModal() {
    if (accessCodeModal) {
      accessCodeModal.style.display = 'flex';
      if (accessCodeInput) accessCodeInput.value = '';
      if (accessCodeError) accessCodeError.style.display = 'none';
      if (accessCodeInput) accessCodeInput.focus();
    }
  }

  function closeAccessCodeModal() {
    if (accessCodeModal) {
      accessCodeModal.style.display = 'none';
    }
  }

  if (closeAccessModalBtn) {
    closeAccessModalBtn.addEventListener('click', closeAccessCodeModal);
  }

  if (accessCodeModal) {
    accessCodeModal.addEventListener('click', (e) => {
      if (e.target === accessCodeModal) {
        closeAccessCodeModal();
      }
    });
  }

  if (btnSubmitAccessCode) {
    btnSubmitAccessCode.addEventListener('click', () => {
      const input = (accessCodeInput ? accessCodeInput.value : '').trim();
      if (input === VIP_PASSCODE || input.toUpperCase() === 'SWE2026' || input.toLowerCase() === 'admin') {
        sweUnlocked = true;
        localStorage.setItem('swe_interview_unlocked', 'true');
        closeAccessCodeModal();
        currentSubject = 'swe-interview';
        if (subjectSelect) subjectSelect.value = 'swe-interview';
        currentQuadrantView = 'all';
        populateUnitDropdown();
        unitSelect.value = 'swe-mod-1';
        renderUnit('swe-mod-1');
      } else {
        if (accessCodeError) accessCodeError.style.display = 'block';
      }
    });
  }

  }

  if (roleBtns) {
    roleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        roleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentRoleTrack = btn.getAttribute('data-role');
        renderUnit(currentUnitId);
        applyFilters();
      });
    });
  }

  function renderUnit(unitId) {
    const dataset = getCurrentDataset();
    const unit = dataset ? dataset[unitId] : null;
    if (!unit) return;

    currentUnitId = unitId;

    // 1. Update Header Information
    if (currentSubject === 'swe-interview') {
      brandBadge.textContent = unit.moduleName || 'SWE Interview';
      pageTitle.textContent = unit.badgeText;
    } else {
      brandBadge.textContent = `IELTS Mindmap • Unit ${unit.number}`;
      pageTitle.textContent = unit.badgeText;
    }

    // 2. Render Top Bar Unit Hero (Illustration & Sticky Note)
    if (topBarGraphic) {
      topBarGraphic.innerHTML = `
        <div class="cloud-title-box">
          <h2>${currentSubject === 'swe-interview' ? (unit.moduleName ? unit.moduleName.split(':')[0] : `Module ${unit.number}`) : `Unit ${unit.number}`}<br><span class="en-title">${escapeHtml(unit.titleEn)}</span><br><span class="cn-title">${escapeHtml(unit.titleCn)}</span></h2>
        </div>
        <div class="hero-svg-wrapper">
          ${unit.centerSvg || ''}
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

    // 3. Render QA Cards or Quadrants
    if (unit.type === 'qa-cards') {
      quadrantsGrid.classList.remove('single-quadrant-mode');

      const itemsToRender = (currentSubject === 'swe-interview' && currentRoleTrack !== 'all')
        ? unit.items.filter(item => item.roleTrack === 'general' || item.roleTrack === currentRoleTrack)
        : unit.items;

      quadrantsGrid.innerHTML = `
        <div class="qa-cards-container">
          ${itemsToRender.map(item => `
            <div class="qa-card collapsed" data-qa-id="${item.id}" data-role="${item.roleTrack || 'general'}">
              <div class="qa-card-header">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span class="qa-category-badge">${escapeHtml(item.category)}</span>
                  <button class="qa-bookmark-btn ${isQABookmarked(item.id) ? 'is-bookmarked' : ''}" data-qa-id="${item.id}">
                    ⭐ ${isQABookmarked(item.id) ? '已收藏' : '收藏考題'}
                  </button>
                </div>
                <span class="qa-toggle-indicator">💡 點擊展開範例與解說 🔽</span>
              </div>
              <div class="qa-question-box">
                <div class="qa-question-en">❓ ${escapeHtml(item.questionEn)}</div>
                <div class="qa-question-cn">${escapeHtml(item.questionCn)}</div>
              </div>
              <div class="qa-card-details">
                <div class="qa-answer-box">
                  <div class="qa-answer-header">
                    <strong>💬 口述答題範例 (Model Answer)：</strong>
                    <div style="display:flex; gap:8px;">
                      <button class="qa-audio-btn play-qa-answer-btn" data-text="${escapeHtml(item.answerEn)}">🔊 朗讀回答</button>
                      <button class="qa-audio-btn secondary play-qa-slow-btn" data-text="${escapeHtml(item.answerEn)}">🐢 0.75x 慢速跟讀</button>
                    </div>
                  </div>
                  <div class="qa-answer-en">${escapeHtml(item.answerEn)}</div>
                  <div class="qa-answer-cn">${escapeHtml(item.answerCn)}</div>
                </div>
                ${item.keywords && item.keywords.length > 0 ? `
                  <div class="qa-keywords-section">
                    <div class="qa-keywords-title">💡 關鍵詞彙與句型發音 (Keywords & IPA)：</div>
                    <div class="qa-keywords-list">
                      ${item.keywords.map(kw => `
                        <div class="qa-keyword-chip play-keyword-btn" data-word="${escapeHtml(kw.word)}">
                          <span class="word-text">${escapeHtml(kw.word)}</span>
                          ${kw.ipa ? `<span class="word-ipa">${escapeHtml(kw.ipa)}</span>` : ''}
                          <span class="word-cn">${escapeHtml(kw.cn)}</span>
                          <span>🔊</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}

                <!-- Voice Recognition Challenge Practice -->
                <div class="qa-voice-practice-section">
                  <div class="qa-voice-header">
                    <span>🎙️ 口語跟讀與發音測試 (Voice Challenge)：</span>
                    <button class="record-btn start-record-btn" data-target="${escapeHtml(item.answerEn)}">🎤 點擊開始錄音跟讀</button>
                  </div>
                  <div class="voice-result-box"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      // Bind QA Card click expand / collapse
      quadrantsGrid.querySelectorAll('.qa-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.qa-audio-btn') || e.target.closest('.play-keyword-btn') || e.target.closest('.record-btn') || e.target.closest('.qa-bookmark-btn')) {
            return;
          }
          const isExpanded = card.classList.contains('expanded');
          const indicator = card.querySelector('.qa-toggle-indicator');
          if (isExpanded) {
            card.classList.remove('expanded');
            card.classList.add('collapsed');
            if (indicator) indicator.innerHTML = '💡 點擊展開範例與解說 🔽';
          } else {
            card.classList.remove('collapsed');
            card.classList.add('expanded');
            if (indicator) indicator.innerHTML = '▲ 收起詳情 🔼';
          }
        });
      });

      // Bind Bookmark button click
      quadrantsGrid.querySelectorAll('.qa-bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const qaId = btn.getAttribute('data-qa-id');
          const isBookmarked = toggleQABookmark(qaId);
          btn.classList.toggle('is-bookmarked', isBookmarked);
          btn.innerHTML = `⭐ ${isBookmarked ? '已收藏' : '收藏考題'}`;
          applyFilters();
        });
      });

      // Bind QA audio button events
      quadrantsGrid.querySelectorAll('.play-qa-answer-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          speakText(btn.getAttribute('data-text'), speechRate);
        });
      });
      quadrantsGrid.querySelectorAll('.play-qa-slow-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          speakText(btn.getAttribute('data-text'), 0.75);
        });
      });
      quadrantsGrid.querySelectorAll('.play-keyword-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          speakWord(btn.getAttribute('data-word'));
        });
      });

      // Bind Speech Recognition Voice Challenge
      quadrantsGrid.querySelectorAll('.start-record-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const card = btn.closest('.qa-card');
          const resultBox = card.querySelector('.voice-result-box');
          const targetText = btn.getAttribute('data-target');

          const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          if (!SpeechRecognition) {
            alert('您的瀏覽器暫不支援麥克風語音辨識功能，建議使用 Chrome 或 Edge 瀏覽器進行跟讀測試！');
            return;
          }

          const recognition = new SpeechRecognition();
          recognition.lang = 'en-US';
          recognition.interimResults = false;

          btn.classList.add('recording');
          btn.textContent = '🔴 正在聆聽中... (請唸出答案)';
          if (resultBox) {
            resultBox.style.display = 'block';
            resultBox.textContent = '🎙️ 正在收音中，請大聲唸出英文答題句型...';
          }

          recognition.onresult = (event) => {
            btn.classList.remove('recording');
            btn.textContent = '🎤 點擊重新錄音跟讀';
            const transcript = event.results[0][0].transcript;

            // Calculate word match percentage
            const targetWords = targetText.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').filter(Boolean);
            const spokenWords = transcript.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').filter(Boolean);
            const matchedWords = targetWords.filter(w => spokenWords.includes(w));
            const matchPct = Math.round((matchedWords.length / targetWords.length) * 100);

            if (resultBox) {
              let feedbackMsg = matchPct >= 70 ? '🎉 太棒了！發音清晰又精準！' : matchPct >= 40 ? '👍 表現不錯！關鍵字有唸出來！' : '💪 繼續加油，可以再多聽幾次跟讀！';
              resultBox.innerHTML = `
                <strong>語音辨識結果：</strong> "${escapeHtml(transcript)}"<br>
                <strong>關鍵字匹配度：</strong> <span style="color:#059669; font-weight:700;">${matchPct}%</span> (${matchedWords.length}/${targetWords.length} 字關鍵詞)<br>
                <span style="color:#2563eb; font-weight:600;">${feedbackMsg}</span>
              `;
            }
          };

          recognition.onerror = () => {
            btn.classList.remove('recording');
            btn.textContent = '🎤 點擊錄音跟讀';
            if (resultBox) {
              resultBox.innerHTML = `<span style="color:#ef4444;">❌ 錄音辨識超時或未偵測到聲音，請確認麥克風權限後再試一次！</span>`;
            }
          };

          recognition.start();
        });
      });

      return;
    }

    // 3. Render Quadrants Grid & Cards
    if (currentQuadrantView === 'all') {
      quadrantsGrid.classList.remove('single-quadrant-mode');
      // OVERVIEW MODE: Render ALL 4 Quadrant sections, each showing up to 9 featured cards + 10th More card
      quadrantsGrid.innerHTML = unit.quadrants.map(q => {
        let qWords = [...q.words];

        if (currentSubject === 'swe-interview' && currentRoleTrack !== 'all') {
          qWords = qWords.filter(w => !w.roleTrack || w.roleTrack === 'general' || w.roleTrack === currentRoleTrack);
        }

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
          const isTool = w.isTool || w.band === 'Tool';
          const bandVal = isTool ? '🛠️ Tool' : (w.band || '6.5');
          const bandClass = isTool ? 'band-tool' : ((w.band === '5.0') ? 'band-5' : (w.band === '7.5+') ? 'band-7' : 'band-6');
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
              const isTool = w.isTool || w.band === 'Tool';
              const bandVal = isTool ? '🛠️ Tool' : (w.band || '6.5');
              const bandClass = isTool ? 'band-tool' : ((w.band === '5.0') ? 'band-5' : (w.band === '7.5+') ? 'band-7' : 'band-6');
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

  function speakText(text, rate = 1.0) {
    if (!synth || !text) return;
    if (synth.speaking) {
      synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;

    utterance.onstart = () => {
      if (toastText && audioToast) {
        toastText.textContent = `朗讀中 (${rate === 0.75 ? '慢速' : '正常'}): "${text.substring(0, 35)}..."`;
        audioToast.classList.add('show');
      }
    };

    utterance.onend = () => {
      if (audioToast) audioToast.classList.remove('show');
    };

    utterance.onerror = () => {
      if (audioToast) audioToast.classList.remove('show');
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

  function getTimestampString() {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    const HH = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const SS = String(now.getSeconds()).padStart(2, '0');
    return `${YYYY}${MM}${DD}${HH}${mm}${SS}`;
  }

  function createNewDemoUser() {
    const ts = getTimestampString();
    const newUser = {
      id: `demo_${ts}`,
      name: `Alex (測試用戶)`,
      email: `demo_${ts}@ieltsmindmap.com`,
      picture: ''
    };
    localStorage.setItem('ielts_vocab_last_demo_user', JSON.stringify(newUser));
    return newUser;
  }

  if (btnDemoLogin) {
    btnDemoLogin.addEventListener('click', () => {
      const lastDemo = localStorage.getItem('ielts_vocab_last_demo_user');
      if (lastDemo) {
        try {
          currentUser = JSON.parse(lastDemo);
        } catch (e) {
          currentUser = createNewDemoUser();
        }
      } else {
        currentUser = createNewDemoUser();
      }
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
    const qaCards = document.querySelectorAll('.qa-card');

    // 1. Filter Vocab Cards (IELTS / Mindmap)
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

    // 2. Filter QA Cards (SWE Interview)
    qaCards.forEach(card => {
      const qEn = (card.querySelector('.qa-question-en') ? card.querySelector('.qa-question-en').textContent : '').toLowerCase();
      const qCn = (card.querySelector('.qa-question-cn') ? card.querySelector('.qa-question-cn').textContent : '').toLowerCase();
      const aEn = (card.querySelector('.qa-answer-en') ? card.querySelector('.qa-answer-en').textContent : '').toLowerCase();
      const aCn = (card.querySelector('.qa-answer-cn') ? card.querySelector('.qa-answer-cn').textContent : '').toLowerCase();
      const cat = (card.querySelector('.qa-category-badge') ? card.querySelector('.qa-category-badge').textContent : '').toLowerCase();
      const qaId = card.getAttribute('data-qa-id') || '';
      const isBookmarked = isQABookmarked(qaId);

      const matchesSearch = !query || qEn.includes(query) || qCn.includes(query) || aEn.includes(query) || aCn.includes(query) || cat.includes(query);
      const matchesStatus = (currentStatusFilter === 'all') ||
                            (currentStatusFilter === 'learned' && isBookmarked) ||
                            (currentStatusFilter === 'unlearned' && !isBookmarked);

      if (!matchesSearch || !matchesStatus) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
        if (query && query.length > 0) {
          card.classList.remove('collapsed');
          card.classList.add('expanded');
          const indicator = card.querySelector('.qa-toggle-indicator');
          if (indicator) indicator.innerHTML = '▲ 收起詳情 🔼';
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
  populateUnitDropdown();
  updateUserProfileBar();
  renderUnit(currentUnitId);

  if (currentUser && currentUser.id) {
    syncLearnedWordsFromSupabase(currentUser.id);
  }
});
