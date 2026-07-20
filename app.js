// Italian Travel Guide - Interactive Engine

// Phrase Database
const phrases = [
  // Module 1: Greetings & Essentials
  {
    id: 1,
    phrase: "Ciao",
    phonetic: "chow",
    translation: "Hi / Bye",
    category: "Greetings",
    module: 1,
    tip: "A universal greeting. Use it with friends, peers, and in casual settings for both hello and goodbye."
  },
  {
    id: 2,
    phrase: "Buongiorno",
    phonetic: "bwohn-JOR-noh",
    translation: "Good morning / Hello",
    category: "Greetings",
    module: 1,
    tip: "Polite greeting used from morning until afternoon. It means 'Good day'."
  },
  {
    id: 3,
    phrase: "Buonasera",
    phonetic: "bwoh-nah-SEH-rah",
    translation: "Good evening",
    category: "Greetings",
    module: 1,
    tip: "Used starting around 4:00 PM or 5:00 PM. A polite way to greet shopkeepers or hosts in the evening."
  },
  {
    id: 4,
    phrase: "Per favore",
    phonetic: "pehr fah-VOH-reh",
    translation: "Please",
    category: "Essentials",
    module: 1,
    tip: "Crucial for politeness. Add it to any request, e.g., 'Un caffè, per favore.'"
  },
  {
    id: 5,
    phrase: "Grazie",
    phonetic: "GRAHT-tsyeh",
    translation: "Thank you",
    category: "Essentials",
    module: 1,
    tip: "To say 'thank you very much', say 'Grazie mille' (GRAHT-tsyeh MEE-leh)."
  },
  {
    id: 6,
    phrase: "Prego",
    phonetic: "PREH-goh",
    translation: "You're welcome",
    category: "Essentials",
    module: 1,
    tip: "Also used by servers to mean 'please go ahead' or 'how can I help you?' when seating you or handing you food."
  },
  {
    id: 7,
    phrase: "Sì / No",
    phonetic: "see / noh",
    translation: "Yes / No",
    category: "Essentials",
    module: 1,
    tip: "Simple, but essential. Make sure to pronounce 'Sì' clearly, and nod or shake your head as appropriate."
  },
  {
    id: 8,
    phrase: "Scusi",
    phonetic: "SKOO-zee",
    translation: "Excuse me (formal)",
    category: "Essentials",
    module: 1,
    tip: "Use this to get someone's attention (like a waiter or passerby) or to apologize if you bump into someone."
  },
  {
    id: 9,
    phrase: "Parla inglese?",
    phonetic: "PAR-lah een-GLEH-zeh?",
    translation: "Do you speak English?",
    category: "Essentials",
    module: 1,
    tip: "A polite formal question. Most Italians in tourist areas do, but they appreciate you asking in Italian first!"
  },
  {
    id: 10,
    phrase: "Non parlo italiano",
    phonetic: "nohn PAR-loh ee-tah-LYAH-noh",
    translation: "I don't speak Italian",
    category: "Essentials",
    module: 1,
    tip: "Combine this with 'Scusi' to set expectations: 'Scusi, non parlo italiano.'"
  },

  // Module 2: Directions & Getting Around
  {
    id: 11,
    phrase: "Dov'è...?",
    phonetic: "doh-VEH...?",
    translation: "Where is...?",
    category: "Directions",
    module: 2,
    tip: "The most important tool for navigation. Just attach a noun. Dov'è + [place]?"
  },
  {
    id: 12,
    phrase: "il bagno",
    phonetic: "eel BAHN-yoh",
    translation: "the bathroom",
    category: "Directions",
    module: 2,
    tip: "Combine with Dov'è: 'Dov'è il bagno?' to ask where the restroom is."
  },
  {
    id: 13,
    phrase: "la stazione",
    phonetic: "lah staht-tsyoh-neh",
    translation: "the station",
    category: "Directions",
    module: 2,
    tip: "Refers to the train station (la stazione dei treni) or bus station. Very handy for day trips."
  },
  {
    id: 14,
    phrase: "un ristorante",
    phonetic: "oon rees-toh-RAHN-teh",
    translation: "a restaurant",
    category: "Directions",
    module: 2,
    tip: "Use this to ask locals: 'Scusi, dov'è un buon ristorante?' (Excuse me, where is a good restaurant?)"
  },
  {
    id: 15,
    phrase: "l'hotel",
    phonetic: "loh-TEL",
    translation: "the hotel",
    category: "Directions",
    module: 2,
    tip: "E.g., 'Dov'è l'hotel Michelangelo?' to ask for directions back to your accommodations."
  },
  {
    id: 16,
    phrase: "l'aeroporto",
    phonetic: "lah-eh-roh-POR-toh",
    translation: "the airport",
    category: "Directions",
    module: 2,
    tip: "Use when navigating terminal directions or communicating with taxi drivers."
  },
  {
    id: 17,
    phrase: "Dritto / A sinistra / A destra",
    phonetic: "DREET-toh / ah see-NEES-trah / ah DEHS-trah",
    translation: "Straight / Left / Right",
    category: "Directions",
    module: 2,
    tip: "Crucial direction keywords: Sempre dritto (straight ahead), a sinistra (to the left), a destra (to the right)."
  },
  {
    id: 18,
    phrase: "Quanto costa?",
    phonetic: "KWAHN-toh KAWS-tah?",
    translation: "How much does it cost?",
    category: "Shopping",
    module: 2,
    tip: "Pointing at an item in a market and asking 'Quanto costa?' will get you the price instantly."
  },
  {
    id: 19,
    phrase: "Dov'è la farmacia?",
    phonetic: "doh-VEH lah far-mah-CHEE-ah?",
    translation: "Where is the pharmacy?",
    category: "Directions",
    module: 2,
    tip: "Look for the bright green flashing crosses on streets. That's a farmacia, key for travel medical needs."
  },
  {
    id: 20,
    phrase: "il biglietto",
    phonetic: "eel beel-YEHT-toh",
    translation: "the ticket",
    category: "Shopping",
    module: 2,
    tip: "Essential for trains, buses, and museums. 'Un biglietto, per favore' (One ticket, please)."
  },

  // Module 3: Food & Emergencies
  {
    id: 21,
    phrase: "Vorrei...",
    phonetic: "vohr-RAY",
    translation: "I would like...",
    category: "Dining",
    module: 3,
    tip: "A polite way to order. Safer than saying 'voglio' (I want), which is considered demanding."
  },
  {
    id: 22,
    phrase: "un caffè",
    phonetic: "oon kahf-FEH",
    translation: "an espresso / coffee",
    category: "Dining",
    module: 3,
    tip: "If you ask for 'un caffè' in Italy, you get an espresso. If you want American drip coffee, ask for 'un caffè americano'."
  },
  {
    id: 23,
    phrase: "un bicchiere d'acqua",
    phonetic: "oon beek-KYEH-reh DAHK-wah",
    translation: "a glass of water",
    category: "Dining",
    module: 3,
    tip: "They will usually ask: 'Gassata' (sparkling) or 'Naturale' (still). Specify your preference!"
  },
  {
    id: 24,
    phrase: "il conto, per favore",
    phonetic: "eel KOHN-toh pehr fah-VOH-reh",
    translation: "the bill, please",
    category: "Dining",
    module: 3,
    tip: "In Italy, waiters will not bring you the bill until you ask for it. It's polite to let you linger!"
  },
  {
    id: 25,
    phrase: "È delizioso!",
    phonetic: "eh deh-leet-tsyoh-zoh",
    translation: "It is delicious!",
    category: "Dining",
    module: 3,
    tip: "Compliment your chef or waiter. They will love it! Alternatively, say 'Molto buono' (very good)."
  },
  {
    id: 26,
    phrase: "Aiuto!",
    phonetic: "ah-YOO-toh!",
    translation: "Help!",
    category: "Help",
    module: 3,
    tip: "Shout this in an emergency to grab everyone's attention immediately."
  },
  {
    id: 27,
    phrase: "Mi dispiace",
    phonetic: "mee dees-PYAH-cheh",
    translation: "I am sorry",
    category: "Help",
    module: 3,
    tip: "Use to express sympathy or regret. For minor bumps, 'scusi' (excuse me) is more common."
  },
  {
    id: 28,
    phrase: "Mi sono perso",
    phonetic: "mee SOH-noh PEHR-soh",
    translation: "I am lost",
    category: "Help",
    module: 3,
    tip: "Add 'Scusi' to start: 'Scusi, mi sono perso. Dov'è l'hotel?'"
  },
  {
    id: 29,
    phrase: "Dov'è l'ospedale?",
    phonetic: "doh-VEH lohs-peh-DAH-leh?",
    translation: "Where is the hospital?",
    category: "Help",
    module: 3,
    tip: "Useful emergency phrase for medical concerns."
  },
  {
    id: 30,
    phrase: "Chiama la polizia!",
    phonetic: "KYAH-mah lah poh-leet-TSEE-ah!",
    translation: "Call the police!",
    category: "Help",
    module: 3,
    tip: "Emergency command to direct bystanders to contact authorities."
  }
];

