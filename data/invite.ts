export interface EventItem {
  id: string;
  badgeDate: string; // e.g. "9 FEB"
  title: string; // e.g. "Mehendi"
  fullDate: string; // e.g. "Tuesday, 9 February 2027"
  time: string; // e.g. "3:00 pm – 8:00 pm"
  description: string;
  venue: string; // e.g. "Katwal Niwas, Baluwatar"
  mapUrl: string;
  dressCodeText: string; // e.g. "Shades of green"
  dressCodePalette: string[]; // 3 hex colors e.g. ["#2d5a27", "#768c4a", "#dfcf98"]
}

export interface FamilyPerson {
  role: string; // "THE BRIDE" or "THE GROOM"
  name: string;
  relation: string; // "Daughter of" or "Son of"
  parents: string; // e.g. "Mr. Ram Bahadur Katwal & Mrs. Sita Katwal"
  location: string; // e.g. "Baluwatar, Kathmandu"
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
    blessing: string; // "शुभ विवाह"
    invitationNote: string;
    openWithMusicButton: string;
    openWithoutMusicLink: string;
  };
  hero: {
    shreeGanesh: string; // "॥ श्री गणेशाय नमः ॥"
    shubhaBibaha: string; // "शुभ विवाह"
    introText: string;
    weddingDateEnglish: string; // "FRIDAY · 12 FEBRUARY 2027"
    weddingDateNepali: string; // "29 Magh 2083 B.S."
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
    blessing: "शुभ विवाह",
    invitationNote: "You are invited to our wedding",
    openWithMusicButton: "OPEN THE INVITATION",
    openWithoutMusicLink: "Open without music",
  },
  hero: {
    shreeGanesh: "॥ श्री गणेशाय नमः ॥",
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
      location: "Piradi Chowk, Janakapur",
    },
  },
  celebrations: {
    subtitle: "WHEN AND WHERE",
    title: "The celebrations",
    events: [
      {
        id: "mehendi",
        badgeDate: "10 DEC",
        title: "Mehendi",
        fullDate: "Thrusday, 10 December 2026",
        time: "3:00 pm – 8:00 pm",
        description: "Henna, songs and the women of both families.",
        venue: "Piradi Chowk, Janakapur",
        mapUrl: "https://maps.google.com/?q=Baluwatar,+Kathmandu",
        dressCodeText: "Shades of green",
        dressCodePalette: ["#385a36", "#7e9554", "#d6cb96"],
      },
      {
        id: "haldi",
        badgeDate: "10 DEC",
        title: "Haldi",
        fullDate: "Thrusday, 10 December 2026",
        time: "10:00 am – 1:00 pm",
        description: "Turmeric for luck and glow, marigolds everywhere.",
        venue: "Piradu Chowk, Janakapur",
        mapUrl: "https://maps.google.com/?q=Baluwatar,+Kathmandu",
        dressCodeText: "Yellow, and clothes you don’t mind staining",
        dressCodePalette: ["#d98716", "#eab32a", "#faebd2"],
      },
      {
        id: "bibaha",
        badgeDate: "11 DEC",
        title: "Janti & Shubha Bibaha",
        fullDate: "Friday, 11 DECEMBER 2026",
        time: "10:30 am – 6:00 pm",
        description: "The procession, the Swayambar and the sacred fire.",
        venue: "Piradi Chowk, Janakapur",
        mapUrl: "https://maps.google.com/?q=Jawalakhel,+Lalitpur",
        dressCodeText: "Traditional: daura suruwal, saree, dhaka",
        dressCodePalette: ["#8f1c24", "#c49339", "#f4ecd7"],
      },
    ],
  },
  footer: {
    nepaliQuote: "हजुरको उपस्थिति नै हाम्रा लागि सबैभन्दा ठूलो उपहार हुनेछ।",
    englishQuote: "Your presence will be the greatest gift to us.",
  },
  music: {
    src: "/audio/wedding-flute.mp3",
    title: "Mangal Dhun / Wedding Sitar & Flute",
  },
};

