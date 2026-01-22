import { ThemeGroup } from '../types';

export const THEME_GROUPS: ThemeGroup[] = [
  {
    id: 'holidays',
    title: 'Feestdagen',
    emoji: '📅',
    description: 'Tradities, vieringen en speciale dagen in Nederland.',
    themes: [
      { 
        id: 'sinterklaas', 
        title: 'Sinterklaas', 
        emoji: '🎁', 
        description: 'Mijter, stoomboot en cadeautjes.', 
        words: [
          'Sinterklaas', 'Piet', 'Stoomboot', 'Cadeau', 'Mijter', 'Pepernoot', 'Schoen zetten', 'Wortel', 'Gedicht', 'Surprise', 'Pakjesavond', '5 december', 'Staf', 'Boek van Sinterklaas', 'Amerigo', 'Ozosnel', 'Schoorsteen', 'Zak van Sinterklaas', 'Strooigoed', 'Kruidnoten', 'Marsepein', 'Chocoladeletter', 'Speculaas', 'Taai-taai', 'Borstplaat', 'Hulppiet', 'Intocht', 'Spanje', 'Liedjes zingen', 'Verlanglijstje', 'Inpakpapier', 'Dank u Sinterklaasje', 'Goedheiligman', 'Tabberd', 'Handschoenen', 'Ring', 'Kasteel', 'Amsterdam', 'Aankomst', 'Snoepgoed', 'Genieten', 'Traditie'
        ] 
      },
      { 
        id: 'christmas', 
        title: 'Kerstmis', 
        emoji: '🎄', 
        description: 'Kerstboom, diner en gezelligheid.', 
        words: [
          'Kerstboom', 'Kerstbal', 'Piek', 'Kerstman', 'Diner', 'Eerste Kerstdag', 'Tweede Kerstdag', 'Stal', 'Kribbe', 'Lichtjes', 'Ster', 'Sneeuw', 'Familie', 'Gezellig', 'Kerk', 'Kerstkaart', 'Kerststol', 'Kalkoen', 'Gourmetten', 'Cadeautjes', 'Engeltje', 'Rendier', 'Slee', 'Noordpool', 'Hulst', 'Kerstkrans', 'Kaarsen', 'Vrede', 'Kerstliedjes', 'Nachtmis', 'Stalletje', 'Maria', 'Jozef', 'Kindje Jezus', 'Drie Koningen', 'Wijzen', 'Os', 'Ezel', 'Stro', 'Adventskalender', 'Kerstvakantie', 'Ontbijt'
        ] 
      },
      { 
        id: 'nye', 
        title: 'Oud & Nieuw', 
        emoji: '🎆', 
        description: 'Vuurwerk, oliebollen en aftellen.', 
        words: [
          'Oliebol', 'Appelflap', 'Vuurwerk', 'Sterretjes', 'Aftellen', 'Twaalf uur', 'Champagne', 'Kurk', 'Proosten', 'Gelukkig Nieuwjaar', 'Beste wensen', 'Goede voornemens', 'Middernacht', 'Staatsloterij', 'Oudejaarsavond', 'Nieuwjaarsdag', 'Nieuwjaarsduik', 'Knallers', 'Pijlen', 'Rotjes', 'Carbid schieten', 'Gezelligheid', 'Feestje', 'Hapjes', 'Toasten', 'Klokslag', 'Rolletjes', 'Kniepertjes', 'Poedersuiker', 'Rozijnen', 'Gefrituurd', 'Jaarwisseling', 'Kalender', 'Wensen', 'Omhelzen', 'Handen schudden', 'Geluk', 'Gezondheid', 'Liefde', 'Feestvieren'
        ] 
      },
      { 
        id: 'eid', 
        title: 'Suikerfeest (Eid al-Fitr)', 
        emoji: '🌙', 
        description: 'Vastendag, zoetigheden en familie.', 
        words: [
          'Suikerfeest', 'Ramadan', 'Vasten', 'Maan', 'Dadels', 'Familiebezoek', 'Zoetigheid', 'Baklava', 'Cadeautjes', 'Nieuwe kleren', 'Moskee', 'Bidden', 'Eid Mubarak', 'Ontbijt', 'Feestmaal', 'Ramadanfeest', 'Almoes', 'Zakat', 'Vreugde', 'Samenkomen', 'Gastvrijheid', 'Henna', 'Feestelijk', 'Koekjes', 'Thee', 'Couscous', 'Marokko', 'Turkije', 'Nederland', 'Gemeenschap', 'Iftar', 'Zonsopgang', 'Zonsondergang', 'Discipline', 'Geloof', 'Vergeving', 'Dankbaarheid', 'Kinderspel', 'Vieren', 'Suikerspinnen'
        ] 
      },
      { 
        id: 'kingsday', 
        title: 'Koningsdag', 
        emoji: '👑', 
        description: 'Vrijmarkt, oranje en de koning.', 
        words: [
          'Koning', 'Koningin', 'Prinses', 'Oranje', 'Vlag', 'Wimpel', 'Vrijmarkt', 'Kleedje', 'Verkopen', 'Tompouce', 'Volkslied', 'Wilhelmus', '27 april', 'Feest', 'Willem-Alexander', 'Maxima', 'Amalia', 'Koninklijk', 'Kroon', 'Paleis', 'Oranje Bitters', 'Oranje boven', 'Koekhappen', 'Spijkerpoepen', 'Zaklopen', 'Oud-Hollandse spelen', 'Rommelmarkt', 'Tweedehands', 'Handelen', 'Pingelen', 'Gezelligheid', 'Muziek', 'Concert', 'Oranje kleding', 'Schminken', 'Vrijheid', 'Proosten', 'Hoera', 'Feestdag', 'Traditie'
        ] 
      },
      { 
        id: 'easter', 
        title: 'Pasen', 
        emoji: '🥚', 
        description: 'Eieren zoeken, paashaas en brunch.', 
        words: [
          'Paashaas', 'Ei', 'Verstoppen', 'Zoeken', 'Schilderen', 'Paasontbijt', 'Matze', 'Paasbrood', 'Tulpen', 'Lente', 'Kuiken', 'Lammetje', 'Eerste Paasdag', 'Tweede Paasdag', 'Paasvuur', 'Paastakken', 'Versieren', 'Geel', 'Narcissen', 'Paaseitjes', 'Chocolade-ei', 'Mandje', 'Paasbrunch', 'Eitje tikken', 'Opstanding', 'Kerkdienst', 'Witte Donderdag', 'Goede Vrijdag', 'Stille Zaterdag', 'Palmpasen', 'Palmtak', 'Paaslunch', 'Voorjaar', 'Bloemen', 'Groen', 'Weiland', 'Lammetjes', 'Paasfeest', 'Gezelligheid', 'Eieren eten'
        ] 
      }
    ]
  },
  {
    id: 'geography',
    title: 'Topografie',
    emoji: '🗺️',
    description: 'Steden en provincies.',
    themes: [
      { 
        id: 'groningen', 
        title: 'Groningen', 
        emoji: '🏗️', 
        description: 'Plaatsnamen in Groningen.', 
        words: ['Groningen', 'Haren', 'Hoogezand', 'Veendam', 'Winschoten', 'Delfzijl', 'Appingedam', 'Stadskanaal'] 
      }
    ]
  }
];