// Quiz Database (Scenario-based questions)
const quizQuestions = [
  {
    id: 1,
    category: "Directions & Getting Around",
    scenario: "You just got off your train and need to find the restroom immediately in the station.",
    question: "What is the correct way to ask someone?",
    options: [
      { text: "Vorrei il bagno, per favore.", isCorrect: false },
      { text: "Scusi, dov'è il bagno?", isCorrect: true },
      { text: "Dov'è la stazione?", isCorrect: false },
      { text: "Quanto costa il bagno?", isCorrect: false }
    ],
    explanation: "Saying 'Scusi, dov'è il bagno?' politely translates to 'Excuse me, where is the bathroom?' and is the most natural way to ask."
  },
  {
    id: 2,
    category: "At the Café",
    scenario: "You enter a beautiful bar in Florence and want to order a single espresso at the counter.",
    question: "How do you order it politely?",
    options: [
      { text: "Buongiorno, vorrei un caffè, per favore.", isCorrect: true },
      { text: "Ciao, un caffè americano!", isCorrect: false },
      { text: "Scusi, dov'è un ristorante?", isCorrect: false },
      { text: "Quanto costa il caffè?", isCorrect: false }
    ],
    explanation: "'Buongiorno, vorrei un caffè, per favore' is very polite and requests a standard espresso (un caffè) with a morning greeting."
  },
  {
    id: 3,
    category: "At the Restaurant",
    scenario: "You finished eating a wonderful plate of pasta. You're ready to leave but the waiter hasn't brought the bill yet.",
    question: "How do you ask for it?",
    options: [
      { text: "Quanto costa?", isCorrect: false },
      { text: "Aiuto, il conto!", isCorrect: false },
      { text: "Il conto, per favore.", isCorrect: true },
      { text: "Grazie mille, prego.", isCorrect: false }
    ],
    explanation: "Waiters in Italy won't rush you. To ask for the bill, catch their eye and say 'Il conto, per favore'."
  },
  {
    id: 4,
    category: "Language Barriers",
    scenario: "A local vendor in Venice greets you warmly and starts explaining the glass sculptures in rapid Italian.",
    question: "How do you politely let them know you don't speak Italian and ask if they speak English?",
    options: [
      { text: "No italiano. Parla inglese?", isCorrect: false },
      { text: "Scusi, non parlo italiano. Parla inglese?", isCorrect: true },
      { text: "Buongiorno, ciao. Parla inglese?", isCorrect: false },
      { text: "Non parlo inglese, mi dispiace.", isCorrect: false }
    ],
    explanation: "'Scusi, non parlo italiano. Parla inglese?' combines formal apology ('Scusi'), statement of ability ('non parlo italiano'), and a question ('Parla inglese?') in a highly respectful manner."
  },
  {
    id: 5,
    category: "Emergency & Travel",
    scenario: "You are walking in Rome and realize you have lost your way and cannot find your hotel.",
    question: "How do you tell someone you are lost and ask where the hotel is?",
    options: [
      { text: "Aiuto! Dov'è il ristorante Michelangelo?", isCorrect: false },
      { text: "Scusi, mi sono perso. Dov'è l'hotel Michelangelo?", isCorrect: true },
      { text: "Dov'è la stazione Michelangelo, per favore?", isCorrect: false },
      { text: "Quanto costa l'hotel Michelangelo?", isCorrect: false }
    ],
    explanation: "'Scusi, mi sono perso' means 'Excuse me, I am lost'. Combining it with 'Dov'è l'hotel...' tells them exactly what you need."
  }
];

