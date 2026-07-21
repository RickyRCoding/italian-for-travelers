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
  },
  {
    id: 31,
    phrase: "Quanto costa questo?",
    phonetic: "KWAHN-toh KAWS-tah KWEHS-toh?",
    translation: "How much is this?",
    category: "Shopping",
    module: 4,
    tip: "Point at any specific item on display to ask its price."
  },
  {
    id: 32,
    phrase: "Posso pagare con la carta?",
    phonetic: "PAWS-soh pah-GAH-reh kohn lah KAR-tah?",
    translation: "Can I pay by card?",
    category: "Shopping",
    module: 4,
    tip: "Visa and Mastercard are widely accepted, but checking first is appreciated for small amounts."
  },
  {
    id: 33,
    phrase: "Solo contanti",
    phonetic: "SOH-loh kohn-TAHN-tee",
    translation: "Cash only",
    category: "Shopping",
    module: 4,
    tip: "Commonly seen on signs in smaller cafes, bakeries, or street vendors."
  },
  {
    id: 34,
    phrase: "È troppo caro",
    phonetic: "eh TROP-poh KAH-roh",
    translation: "It is too expensive",
    category: "Shopping",
    module: 4,
    tip: "Useful at street markets where friendly bargaining is expected, but not in regular stores."
  },
  {
    id: 35,
    phrase: "Uno sconto, per favore?",
    phonetic: "OO-noh SKOHN-toh pehr fah-VOH-reh?",
    translation: "A discount, please?",
    category: "Shopping",
    module: 4,
    tip: "Use this politely when buying multiple items in open-air markets."
  },
  {
    id: 36,
    phrase: "Dov'è un bancomat?",
    phonetic: "doh-VEH oon BAHN-koh-maht?",
    translation: "Where is an ATM?",
    category: "Shopping",
    module: 4,
    tip: "'Bancomat' is the Italian word for ATM. Stick to bank branches to avoid high tourist fees."
  },
  {
    id: 37,
    phrase: "Il resto",
    phonetic: "eel REHS-toh",
    translation: "The change",
    category: "Shopping",
    module: 4,
    tip: "For cash transactions, use: 'Il mio resto, per favore' (My change, please)."
  },
  {
    id: 38,
    phrase: "Lo prendo",
    phonetic: "loh PREHN-doh",
    translation: "I'll take it",
    category: "Shopping",
    module: 4,
    tip: "Use this to let a seller know you have decided to purchase the item."
  },
  {
    id: 39,
    phrase: "La ricevuta, per favore",
    phonetic: "lah ree-cheh-VOO-tah pehr fah-VOH-reh",
    translation: "The receipt, please",
    category: "Shopping",
    module: 4,
    tip: "By law, businesses must print a receipt (scontrino) for every transaction."
  },
  {
    id: 40,
    phrase: "Basta così, grazie",
    phonetic: "BAHS-tah koh-ZEE, GRAHT-tsyeh",
    translation: "That's all, thank you",
    category: "Shopping",
    module: 4,
    tip: "Tell this to market vendors or deli counters when you've finished ordering."
  },
  {
    id: 41,
    phrase: "Ho una prenotazione",
    phonetic: "oh OO-nah preh-noh-taht-tsyoh-neh",
    translation: "I have a reservation",
    category: "Hotel",
    module: 5,
    tip: "Handy at hotel reception desks when checking in."
  },
  {
    id: 42,
    phrase: "A che ora è la colazione?",
    phonetic: "ah keh OH-rah eh lah koh-laht-tsyoh-neh?",
    translation: "What time is breakfast?",
    category: "Hotel",
    module: 5,
    tip: "Typically served from 7:00 AM to 10:00 AM. Inquire about the breakfast room location too."
  },
  {
    id: 43,
    phrase: "Qual è la password del Wi-Fi?",
    phonetic: "kwahl eh lah PAHS-wohrd del WEE-FEE?",
    translation: "What is the Wi-Fi password?",
    category: "Hotel",
    module: 5,
    tip: "Pronounce Wi-Fi as 'wee-fee' in Italian, not 'why-fy'."
  },
  {
    id: 44,
    phrase: "La chiave, per favore",
    phonetic: "lah KYAH-veh pehr fah-VOH-reh",
    translation: "The key, please",
    category: "Hotel",
    module: 5,
    tip: "Ask for your physical or electronic room key at the lobby desk."
  },
  {
    id: 45,
    phrase: "C'è un problema in camera",
    phonetic: "cheh oon proh-BLEH-mah een KAH-meh-rah",
    translation: "There is a problem in the room",
    category: "Hotel",
    module: 5,
    tip: "Use this to notify reception about plumbing, light, or appliance issues."
  },
  {
    id: 46,
    phrase: "L'aria condizionata non funziona",
    phonetic: "lah-ryah kohn-deet-tsyoh-NAH-tah nohn foon-TSYOH-nah",
    translation: "The air conditioning doesn't work",
    category: "Hotel",
    module: 5,
    tip: "Essential in historic stone buildings during hot Italian summer months."
  },
  {
    id: 47,
    phrase: "Posso lasciare i bagagli qui?",
    phonetic: "PAWS-soh lah-SHAH-reh ee bah-GAHL-yee kwee?",
    translation: "Can I leave my bags here?",
    category: "Hotel",
    module: 5,
    tip: "Perfect for storing luggage after check-out before a late train or flight."
  },
  {
    id: 48,
    phrase: "Vorrei fare il check-out",
    phonetic: "vohr-RAY FAH-reh eel check-out",
    translation: "I would like to check out",
    category: "Hotel",
    module: 5,
    tip: "Standard checkout is normally between 10:00 AM and 11:00 AM."
  },
  {
    id: 49,
    phrase: "Un asciugamano in più",
    phonetic: "oon ah-shoo-gah-MAH-noh een pyoo",
    translation: "An extra towel",
    category: "Hotel",
    module: 5,
    tip: "'Un asciugamano in più, per favore' (An extra towel, please)."
  },
  {
    id: 50,
    phrase: "Mi può chiamare un taxi?",
    phonetic: "mee pwoh kyah-MAH-reh oon TAHK-see?",
    translation: "Can you call me a taxi?",
    category: "Hotel",
    module: 5,
    tip: "Taxis in Italy cannot easily be hailed on the street; hotels will telephone them for you."
  },
  {
    id: 51,
    phrase: "Vorrei un biglietto per...",
    phonetic: "vohr-RAY oon beel-YEHT-toh pehr...",
    translation: "I would like a ticket to...",
    category: "Transit",
    module: 6,
    tip: "Standard purchasing phrase at station ticket windows or automated kiosks."
  },
  {
    id: 52,
    phrase: "Solo andata o andata e ritorno?",
    phonetic: "SOH-loh ahn-DAH-tah oh ahn-DAH-tah eh ree-TOR-noh?",
    translation: "One-way or round trip?",
    category: "Transit",
    module: 6,
    tip: "The agent will ask this. Respond with 'Solo andata' or 'Andata e ritorno'."
  },
  {
    id: 53,
    phrase: "Da quale binario parte?",
    phonetic: "dah KWAH-leh bee-NAH-ryoh PAR-teh?",
    translation: "From which platform does it leave?",
    category: "Transit",
    module: 6,
    tip: "'Binario' is the platform number. Check the boards (Partenze) at the station before boarding."
  },
  {
    id: 54,
    phrase: "È questo il treno per...?",
    phonetic: "eh KWEHS-toh eel TREH-noh pehr...?",
    translation: "Is this the train to...?",
    category: "Transit",
    module: 6,
    tip: "Double-check with people on the platform or fellow passengers before stepping inside."
  },
  {
    id: 55,
    phrase: "Devo convalidare il biglietto?",
    phonetic: "DEH-voh kohn-vah-lee-DAH-reh eel beel-YEHT-toh?",
    translation: "Do I need to validate the ticket?",
    category: "Transit",
    module: 6,
    tip: "WARNING: You must validate paper tickets in green/yellow stampers on platforms before boarding, or face heavy fines!"
  },
  {
    id: 56,
    phrase: "La prossima fermata",
    phonetic: "lah PROHS-see-mah fehr-MAH-tah",
    translation: "The next stop",
    category: "Transit",
    module: 6,
    tip: "Listen for transit announcements: 'La prossima fermata è...'"
  },
  {
    id: 57,
    phrase: "A che ora arriva?",
    phonetic: "ah keh OH-rah ar-REE-vah?",
    translation: "What time does it arrive?",
    category: "Transit",
    module: 6,
    tip: "Use this to ask the train conductor or a nearby passenger."
  },
  {
    id: 58,
    phrase: "È libero questo posto?",
    phonetic: "eh LEE-beh-roh KWEHS-toh POHS-toh?",
    translation: "Is this seat free?",
    category: "Transit",
    module: 6,
    tip: "A polite way to ask before sitting down next to someone on public transit."
  },
  {
    id: 59,
    phrase: "Dov'è la fermata dell'autobus?",
    phonetic: "doh-VEH la fehr-MAH-tah del-OW-toh-boos?",
    translation: "Where is the bus stop?",
    category: "Transit",
    module: 6,
    tip: "Look for vertical signs on sidewalks labeled 'Fermata'."
  },
  {
    id: 60,
    phrase: "Un biglietto dell'autobus, per favore",
    phonetic: "oon beel-YEHT-toh del-OW-toh-boos pehr fah-VOH-reh",
    translation: "A bus ticket, please",
    category: "Transit",
    module: 6,
    tip: "Buy tickets *before* boarding at tobacco shops (marked with a blue 'T'). Drivers do not sell tickets."
  },
  {
    id: 61,
    phrase: "Mi chiamo...",
    phonetic: "mee KYAH-moh...",
    translation: "My name is...",
    category: "Social",
    module: 7,
    tip: "State your name clearly to introduce yourself: 'Mi chiamo Marco.'"
  },
  {
    id: 62,
    phrase: "Come si chiama?",
    phonetic: "KOH-meh see KYAH-mah?",
    translation: "What is your name? (formal)",
    category: "Social",
    module: 7,
    tip: "The polite formal way to ask a local person their name."
  },
  {
    id: 63,
    phrase: "Piacere di conoscerti",
    phonetic: "pyah-CHEH-reh dee koh-NOH-shehr-tee",
    translation: "Nice to meet you",
    category: "Social",
    module: 7,
    tip: "Can be shortened to simply 'Piacere' (Pleasure) while shaking hands."
  },
  {
    id: 64,
    phrase: "Di dove sei?",
    phonetic: "dee DOH-veh say?",
    translation: "Where are you from?",
    category: "Social",
    module: 7,
    tip: "Common friendly question locals might ask. Respond with 'Sono...' (I am...)"
  },
  {
    id: 65,
    phrase: "Sono americano / canadese / inglese",
    phonetic: "SOH-noh ah-meh-ree-KAH-noh / kah-nah-DEH-zeh / een-GLEH-zeh",
    translation: "I am American / Canadian / British",
    category: "Social",
    module: 7,
    tip: "Adjust according to your nationality. Use 'americana' if you are female."
  },
  {
    id: 66,
    phrase: "Come va?",
    phonetic: "KOH-meh vah?",
    translation: "How's it going?",
    category: "Social",
    module: 7,
    tip: "A casual friendly check-in when speaking to peers, guides, or restaurant servers."
  },
  {
    id: 67,
    phrase: "Tutto bene, grazie",
    phonetic: "TOOT-toh BEH-neh, GRAHT-tsyeh",
    translation: "All good, thank you",
    category: "Social",
    module: 7,
    tip: "The standard positive response to 'Come va?' or 'Come stai?'."
  },
  {
    id: 68,
    phrase: "Ti piace l'Italia?",
    phonetic: "tee PYAH-cheh leet-TAH-lyah?",
    translation: "Do you like Italy?",
    category: "Social",
    module: 7,
    tip: "Say 'Sì, mi piace moltissimo!' (Yes, I like it very much!)."
  },
  {
    id: 69,
    phrase: "Mi piace molto",
    phonetic: "mee PYAH-cheh MOHL-toh",
    translation: "I like it very much",
    category: "Social",
    module: 7,
    tip: "Express appreciation for food, sites, views, or general experiences."
  },
  {
    id: 70,
    phrase: "Arrivederci",
    phonetic: "ahr-ree-veh-DEHR-chee",
    translation: "Goodbye (formal/semi-formal)",
    category: "Social",
    module: 7,
    tip: "Standard respectful goodbye when leaving stores, taxi rides, or hotels."
  },
  {
    id: 71,
    phrase: "Non mi sento bene",
    phonetic: "nohn mee SEHN-toh BEH-neh",
    translation: "I don't feel well",
    category: "Medical",
    module: 8,
    tip: "Use this to alert guides, hotel reception, or medical staff."
  },
  {
    id: 72,
    phrase: "Ho mal di testa / stomaco",
    phonetic: "oh mahl dee TEHS-tah / STOH-mah-koh",
    translation: "I have a headache / stomach ache",
    category: "Medical",
    module: 8,
    tip: "Helpful symptoms to describe at the farmacia to receive the correct OTC medicine."
  },
  {
    id: 73,
    phrase: "Ha un medicinale per...?",
    phonetic: "ah oon meh-dee-chee-NAH-leh pehr...?",
    translation: "Do you have a medicine for...?",
    category: "Medical",
    module: 8,
    tip: "Ask the pharmacist directly using this structure."
  },
  {
    id: 74,
    phrase: "la tosse / il raffreddore",
    phonetic: "lah TOHS-seh / eel rahf-red-DOH-reh",
    translation: "cough / cold",
    category: "Medical",
    module: 8,
    tip: "E.g., 'medicinale per la tosse' (cough medicine)."
  },
  {
    id: 75,
    phrase: "C'è un medico qui?",
    phonetic: "cheh oon MEH-dee-koh kwee?",
    translation: "Is there a doctor here?",
    category: "Medical",
    module: 8,
    tip: "Ask hotel staff or public venue customer desks in case of sudden illness."
  },
  {
    id: 76,
    phrase: "Ho un'allergia a...",
    phonetic: "oh oon-ahl-lehr-JEE-ah ah...",
    translation: "I have an allergy to...",
    category: "Medical",
    module: 8,
    tip: "Add allergen: 'arachidi' (peanuts), 'lattosio' (lactose), or 'penicillina' (penicillin)."
  },
  {
    id: 77,
    phrase: "È grave?",
    phonetic: "eh GRAH-veh?",
    translation: "Is it serious?",
    category: "Medical",
    module: 8,
    tip: "Ask the doctor or physician in a clinic."
  },
  {
    id: 78,
    phrase: "Ho bisogno di un cerotto",
    phonetic: "oh bee-ZOHN-yoh dee oon cheh-ROHT-toh",
    translation: "I need a band-aid / plaster",
    category: "Medical",
    module: 8,
    tip: "'Cerotti' are available at pharmacies, supermarkets, and convenience shops."
  },
  {
    id: 79,
    phrase: "Mi fa male qui",
    phonetic: "mee fah MAH-leh kwee",
    translation: "It hurts here",
    category: "Medical",
    module: 8,
    tip: "Point to the location of pain when describing an issue to emergency staff."
  },
  {
    id: 80,
    phrase: "Chiami un'ambulanza!",
    phonetic: "KYAH-mee oon-ahm-boo-LAHN-tsah!",
    translation: "Call an ambulance!",
    category: "Medical",
    module: 8,
    tip: "The medical emergency phone number in Italy (and all of Europe) is 112."
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
  studyMode: 'it-to-en', // 'it-to-en' or 'en-to-it'
  // Multiple quiz tracking
  currentQuizType: 'mod1', // 'mod1', 'mod2', 'mod3', or 'scenario'
  currentQuizQuestions: [],
  quizScores: {
    mod1: 0,
    mod2: 0,
    mod3: 0,
    mod4: 0,
    mod5: 0,
    mod6: 0,
    mod7: 0,
    mod8: 0,
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
    markMasteredBtn: document.getElementById('mark-mastered-btn'),
    modeItToEnBtn: document.getElementById('mode-it-to-en-btn'),
    modeEnToItBtn: document.getElementById('mode-en-to-it-btn'),
    
    // Quiz UI
    quizBody: document.getElementById('quiz-body'),
    
    // Cheatsheet UI
    searchInput: document.getElementById('search-input'),
    filterBadges: document.querySelectorAll('.filter-badge'),
    cheatsheetGrid: document.getElementById('cheatsheet-grid')
  };
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
      state.studyMode = parsed.studyMode || 'it-to-en';
      state.quizScores = parsed.quizScores || {
        mod1: 0,
        mod2: 0,
        mod3: 0,
        mod4: 0,
        mod5: 0,
        mod6: 0,
        mod7: 0,
        mod8: 0,
        scenario: parsed.quizScore || 0
      };
      
      // Ensure new module scores are initialized if they didn't exist in saved state
      if (state.quizScores.mod4 === undefined) state.quizScores.mod4 = 0;
      if (state.quizScores.mod5 === undefined) state.quizScores.mod5 = 0;
      if (state.quizScores.mod6 === undefined) state.quizScores.mod6 = 0;
      if (state.quizScores.mod7 === undefined) state.quizScores.mod7 = 0;
      if (state.quizScores.mod8 === undefined) state.quizScores.mod8 = 0;
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
    studyMode: state.studyMode,
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
    const totalCorrect = state.quizScores.mod1 + state.quizScores.mod2 + state.quizScores.mod3 + 
                        state.quizScores.mod4 + state.quizScores.mod5 + state.quizScores.mod6 + 
                        state.quizScores.mod7 + state.quizScores.mod8 + state.quizScores.scenario;
    const maxPossible = (15 * 8) + 5; // 125 total
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
  } else if (state.currentModule === 4) {
    elements.moduleTitle.innerText = "Module 4: Shopping & Money";
    elements.moduleSubtitle.innerText = "Navigate buying items, asking prices, paying by card, locating ATMs, and requesting receipts.";
  } else if (state.currentModule === 5) {
    elements.moduleTitle.innerText = "Module 5: Hotel & Accommodation";
    elements.moduleSubtitle.innerText = "Interact with hotel desks, check-in, request amenities (Wi-Fi password, towels), and checkout.";
  } else if (state.currentModule === 6) {
    elements.moduleTitle.innerText = "Module 6: Transportation & Transit";
    elements.moduleSubtitle.innerText = "Purchase train or bus tickets, validate tickets, ask for platform tracks, and check schedules.";
  } else if (state.currentModule === 7) {
    elements.moduleTitle.innerText = "Module 7: Socializing & Connection";
    elements.moduleSubtitle.innerText = "Introduce yourself, share your name and nationality, exchange small talk, and say polite farewells.";
  } else if (state.currentModule === 8) {
    elements.moduleTitle.innerText = "Module 8: Pharmacy & Medical Needs";
    elements.moduleSubtitle.innerText = "Explain simple symptoms (headache, cough), ask for doctors, tell allergies, and call emergency services.";
  }
  
  // Update study mode active button styles
  if (elements.modeItToEnBtn && elements.modeEnToItBtn) {
    if (state.studyMode === 'it-to-en') {
      elements.modeItToEnBtn.classList.add('active');
      elements.modeEnToItBtn.classList.remove('active');
    } else {
      elements.modeItToEnBtn.classList.remove('active');
      elements.modeEnToItBtn.classList.add('active');
    }
  }
  
  const isItToEn = state.studyMode === 'it-to-en';
  
  // Render card text
  elements.cardFaceFront.innerHTML = `
    <div class="card-header-meta">
      <span class="card-badge">${currentCard.category}</span>
      <span>${state.currentCardIndex + 1} of ${activePhrases.length}</span>
    </div>
    <div class="card-phrase">${isItToEn ? currentCard.phrase : currentCard.translation}</div>
    ${isItToEn ? `<div class="card-phonetic">"${currentCard.phonetic}"</div>` : ''}
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
    <div class="card-translation">${isItToEn ? currentCard.translation : currentCard.phrase}</div>
    ${!isItToEn ? `<div class="card-phonetic" style="font-size: 1.3rem; font-weight: 500; color: var(--text-muted); margin-bottom: 12px; margin-top: -8px;">"${currentCard.phonetic}"</div>` : ''}
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
  elements.flashcard.addEventListener('click', () => {
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
  
  // Study Mode Toggle Buttons
  if (elements.modeItToEnBtn && elements.modeEnToItBtn) {
    elements.modeItToEnBtn.addEventListener('click', () => {
      state.studyMode = 'it-to-en';
      saveState();
      renderFlashcardModule();
    });
    
    elements.modeEnToItBtn.addEventListener('click', () => {
      state.studyMode = 'en-to-it';
      saveState();
      renderFlashcardModule();
    });
  }
  
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

      <div class="timeline-card">
        <span class="timeline-badge" style="background:#E8F5E9; color:#2E7D32;">15 Questions</span>
        <h3>Quiz 4: Shopping</h3>
        <p>Test your Hour 4 vocabulary. Translating prices, cards, cash checks, and receipts.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.mod4}/15</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="mod4">Start Quiz</button>
        </div>
      </div>

      <div class="timeline-card">
        <span class="timeline-badge" style="background:#E8F5E9; color:#2E7D32;">15 Questions</span>
        <h3>Quiz 5: Hotel</h3>
        <p>Test your Hour 5 vocabulary. Translating check-ins, Wi-Fi password, and checkout requests.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.mod5}/15</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="mod5">Start Quiz</button>
        </div>
      </div>

      <div class="timeline-card">
        <span class="timeline-badge" style="background:#E8F5E9; color:#2E7D32;">15 Questions</span>
        <h3>Quiz 6: Transit</h3>
        <p>Test your Hour 6 vocabulary. Translating train tickets, validation, and platforms.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.mod6}/15</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="mod6">Start Quiz</button>
        </div>
      </div>

      <div class="timeline-card">
        <span class="timeline-badge" style="background:#E8F5E9; color:#2E7D32;">15 Questions</span>
        <h3>Quiz 7: Social</h3>
        <p>Test your Hour 7 vocabulary. Translating introductions, country tags, and farewells.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.mod7}/15</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="mod7">Start Quiz</button>
        </div>
      </div>

      <div class="timeline-card">
        <span class="timeline-badge" style="background:#E8F5E9; color:#2E7D32;">15 Questions</span>
        <h3>Quiz 8: Medical</h3>
        <p>Test your Hour 8 vocabulary. Translating physical symptoms, clinic checks, and responders.</p>
        <div class="timeline-meta" style="margin-top:auto; padding-top:16px;">
          <span>🏆 High Score: ${state.quizScores.mod8}/15</span>
          <button class="btn btn-primary start-quiz-btn" data-quiz-type="mod8">Start Quiz</button>
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
  } else if (quizType === 'mod4') {
    state.currentQuizQuestions = generateQuizForModule(4);
  } else if (quizType === 'mod5') {
    state.currentQuizQuestions = generateQuizForModule(5);
  } else if (quizType === 'mod6') {
    state.currentQuizQuestions = generateQuizForModule(6);
  } else if (quizType === 'mod7') {
    state.currentQuizQuestions = generateQuizForModule(7);
  } else if (quizType === 'mod8') {
    state.currentQuizQuestions = generateQuizForModule(8);
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
    `;
    
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
