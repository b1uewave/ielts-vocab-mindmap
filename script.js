/* ==========================================================================
   Unit 1 Accommodation Interactive Mind Map - JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Global State
  let speechRate = 1.0;
  let synth = window.speechSynthesis;
  let currentUtterance = null;

  // DOM Elements
  const svgConnectors = document.getElementById('svgConnectors');
  const centerHub = document.getElementById('centerHub');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearch');
  const toggleFlashcardsBtn = document.getElementById('toggleFlashcards');
  const btnMindmapView = document.getElementById('btnMindmapView');
  const btnGridView = document.getElementById('btnGridView');
  const mindmapWrapper = document.getElementById('mindmapWrapper');
  const audioToast = document.getElementById('audioToast');
  const toastText = document.getElementById('toastText');
  const speedBtns = document.querySelectorAll('.speed-btn');
  const vocabCards = document.querySelectorAll('.vocab-card');

  // Theme color dictionary for SVG connectors
  const themeColors = {
    sectionRoomTypes: '#3b82f6', // Blue
    sectionFacilities: '#22c55e', // Green
    sectionRent: '#8b5cf6',       // Purple
    sectionHighFreq: '#f97316'    // Orange
  };

  /* ------------------------------------------------------------------------
     1. Draw SVG Connecting Mind-Map Branches
     ------------------------------------------------------------------------ */
  function drawConnectors() {
    if (!svgConnectors || window.innerWidth <= 992 || mindmapWrapper.classList.contains('grid-view')) {
      if (svgConnectors) svgConnectors.innerHTML = '';
      return;
    }

    const wrapperRect = mindmapWrapper.getBoundingClientRect();
    const hubRect = centerHub.getBoundingClientRect();

    // Center point of the Hub
    const hubX = hubRect.left + hubRect.width / 2 - wrapperRect.left;
    const hubY = hubRect.top + hubRect.height / 3 - wrapperRect.top;

    let svgContent = '';

    // Draw branch for each of the 4 quadrant sections
    const sections = document.querySelectorAll('.quadrant');
    sections.forEach((sec) => {
      const secId = sec.id;
      const secRect = sec.getBoundingClientRect();
      const color = themeColors[secId] || '#94a3b8';

      let targetX, targetY;
      let controlX1, controlY1, controlX2, controlY2;

      // Determine anchor point based on position relative to hub
      if (secId === 'sectionRoomTypes') {
        // Top Left
        targetX = secRect.right - wrapperRect.left - 20;
        targetY = secRect.bottom - wrapperRect.top - 30;
        controlX1 = hubX - 120;
        controlY1 = hubY;
        controlX2 = targetX + 80;
        controlY2 = targetY + 60;
      } else if (secId === 'sectionFacilities') {
        // Top Right
        targetX = secRect.left - wrapperRect.left + 20;
        targetY = secRect.bottom - wrapperRect.top - 30;
        controlX1 = hubX + 120;
        controlY1 = hubY;
        controlX2 = targetX - 80;
        controlY2 = targetY + 60;
      } else if (secId === 'sectionRent') {
        // Bottom Left
        targetX = secRect.right - wrapperRect.left - 20;
        targetY = secRect.top - wrapperRect.top + 30;
        controlX1 = hubX - 120;
        controlY1 = hubY + 40;
        controlX2 = targetX + 80;
        controlY2 = targetY - 60;
      } else if (secId === 'sectionHighFreq') {
        // Bottom Right
        targetX = secRect.left - wrapperRect.left + 20;
        targetY = secRect.top - wrapperRect.top + 30;
        controlX1 = hubX + 120;
        controlY1 = hubY + 40;
        controlX2 = targetX - 80;
        controlY2 = targetY - 60;
      }

      // Draw SVG Bezier Curve with double stroke effect
      svgContent += `
        <path d="M ${hubX} ${hubY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${targetX} ${targetY}"
              fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" opacity="0.3" />
        <path d="M ${hubX} ${hubY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${targetX} ${targetY}"
              fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 4" />
        <circle cx="${targetX}" cy="${targetY}" r="6" fill="${color}" />
      `;
    });

    // Add Center Node Connection Anchor Dot
    svgContent += `<circle cx="${hubX}" cy="${hubY}" r="8" fill="#1e293b" />`;

    svgConnectors.innerHTML = svgContent;
  }

  // Initial draw and dynamic resize listener
  drawConnectors();
  window.addEventListener('resize', debounce(drawConnectors, 100));

  /* ------------------------------------------------------------------------
     2. Text-To-Speech (Audio Pronunciation)
     ------------------------------------------------------------------------ */
  function speakWord(word, cardElement) {
    if (!synth) {
      alert('您的瀏覽器不支援語音合成功能');
      return;
    }

    // Cancel current speech if active
    if (synth.speaking) {
      synth.cancel();
      document.querySelectorAll('.vocab-card.speaking').forEach(c => c.classList.remove('speaking'));
    }

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = speechRate;
    utterance.pitch = 1.0;

    // Toast and Animation State
    utterance.onstart = () => {
      cardElement.classList.add('speaking');
      toastText.textContent = `朗讀中: "${word}"`;
      audioToast.classList.add('show');
    };

    utterance.onend = () => {
      cardElement.classList.remove('speaking');
      audioToast.classList.remove('show');
    };

    utterance.onerror = () => {
      cardElement.classList.remove('speaking');
      audioToast.classList.remove('show');
    };

    currentUtterance = utterance;
    synth.speak(utterance);
  }

  // Bind Card Click Events for Pronunciation
  vocabCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const word = card.getAttribute('data-word');
      
      // If in flashcard mode, click toggles flip to reveal Chinese
      if (document.body.classList.contains('flashcard-mode')) {
        card.classList.toggle('flipped');
      }

      speakWord(word, card);
    });

    // Dedicated Audio Button click stops propagation
    const audioBtn = card.querySelector('.audio-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = card.getAttribute('data-word');
        speakWord(word, card);
      });
    }
  });

  // Speed Selector Buttons
  speedBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      speedBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      speechRate = parseFloat(btn.getAttribute('data-speed'));
    });
  });

  /* ------------------------------------------------------------------------
     3. Search & Instant Filter
     ------------------------------------------------------------------------ */
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (query.length > 0) {
      clearSearchBtn.style.display = 'block';
    } else {
      clearSearchBtn.style.display = 'none';
    }

    vocabCards.forEach(card => {
      const wordEn = card.getAttribute('data-word').toLowerCase();
      const wordCn = card.getAttribute('data-cn').toLowerCase();

      if (query === '') {
        card.classList.remove('dimmed', 'highlight');
      } else if (wordEn.includes(query) || wordCn.includes(query)) {
        card.classList.remove('dimmed');
        card.classList.add('highlight');
      } else {
        card.classList.remove('highlight');
        card.classList.add('dimmed');
      }
    });
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    vocabCards.forEach(card => card.classList.remove('dimmed', 'highlight'));
    searchInput.focus();
  });

  /* ------------------------------------------------------------------------
     4. Flashcard Quiz Mode Toggle
     ------------------------------------------------------------------------ */
  toggleFlashcardsBtn.addEventListener('click', () => {
    document.body.classList.toggle('flashcard-mode');
    toggleFlashcardsBtn.classList.toggle('active');
    
    if (document.body.classList.contains('flashcard-mode')) {
      toggleFlashcardsBtn.querySelector('.label').textContent = '顯示中文 (結束背單字)';
    } else {
      toggleFlashcardsBtn.querySelector('.label').textContent = '遮蔽中文 (背單字)';
      vocabCards.forEach(c => c.classList.remove('flipped'));
    }
  });

  /* ------------------------------------------------------------------------
     5. View Mode Switching (Mindmap / Grid)
     ------------------------------------------------------------------------ */
  btnMindmapView.addEventListener('click', () => {
    btnMindmapView.classList.add('active');
    btnGridView.classList.remove('active');
    mindmapWrapper.classList.remove('grid-view');
    drawConnectors();
  });

  btnGridView.addEventListener('click', () => {
    btnGridView.classList.add('active');
    btnMindmapView.classList.remove('active');
    mindmapWrapper.classList.add('grid-view');
    drawConnectors();
  });

  /* ------------------------------------------------------------------------
     Utility: Debounce function for performance
     ------------------------------------------------------------------------ */
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
});