// App State Management
let state = {
  currentModule: 1,
  currentCardIndex: 0,
  completedModules: [],
  cardsStudied: {},
  theme: 'light',
  quizIndex: 0,
  quizAnswers: [],
  activeFilter: 'all',
  searchQuery: '',
  // Multiple quiz tracking
  currentQuizType: 'mod1', // 'mod1', 'mod2', 'mod3', or 'scenario'
  currentQuizQuestions: [],
  quizScores: {
    mod1: 0,
    mod2: 0,
    mod3: 0,
    scenario: 0
  }
};

// DOM Elements
let elements = {};

function initDOMElements() {
  elements = {
    themeToggleBtn: document.getElementById('theme-toggle'),
    themeToggleIcon: document.getElementById('theme-toggle-icon'),
    miniProgressFill: document.getElementById('mini-progress-fill'),
    miniProgressText: document.getElementById('mini-progress-text'),
    
    // Tab navigation buttons
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    // Dashboard Stats
    statStudyProgress: document.getElementById('stat-study-progress'),
    statCardsMastered: document.getElementById('stat-cards-mastered'),
    statQuizHighscore: document.getElementById('stat-quiz-highscore'),
    dashboardTimelineCards: document.querySelectorAll('.timeline-card'),
    
    // Learn Module UI
    sidebarLinks: document.querySelectorAll('.sidebar-link'),
    moduleTitle: document.getElementById('module-title'),
    moduleSubtitle: document.getElementById('module-subtitle'),
    flashcardWrapper: document.getElementById('flashcard-wrapper'),
    flashcard: document.getElementById('flashcard'),
    cardFaceFront: document.getElementById('card-front'),
    cardFaceBack: document.getElementById('card-back'),
    prevCardBtn: document.getElementById('prev-card-btn'),
    nextCardBtn: document.getElementById('next-card-btn'),
    cardIndexIndicator: document.getElementById('card-index-indicator'),
    listenCardBtn: document.getElementById('listen-card-btn'),
    markMasteredBtn: document.getElementById('mark-mastered-btn'),
    
    // Quiz UI
    quizBody: document.getElementById('quiz-body'),
    
    // Cheatsheet UI
    searchInput: document.getElementById('search-input'),
    filterBadges: document.querySelectorAll('.filter-badge'),
    cheatsheetGrid: document.getElementById('cheatsheet-grid')
  };
}

