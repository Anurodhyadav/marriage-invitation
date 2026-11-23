export interface EventItem {
  id: string;
  badgeDate: string; // e.g. "10 DEC"
  title: string; // e.g. "Mehendi"
  fullDate: string; // e.g. "Thursday, 10 December 2026"
  time: string; // e.g. "3:00 pm – 8:00 pm"
  description: string;
  venue: string; // e.g. "Piradi Chowk, Janakpur"
  mapUrl: string;
  dressCodeText: string; // e.g. "Shades of green"
  dressCodePalette: string[]; // 3 hex colors e.g. ["#2d5a27", "#768c4a", "#dfcf98"]
}

export interface FamilyPerson {
  role: string; // "THE BRIDE" or "THE GROOM"
  name: string;
  relation: string; // "Daughter of" or "Son of"
  parents: string; // e.g. "Shree Jibachh Yadav & Mrs. Ambika Yadav"
  location: string; // e.g. "Sabaila 11, Inarwa"
}

export interface WeddingData {
  couple: {
    brideFirstName: string;
    brideFullName: string;
    groomFirstName: string;
    groomFullName: string;
    hashtag: string;
  };
  cover: {
    headerTop: string; // "TOGETHER"
    headerSub: string; // "WITH THEIR FAMILIES"
    requestLine1: string; // "REQUEST THE PLEASURE OF YOUR COMPANY"
    requestLine2: string; // "AT THE CEREMONY OF THEIR WEDDING"
    dayOfWeek: string; // "FRI"
    month: string; // "DEC"
    dayNumber: string; // "11"
    year: string; // "2026"
    yearInWords?: string; // "TWO THOUSAND TWENTY SIX"
    timeInWords: string; // "AT TEN O'CLOCK IN THE MORNING"
    venueName: string; // "PIRADI CHOWK"
    venueLocation: string; // "JANAKPUR, NEPAL"
    receptionNote?: string; // "reception to follow"
    openWithMusicButton: string; // "OPEN THE INVITATION"
    openWithoutMusicLink?: string; // "Open without music"
  };
  hero: {
    shubhaBibaha: string; // "शुभ विवाह"
    introText: string;
    weddingDateEnglish: string; // "FRIDAY · 11 DECEMBER 2026"
    weddingDateNepali: string; // "25 Mangsir 2083 B.S."
  };
  families: {
    sectionTitle: string; // "With the blessings of our families"
    bride: FamilyPerson;
    groom: FamilyPerson;
  };
  celebrations: {
    subtitle: string; // "WHEN AND WHERE"
    title: string; // "The celebrations"
    events: EventItem[];
  };
  footer: {
    nepaliQuote: string; // "हजुरको उपस्थिति नै हाम्रा लागि सबैभन्दा ठूलो उपहार हुनेछ।"
    englishQuote: string; // "Your presence will be the greatest gift to us."
  };
  music: {
    src: string;
    title: string;
  };
}

export const inviteData: WeddingData = {
  couple: {
    brideFirstName: "Sanjana",
    brideFullName: "Sanjana Yadav",
    groomFirstName: "Anurodh",
    groomFullName: "Anurodh Yadav",
    hashtag: "#AnurodhWedsSanjana",
  },
  cover: {
    headerTop: "TOGETHER",
    headerSub: "WITH OUR FAMILIES",
    requestLine1: "REQUEST THE PLEASURE OF YOUR COMPANY",
    requestLine2: "AT OUR WEDDING CEREMONY",
    dayOfWeek: "FRI",
    month: "MANGSIR",
    dayNumber: "25",
    year: "2083",
    timeInWords: "AT TEN O'CLOCK IN THE MORNING",
    venueName: "PIRADI CHOWK",
    venueLocation: "JANAKPUR, NEPAL",
    openWithMusicButton: "OPEN THE INVITATION",
  },
  hero: {
    shubhaBibaha: "शुभ विवाह",
    introText: "Together with their families, we joyfully invite you to the wedding of",
    weddingDateEnglish: "FRIDAY · 11 DECEMBER 2026",
    weddingDateNepali: "25 Mangsir 2083 B.S.",
  },
  families: {
    sectionTitle: "With the blessings of our families",
    bride: {
      role: "THE BRIDE",
      name: "Sanjana Yadav",
      relation: "Daughter of",
      parents: "Shree Jibachh Yadav\n& Mrs. Ambika Yadav",
      location: "Sabaila 11, Inarwa",
    },
    groom: {
      role: "THE GROOM",
      name: "Anurodh Yadav",
      relation: "Son of",
      parents: "Shree Raj Narayan Yadav\n& Mrs. Rita Yadav",
      location: "Piradi Chowk, Janakpur",
    },
  },
  celebrations: {
    subtitle: "WHEN AND WHERE",
    title: "The celebrations",
    events: [
      {
        id: "matkor",
        badgeDate: "21 MANGSIR",
        title: "Matkor",
        fullDate: "Thursday, 21st Mangsir 2083",
        time: "4:00 pm – 8:00 pm",
        description: "Henna, songs and the women of both families.",
        venue: "Piradi Chowk, Janakpur",
        mapUrl: "https://maps.app.goo.gl/41C52SgZAPXHz4q58",
        dressCodeText: "Shades of green",
        dressCodePalette: ["#4a6147", "#859c6c", "#d5c89f"],
      },
      {
        id: "mehendi",
        badgeDate: "10 DEC",
        title: "Mehendi",
        fullDate: "Thursday, 24th Mangsir 2083",
        time: "5:00 pm – 8:00 pm",
        description: "Henna, songs and the women of both families.",
        venue: "Piradi Chowk, Janakpur",
        mapUrl: "https://maps.app.goo.gl/41C52SgZAPXHz4q58",
        dressCodeText: "Shades of green",
        dressCodePalette: ["#4a6147", "#859c6c", "#d5c89f"],
      },
      {
        id: "haldi",
        badgeDate: "10 DEC",
        title: "Haldi",
        fullDate: "Thursday, 24th Mangsir 2083",
        time: "5:00 pm – 8:00 pm",
        description: "Turmeric for luck and glow, marigolds everywhere.",
        venue: "Piradi Chowk, Janakpur",
        mapUrl: "https://maps.app.goo.gl/41C52SgZAPXHz4q58",
        dressCodeText: "Yellow, and clothes you don’t mind staining",
        dressCodePalette: ["#d88c24", "#e8ba3b", "#f7ecd4"],
      },
      {
        id: "bibaha",
        badgeDate: "11 DEC",
        title: "Janti & Shubha Bibaha",
        fullDate: "Friday, 25th Mangsir 2083",
        time: "10:00 am – 6:00 pm",
        description: "The procession, the Swayambar and the sacred fire.",
        venue: "Piradi Chowk, Janakpur",
        mapUrl: "https://maps.app.goo.gl/41C52SgZAPXHz4q58",
        dressCodeText: "Traditional: daura suruwal, saree, dhaka",
        dressCodePalette: ["#92242a", "#c49746", "#f5edd7"],
      },
    ],
  },
  footer: {
    nepaliQuote: "हजुरको उपस्थिति नै हाम्रा लागि सबैभन्दा ठूलो उपहार हुनेछ।",
    englishQuote: "Your presence will be the greatest gift to us.",
  },
  music: {
    src: "/audio/chup-mahi.mp3",
    title: "Mangal Dhun / Wedding Sitar & Flute",
  },
};
