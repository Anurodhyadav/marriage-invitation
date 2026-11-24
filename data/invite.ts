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
  qualification?: string; // e.g. "BBA" or "Software Engineer"
  company?: string; // e.g. "Fetchly LLC"
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
    hashtag: "#SanjanaWedsAnurodh",
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
    timeInWords: "AT ELEVEN O'CLOCK IN THE MORNING",
    venueName: "SABAILA 11, INARWA",
    venueLocation: "DHANUSA, NEPAL",
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
      qualification: "BBA",
      // company: "Formerly at RBB",
      relation: "Daughter of",
      parents: "Shree Jibachh Yadav\n& Mrs. Ambika Yadav",
      location: "Sabaila 11, Inarwa",
    },
    groom: {
      role: "THE GROOM",
      name: "Anurodh Yadav",
      qualification: "Software Engineer",
      company: "Fetchly, LLC",
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
        id: "puja",
        badgeDate: "23 MANGSIR",
        title: "Puja",
        fullDate: "Wednesday, 23rd Mangsir 2083",
        time: "4:00 pm – 8:00 pm",
        description: "Henna, songs and the women of both families.",
        venue: "Inarwa, Dhanusa",
        mapUrl: "https://maps.app.goo.gl/txKwRGEeYqRQtUuaA",
        dressCodeText: "Shades of green",
        dressCodePalette: ["#4a6147", "#859c6c", "#d5c89f"],
      },
      {
        id: "mehendi",
        badgeDate: "10 DEC",
        title: "Mehendi",
        fullDate: "Thursday, 24th Mangsir 2083",
        time: "4:00 pm – 8:00 pm",
        description: "Henna, songs and the women of both families.",
        venue: "Inarwa, Dhanusa",
        mapUrl: "https://maps.app.goo.gl/txKwRGEeYqRQtUuaA",
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
        venue: "Inarwa, Dhanusa",
        mapUrl: "https://maps.app.goo.gl/txKwRGEeYqRQtUuaA",
        dressCodeText: "Yellow, and clothes you don’t mind staining",
        dressCodePalette: ["#d88c24", "#e8ba3b", "#f7ecd4"],
      },
      {
        id: "bibaha",
        badgeDate: "11 DEC",
        title: "Shubha Bibaha",
        fullDate: "Friday, 25th Mangsir 2083",
        time: "4:00 pm – 11:00 pm",
        description: "The procession, the Swayambar and the sacred fire.",
        venue: "Inarwa, Dhanusa",
        mapUrl: "https://maps.app.goo.gl/txKwRGEeYqRQtUuaA",
        dressCodeText: "Traditional: daura suruwal, saree, dhaka",
        dressCodePalette: ["#92242a", "#c49746", "#f5edd7"],
      },
      {
        id: "preetibhoj",
        badgeDate: "12 DEC",
        title: "Preeti Bhoj",
        fullDate: "Saturday, 26th Mangsir 2083",
        time: "10:00 am – 3:00 pm",
        description: "The procession, the Swayambar and the sacred fire.",
        venue: "Inarwa, Dhanusa",
        mapUrl: "https://maps.app.goo.gl/txKwRGEeYqRQtUuaA",
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
    src: "/audio/sanjana-part.mp3",
    title: "Mangal Dhun / Wedding Sitar & Flute",
  },
};