// Speech Synthesis Loader & Helper
let voicesLoaded = false;
window.speechSynthesis.onvoiceschanged = () => {
  voicesLoaded = true;
};

function playTTS(text) {
  if (!window.speechSynthesis) {
    alert("Sorry, your browser does not support text-to-speech audio.");
    return;
  }
  
  window.speechSynthesis.cancel(); // stop current speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'it-IT';
  utterance.rate = 0.85; // Slow down slightly for easier comprehension
  
  const voices = window.speechSynthesis.getVoices();
  const italianVoice = voices.find(v => v.lang.startsWith('it'));
  if (italianVoice) {
    utterance.voice = italianVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

// Load State from LocalStorage
function loadState() {
  const savedState = localStorage.getItem('italian_travel_guide_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      state.completedModules = parsed.completedModules || [];
      state.cardsStudied = parsed.cardsStudied || {};
      state.theme = parsed.theme || 'light';
      state.quizScores = parsed.quizScores || {
        mod1: 0,
        mod2: 0,
        mod3: 0,
        scenario: parsed.quizScore || 0
      };
    } catch (e) {
      console.error("Failed to load saved state", e);
    }
  }
  
  // Set theme early
  document.documentElement.setAttribute('data-theme', state.theme);
}

// Save State to LocalStorage
function saveState() {
  localStorage.setItem('italian_travel_guide_state', JSON.stringify({
    completedModules: state.completedModules,
    cardsStudied: state.cardsStudied,
    theme: state.theme,
    quizScores: state.quizScores
  }));
  updateGlobalProgressUI();
}

// Calculate Progress Metrics
function updateGlobalProgressUI() {
  // Total cards in database
  const totalCards = phrases.length;
  // Total cards marked mastered
  const masteredCount = Object.keys(state.cardsStudied).length;
  
  // Percentage calculation
  const progressPercent = totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;
  
  // Update Header Progress Bar
  if (elements.miniProgressFill) {
    elements.miniProgressFill.style.width = `${progressPercent}%`;
  }
  if (elements.miniProgressText) {
    elements.miniProgressText.innerText = `${progressPercent}%`;
  }
  
  // Update Dashboard stats
  if (elements.statStudyProgress) {
    elements.statStudyProgress.innerText = `${progressPercent}%`;
  }
  if (elements.statCardsMastered) {
    elements.statCardsMastered.innerText = `${masteredCount}/${totalCards}`;
  }
  if (elements.statQuizHighscore) {
    const totalCorrect = state.quizScores.mod1 + state.quizScores.mod2 + state.quizScores.mod3 + state.quizScores.scenario;
    const maxPossible = 15 + 15 + 15 + 5; // 50 total
    elements.statQuizHighscore.innerText = `${totalCorrect}/${maxPossible}`;
  }
  
  // Update Timeline completed indicators on dashboard
  elements.dashboardTimelineCards.forEach((card, index) => {
    const modNum = index + 1;
    const isCompleted = state.completedModules.includes(modNum);
    if (isCompleted) {
      card.classList.add('completed');
      const badge = card.querySelector('.timeline-badge');
      if (badge) badge.innerText = "Completed ✓";
    } else {
      card.classList.remove('completed');
      const badge = card.querySelector('.timeline-badge');
      if (badge) badge.innerText = `Module ${modNum}`;
    }
  });
  
  // Update sidebar checks in Learn Mode
  elements.sidebarLinks.forEach(link => {
    const modNum = parseInt(link.getAttribute('data-module'));
    if (state.completedModules.includes(modNum)) {
      link.classList.add('completed-indicator');
    } else {
      link.classList.remove('completed-indicator');
    }
  });
}

// Tab Swapping Controller
function setupTabs() {
  elements.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      // Remove active states
      elements.tabBtns.forEach(b => b.classList.remove('active'));
      elements.tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active state to selected
      btn.classList.add('active');
      const activeContent = document.getElementById(tabId);
      if (activeContent) activeContent.classList.add('active');
      
      // Special tab triggers
      if (tabId === 'learn') {
        renderFlashcardModule();
      } else if (tabId === 'quiz') {
        resetQuiz();
      } else if (tabId === 'cheatsheet') {
        renderCheatsheet();
      }
    });
  });
}

// Dashboard Click Handlers
function setupDashboardLinks() {
  const startModuleBtns = document.querySelectorAll('.start-module-btn');
  startModuleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetMod = parseInt(btn.getAttribute('data-module'));
      
      // Set state module
      state.currentModule = targetMod;
      state.currentCardIndex = 0;
      
      // Navigate to Learn Tab
      const learnTabBtn = Array.from(elements.tabBtns).find(b => b.getAttribute('data-tab') === 'learn');
      if (learnTabBtn) learnTabBtn.click();
    });
  });
}

// Learn Mode Logic
function renderFlashcardModule() {
  // Get phrases for current module
  const activePhrases = phrases.filter(p => p.module === state.currentModule);
  if (activePhrases.length === 0) return;
  
  // Bounds check
  if (state.currentCardIndex >= activePhrases.length) {
    state.currentCardIndex = activePhrases.length - 1;
  }
  if (state.currentCardIndex < 0) {
    state.currentCardIndex = 0;
  }
  
  const currentCard = activePhrases[state.currentCardIndex];
  
  // Set headers
  elements.sidebarLinks.forEach(link => {
    const mod = parseInt(link.getAttribute('data-module'));
    if (mod === state.currentModule) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  if (state.currentModule === 1) {
    elements.moduleTitle.innerText = "Module 1: Greetings & Essentials";
    elements.moduleSubtitle.innerText = "Focus on basic greetings, politeness, and establishing basic English-Italian clarity.";
  } else if (state.currentModule === 2) {
    elements.moduleTitle.innerText = "Module 2: Directions & Getting Around";
    elements.moduleSubtitle.innerText = "Learn how to ask for the toilet, station, hotel, and understand simple directions.";
  } else if (state.currentModule === 3) {
    elements.moduleTitle.innerText = "Module 3: Food & Survival Scenarios";
    elements.moduleSubtitle.innerText = "Order coffee and food, request the bill, and express urgent safety/medical requests.";
  }
  
  // Render card text
  elements.cardFaceFront.innerHTML = `
    <div class="card-header-meta">
      <span class="card-badge">${currentCard.category}</span>
      <span>${state.currentCardIndex + 1} of ${activePhrases.length}</span>
    </div>
    <div class="card-phrase">${currentCard.phrase}</div>
    <div class="card-phonetic">"${currentCard.phonetic}"</div>
    <div class="card-hint">
      <span>💡 Tap card to flip</span>
    </div>
  `;
  
  const isMastered = !!state.cardsStudied[currentCard.id];
  elements.markMasteredBtn.innerText = isMastered ? "Mastered ✓" : "Mark Mastered";
  elements.markMasteredBtn.className = isMastered ? "btn btn-primary" : "btn btn-outline";
  
  elements.cardFaceBack.innerHTML = `
    <div class="card-header-meta">
      <span class="card-badge">${currentCard.category}</span>
      <span>${state.currentCardIndex + 1} of ${activePhrases.length}</span>
    </div>
    <div class="card-translation">${currentCard.translation}</div>
    <div class="card-tip-container">
      <strong>Cultural Tip:</strong> ${currentCard.tip}
    </div>
    <div class="card-hint">
      <span>💡 Tap card to flip back</span>
    </div>
  `;
  
  // Reset flipped state
  elements.flashcardWrapper.classList.remove('flipped');
  
  // Card indexing indicator
  elements.cardIndexIndicator.innerText = `${state.currentCardIndex + 1} / ${activePhrases.length}`;
  
  // Button disable logic
  elements.prevCardBtn.disabled = state.currentCardIndex === 0;
  elements.nextCardBtn.disabled = state.currentCardIndex === activePhrases.length - 1;
}

function setupFlashcards() {
  // Flip card on click
  elements.flashcard.addEventListener('click', (e) => {
    // If clicked the TTS play button, do not flip card
    if (e.target.closest('#listen-card-btn') || e.target.closest('.card-audio-btn')) {
      return;
    }
    elements.flashcardWrapper.classList.toggle('flipped');
  });
  
  // Navigation buttons
  elements.prevCardBtn.addEventListener('click', () => {
    if (state.currentCardIndex > 0) {
      state.currentCardIndex--;
      renderFlashcardModule();
    }
  });
  
  elements.nextCardBtn.addEventListener('click', () => {
    const activePhrases = phrases.filter(p => p.module === state.currentModule);
    if (state.currentCardIndex < activePhrases.length - 1) {
      state.currentCardIndex++;
      renderFlashcardModule();
    }
  });
  
  // Audio playback
  elements.listenCardBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const activePhrases = phrases.filter(p => p.module === state.currentModule);
    const currentCard = activePhrases[state.currentCardIndex];
    // Strip slashes/alternative options from string for better pronunciations
    const audioText = currentCard.phrase.split('/')[0].trim();
    playTTS(audioText);
  });
  
  // Mark mastered toggle
  elements.markMasteredBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const activePhrases = phrases.filter(p => p.module === state.currentModule);
    const currentCard = activePhrases[state.currentCardIndex];
    
    if (state.cardsStudied[currentCard.id]) {
      delete state.cardsStudied[currentCard.id];
    } else {
      state.cardsStudied[currentCard.id] = true;
    }
    
    // If all cards in this module are mastered, add module to completed
    const modCards = phrases.filter(p => p.module === state.currentModule);
    const allModMastered = modCards.every(c => state.cardsStudied[c.id]);
    
    if (allModMastered) {
      if (!state.completedModules.includes(state.currentModule)) {
        state.completedModules.push(state.currentModule);
      }
    } else {
      state.completedModules = state.completedModules.filter(m => m !== state.currentModule);
    }
    
    saveState();
    renderFlashcardModule();
  });
  
  // Sidebar Links
  elements.sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const mod = parseInt(link.getAttribute('data-module'));
      state.currentModule = mod;
      state.currentCardIndex = 0;
      renderFlashcardModule();
    });
  });
}

// Generate a 15-question quiz dynamically for a specific module
function generateQuizForModule(moduleId) {
  const modulePhrases = phrases.filter(p => p.module === moduleId);
  if (modulePhrases.length === 0) return [];
  
  const questionTypes = [];
  
  // Create 10 Italian -> English questions (one for each phrase in the module)
  modulePhrases.forEach(p => {
    questionTypes.push({ phrase: p, type: 'IT_TO_EN' });
  });
  
  // Create 5 English -> Italian questions (randomly selected from the 10 phrases)
  const shuffledPhrases = [...modulePhrases].sort(() => 0.5 - Math.random());
  for (let i = 0; i < 5; i++) {
    questionTypes.push({ phrase: shuffledPhrases[i], type: 'EN_TO_IT' });
  }
  
  // Shuffle all 15 questions
  const shuffledQuestions = questionTypes.sort(() => 0.5 - Math.random());
  
  const generatedQuestions = shuffledQuestions.map((qConfig, index) => {
    const targetPhrase = qConfig.phrase;
    const isItToEn = qConfig.type === 'IT_TO_EN';
    
    const questionText = isItToEn 
      ? `Translate to English: "${targetPhrase.phrase}"` 
      : `How do you say "${targetPhrase.translation}" in Italian?`;
      
    const correctAnswer = isItToEn ? targetPhrase.translation : targetPhrase.phrase;
    
    // Distractors
    // Get other phrases in the same module or entire DB
    const otherPhrases = phrases.filter(p => p.id !== targetPhrase.id);
    const shuffledOthers = otherPhrases.sort(() => 0.5 - Math.random());
    
    const options = [
      { text: correctAnswer, isCorrect: true }
    ];
    
    let distractorCount = 0;
    for (let i = 0; i < shuffledOthers.length && distractorCount < 3; i++) {
      const dist = shuffledOthers[i];
      const distText = isItToEn ? dist.translation : dist.phrase;
      if (!options.some(opt => opt.text === distText)) {
        options.push({ text: distText, isCorrect: false });
        distractorCount++;
      }
    }
    
    // Shuffle options
    const shuffledOptions = options.sort(() => 0.5 - Math.random());
    
    return {
      id: index + 1,
      category: `Module ${moduleId} Vocabulary Quiz`,
      scenario: `Question ${index + 1} of 15`,
      question: questionText,
      options: shuffledOptions,
      explanation: isItToEn 
        ? `"${targetPhrase.phrase}" means "${targetPhrase.translation}". Phonetic: "${targetPhrase.phonetic}".`
        : `"${targetPhrase.phrase}" is the Italian translation for "${targetPhrase.translation}". Phonetic: "${targetPhrase.phonetic}".`
    };
  });
  
  return generatedQuestions;
}

// Render the quiz selector dashboard
function renderQuizDashboard() {
  if (!elements.quizBody) return;
  
  elements.quizBody.innerHTML = `
    <div class="timeline" style="margin-top:20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
      <div class="timeline-card">
        <span class="timeline-badge" style="background:#E8F5E9; color:#2E7D32;">15 Questions</span>
        <h3>Quiz 1: Greetings</h3>
        <p>Test your Hour 1 vocabulary. Translating Italian terms to English and vice-versa.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.mod1}/15</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="mod1">Start Quiz</button>
        </div>
      </div>
      
      <div class="timeline-card">
        <span class="timeline-badge" style="background:#E8F5E9; color:#2E7D32;">15 Questions</span>
        <h3>Quiz 2: Directions</h3>
        <p>Test your Hour 2 vocabulary. Translating travel directions, transport and location terms.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.mod2}/15</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="mod2">Start Quiz</button>
        </div>
      </div>
      
      <div class="timeline-card">
        <span class="timeline-badge" style="background:#E8F5E9; color:#2E7D32;">15 Questions</span>
        <h3>Quiz 3: Food &amp; Help</h3>
        <p>Test your Hour 3 vocabulary. Translating café ordering, menus, and emergency terms.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.mod3}/15</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="mod3">Start Quiz</button>
        </div>
      </div>
      
      <div class="timeline-card" style="border-left: 5px solid var(--accent-terracotta);">
        <span class="timeline-badge" style="background:var(--accent-terracotta-light); color:var(--accent-terracotta);">5 Scenarios</span>
        <h3>Travel Scenarios Test</h3>
        <p>Apply your learning in real-life situational dialogues you'll face on your trip.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.scenario}/5</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="scenario" style="background-color:var(--accent-terracotta);">Start Test</button>
        </div>
      </div>
    </div>
  `;
  
  // Bind click handlers to start-quiz-btn
  const startBtns = elements.quizBody.querySelectorAll('.start-quiz-btn');
  startBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const quizType = btn.getAttribute('data-quiz-type');
      startQuiz(quizType);
    });
  });
}

// Start a specific quiz
function startQuiz(quizType) {
  state.currentQuizType = quizType;
  state.quizIndex = 0;
  state.quizAnswers = [];
  
  if (quizType === 'mod1') {
    state.currentQuizQuestions = generateQuizForModule(1);
  } else if (quizType === 'mod2') {
    state.currentQuizQuestions = generateQuizForModule(2);
  } else if (quizType === 'mod3') {
    state.currentQuizQuestions = generateQuizForModule(3);
  } else if (quizType === 'scenario') {
    state.currentQuizQuestions = quizQuestions; // static scenario questions
  }
  
  renderQuizQuestion();
}

// Scenario Quiz Logic
function resetQuiz() {
  renderQuizDashboard();
}

function renderQuizQuestion() {
  const questions = state.currentQuizQuestions;
  if (state.quizIndex >= questions.length) {
    renderQuizComplete();
    return;
  }
  
  const currentQ = questions[state.quizIndex];
  
  elements.quizBody.innerHTML = `
    <div class="quiz-card" style="animation: fadeIn 0.4s ease-out forwards;">
      <div class="quiz-header">
        <div class="quiz-category">${currentQ.category}</div>
        <div class="quiz-scenario"><strong>Question ${state.quizIndex + 1} of ${questions.length}:</strong> ${currentQ.scenario}</div>
      </div>
      <div class="quiz-prompt">${currentQ.question}</div>
      <div class="quiz-options" id="quiz-options-container"></div>
      <div class="quiz-feedback" id="quiz-feedback-box">
        <div class="quiz-feedback-icon" id="quiz-feedback-icon"></div>
        <div id="quiz-feedback-text"></div>
      </div>
      <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
        <button id="quiz-next-btn" class="btn btn-primary" style="display: none;">Next Question</button>
      </div>
    </div>
  `;
  
  const optionsContainer = document.getElementById('quiz-options-container');
  currentQ.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerText = opt.text;
    btn.setAttribute('data-correct', opt.isCorrect);
    btn.addEventListener('click', () => handleQuizSelect(btn, index));
    optionsContainer.appendChild(btn);
  });
  
  const nextBtn = document.getElementById('quiz-next-btn');
  nextBtn.addEventListener('click', () => {
    state.quizIndex++;
    renderQuizQuestion();
  });
}

function handleQuizSelect(selectedBtn, selectedIndex) {
  const optionsContainer = document.getElementById('quiz-options-container');
  const allOptionBtns = optionsContainer.querySelectorAll('.quiz-option');
  const feedbackBox = document.getElementById('quiz-feedback-box');
  const feedbackIcon = document.getElementById('quiz-feedback-icon');
  const feedbackText = document.getElementById('quiz-feedback-text');
  const nextBtn = document.getElementById('quiz-next-btn');
  const currentQ = state.currentQuizQuestions[state.quizIndex];
  
  const selectedOpt = currentQ.options[selectedIndex];
  
  // Disable all options
  allOptionBtns.forEach(btn => {
    btn.disabled = true;
    const isCorrect = btn.getAttribute('data-correct') === 'true';
    if (isCorrect) {
      btn.classList.add('correct');
    }
  });
  
  // Show result
  if (selectedOpt.isCorrect) {
    selectedBtn.classList.add('correct');
    feedbackBox.className = "quiz-feedback show quiz-feedback-correct";
    feedbackIcon.innerText = "✓";
    feedbackText.innerHTML = `<strong>Correct!</strong> ${currentQ.explanation}`;
    state.quizAnswers.push(true);
  } else {
    selectedBtn.classList.add('incorrect');
    feedbackBox.className = "quiz-feedback show quiz-feedback-incorrect";
    feedbackIcon.innerText = "✗";
    feedbackText.innerHTML = `<strong>Not quite.</strong> ${currentQ.explanation}`;
    state.quizAnswers.push(false);
  }
  
  nextBtn.style.display = 'block';
}

function renderQuizComplete() {
  const score = state.quizAnswers.filter(ans => ans === true).length;
  const totalQs = state.currentQuizQuestions.length;
  const quizKey = state.currentQuizType;
  
  // Update state high score if larger
  if (score > state.quizScores[quizKey]) {
    state.quizScores[quizKey] = score;
    saveState();
  }
  
  let cheer = "";
  let icon = "🇮🇹";
  const percentage = (score / totalQs) * 100;
  
  if (percentage === 100) {
    cheer = "Perfetto! Absolute mastery of this block!";
    icon = "🎉";
  } else if (percentage >= 70) {
    cheer = "Molto bene! You have a solid grasp of these terms.";
    icon = "👍";
  } else {
    cheer = "A quick review of this module's cards and you'll be good to go!";
    icon = "✈️";
  }
  
  elements.quizBody.innerHTML = `
    <div class="quiz-card quiz-complete" style="animation: fadeIn 0.4s ease-out forwards;">
      <div class="quiz-complete-icon">${icon}</div>
      <h2 class="quiz-complete-title">Quiz Complete!</h2>
      <div class="quiz-complete-score">You scored ${score} out of ${totalQs}</div>
      <p style="color: var(--text-muted); margin-bottom: 30px;">${cheer}</p>
      <div style="display:flex; gap:16px; justify-content:center;">
        <button id="quiz-retry-btn" class="btn btn-outline">Try Again</button>
        <button id="quiz-back-btn" class="btn btn-primary">Choose Another Quiz</button>
      </div>
    </div>
  `;
  
  document.getElementById('quiz-retry-btn').addEventListener('click', () => {
    startQuiz(state.currentQuizType);
  });
  
  document.getElementById('quiz-back-btn').addEventListener('click', () => {
    resetQuiz();
  });
}

// Cheatsheet Logic
function renderCheatsheet() {
  if (!elements.cheatsheetGrid) return;
  
  elements.cheatsheetGrid.innerHTML = '';
  
  // Filter phrases based on current state
  const filteredPhrases = phrases.filter(p => {
    const categoryMatches = state.activeFilter === 'all' || p.category.toLowerCase() === state.activeFilter.toLowerCase();
    
    const query = state.searchQuery.toLowerCase().trim();
    const searchMatches = query === '' || 
      p.phrase.toLowerCase().includes(query) || 
      p.translation.toLowerCase().includes(query) ||
      p.phonetic.toLowerCase().includes(query);
      
    return categoryMatches && searchMatches;
  });
  
  if (filteredPhrases.length === 0) {
    elements.cheatsheetGrid.innerHTML = `
      <div class="no-results">
        <h3>No phrases match your search.</h3>
        <p>Try searching something else, e.g., 'hello', 'water', 'where'.</p>
      </div>
    `;
    return;
  }
  
  filteredPhrases.forEach(p => {
    const card = document.createElement('div');
    card.className = 'cheatsheet-card';
    
    card.innerHTML = `
      <div class="cheatsheet-details">
        <div class="cheatsheet-category">${p.category}</div>
        <div class="cheatsheet-phrase">${p.phrase}</div>
        <div class="cheatsheet-phonetic">"${p.phonetic}"</div>
        <div class="cheatsheet-translation">${p.translation}</div>
        <div class="cheatsheet-tip">${p.tip}</div>
      </div>
      <div class="cheatsheet-actions">
        <button class="cheatsheet-audio-btn" title="Listen Audio">🔊</button>
      </div>
    `;
    
    // Bind click to pronunciation play button
    const audioBtn = card.querySelector('.cheatsheet-audio-btn');
    audioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const audioText = p.phrase.split('/')[0].trim();
      playTTS(audioText);
    });
    
    elements.cheatsheetGrid.appendChild(card);
  });
}

function setupCheatsheet() {
  // Search bar input trigger
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderCheatsheet();
  });
  
  // Filter badges clicking triggers
  elements.filterBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      elements.filterBadges.forEach(b => b.classList.remove('active'));
      badge.classList.add('active');
      
      state.activeFilter = badge.getAttribute('data-filter');
      renderCheatsheet();
    });
  });
}

// Theme management logic
function setupThemeToggle() {
  elements.themeToggleBtn.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    
    // Update theme toggle icon
    elements.themeToggleIcon.innerText = state.theme === 'light' ? '🌙' : '☀️';
    
    saveState();
  });
  
  // Initialize icon
  elements.themeToggleIcon.innerText = state.theme === 'light' ? '🌙' : '☀️';
}

// Initial Kick-off
document.addEventListener('DOMContentLoaded', () => {
  initDOMElements();
  loadState();
  
  setupThemeToggle();
  setupTabs();
  setupDashboardLinks();
  setupFlashcards();
  setupCheatsheet();
  
  // Calculate and apply progress indicators
  updateGlobalProgressUI();
});
