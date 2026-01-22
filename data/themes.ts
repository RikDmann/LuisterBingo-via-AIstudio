
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
      },
      { 
        id: 'liberation', 
        title: 'Bevrijdingsdag (4 & 5 mei)', 
        emoji: '🕊️', 
        description: 'Herdenken en vieren van vrijheid.', 
        words: [
          'Vrijheid', 'Oorlog', 'Vrede', 'Herdenking', 'Krans', 'Twee minuten stilte', 'Vlag halfstok', 'Bevrijdingsfestival', 'Veteraan', 'Dam', 'Soldaat', 'Vieren', '4 mei', '5 mei', 'Tweede Wereldoorlog', 'Bevrijding', 'Democratie', 'Grondwet', 'Respect', 'Stilte', 'Monument', 'Verzetsheld', 'Anne Frank', 'Jodenvervolging', 'Slachtoffers', 'Militairen', 'Concert', 'Toespraak', 'Koning', 'Kranslegging', 'Last Post', 'Taptoe', 'Vrijheidsvuur', 'Estafette', 'Ambassadeurs', 'Optreden', 'Dansen', 'Vrij zijn', 'Menserechten', 'Herinneren'
        ] 
      },
      { 
        id: 'birthday', 
        title: 'Verjaardag', 
        emoji: '🎂', 
        description: 'Slingers, taart en visite.', 
        words: [
          'Jarige', 'Taart', 'Kaarsjes', 'Uitblazen', 'Zingen', 'Lang zal ze leven', 'Cadeau', 'Slingers', 'Ballonnen', 'Feestje', 'Trakteren', 'Uitnodiging', 'Leeftijd', 'Felicitatie', 'Gefeliciteerd', 'Visite', 'Kringverjaardag', 'Hapjes', 'Drinken', 'Cadeaulijstje', 'Surprise party', 'Traktatie', 'School', 'Klas', 'Hoera', 'Hiep hiep hoera', 'Cadeaubon', 'Envelop', 'Verjaardagskaart', 'Post', 'Jarig zijn', 'Kroon', 'Stoel versieren', 'Familie', 'Vrienden', 'Spelletjes', 'Feestmuts', 'Verjaardagskalender', 'Oud worden', 'Jong blijven'
        ] 
      },
      { 
        id: 'stmartin', 
        title: 'Sint Maarten', 
        emoji: '🏮', 
        description: 'Lampionnen, liedjes en snoep.', 
        words: [
          '11 november', 'Lampion', 'Lichtje', 'Deur', 'Aanbellen', 'Liedje', 'Snoep', 'Mandarijn', 'Donker', 'Optocht', 'Kinderen', 'Jas', 'Sint Maarten', 'Bedelen', 'Mantel', 'Zwaard', 'Bedelaar', 'Delen', 'Vuur', 'Lantaarn', 'Stokje', 'Batterij', 'Kaarsje', 'Zingen', 'Zak', 'Tas', 'Chocolade', 'Fruit', 'Gezelligheid', 'Koud', 'Herfst', 'Avond', 'Lichtjesoptocht', 'Papier', 'Plakken', 'Knutselen', 'Traditie', 'Liedjesboek', 'Bel', 'Open doen'
        ] 
      },
      { 
        id: 'ketikoti', 
        title: 'Keti Koti', 
        emoji: '🔗', 
        description: 'Viering van afschaffing van slavernij.', 
        words: [
          'Vrijheid', 'Slavernij', 'Ketenen', 'Verbroken', '1 juli', 'Herdenking', 'Suriname', 'Antillen', 'Klederdracht', 'Angisa', 'Feest', 'Eten', 'Respect', 'Emancipatie', 'Sranantongo', 'Manspasie', 'Koto', 'Bigi Spikri', 'Optocht', 'Amsterdam', 'Oosterpark', 'Monument', 'Verleden', 'Toekomst', 'Gelijkheid', 'Broederschap', 'Rechtvaardigheid', 'Keuken', 'Muziek', 'Dans', 'Traditie', 'Herinneren', 'Verzoening', 'Dialoog', 'Cultuur', 'Voorouders', 'Kracht', 'Trots', 'Erfgoed', 'Vrede'
        ] 
      },
    ]
  },
  {
    id: 'geography',
    title: 'Topografie',
    emoji: '🗺️',
    description: 'Steden, provincies en de Nederlandse kaart.',
    themes: [
      { 
        id: 'groningen', 
        title: 'Groningen', 
        emoji: '🏗️', 
        description: 'Plaatsnamen in de provincie Groningen.', 
        words: [
          'Groningen', 'Haren', 'Hoogezand', 'Veendam', 'Winschoten', 'Delfzijl', 'Appingedam', 'Stadskanaal', 'Oude Pekela', 'Nieuwe Pekela', 'Bedum', 'Uithuizen', 'Zuidhorn', 'Leek', 'Marum', 'Westerwolde', 'Het Oldambt', 'Eemshaven', 'Ter Apel', 'Bourtange', 'Sappemeer', 'Muntendam', 'Musselkanaal', 'Onstwedde', 'Sellingen', 'Vlagtwedde', 'Grijpskerk', 'Aduard', 'Niekerk', 'Grootegast', 'Warffum', 'Baflo', 'Winsum', 'Sauwerd', 'Middelstum', 'Loppersum', 'Ten Boer', 'Harkstede', 'Siddeburen', 'Slochteren'
        ] 
      },
      { 
        id: 'friesland', 
        title: 'Friesland (Fryslân)', 
        emoji: '🛶', 
        description: 'Plaatsnamen in de provincie Friesland.', 
        words: [
          'Leeuwarden', 'Sneek', 'Heerenveen', 'Drachten', 'Harlingen', 'Dokkum', 'Franeker', 'Joure', 'Lemmer', 'Bolsward', 'Workum', 'Hindeloopen', 'Sloten', 'IJlst', 'Stavoren', 'Wolvega', 'Gorredijk', 'Kollum', 'Grou', 'De Wouden', 'Akkrum', 'Bergum', 'Hurdegaryp', 'Stiens', 'Menaldum', 'Berlikum', 'Tzummarum', 'Sexbierum', 'Makkum', 'Witmarsum', 'Arum', 'Kimswerd', 'Pingjum', 'Zurich', 'Oosterwolde', 'Appelscha', 'Bakkeveen', 'Beetsterzwaag', 'Ureterp', 'Surhuisterveen'
        ] 
      },
      { 
        id: 'drenthe', 
        title: 'Drenthe', 
        emoji: '🚲', 
        description: 'Plaatsnamen in de provincie Drenthe.', 
        words: [
          'Assen', 'Emmen', 'Hoogeveen', 'Meppel', 'Coevorden', 'Roden', 'Beilen', 'Westerbork', 'Borger', 'Gieten', 'Norg', 'Zuidlaren', 'Diever', 'Dwingeloo', 'Klazienaveen', 'Eelde', 'Paterswolde', 'Vries', 'Schoonebeek', 'Smilde', 'Rolde', 'Annen', 'Zuidveld', 'Odoorn', 'Exloo', 'Valthermond', 'Nieuw-Amsterdam', 'Erica', 'Zwartemeer', 'Ruinen', 'Havelte', 'Ruinerwold', 'Peize', 'Bunne', 'Donderen', 'Nieuw-Roden', 'Zweeloo', 'Aalden', 'Dalen', 'Westerveld'
        ] 
      },
      { 
        id: 'overijssel', 
        title: 'Overijssel', 
        emoji: '🌿', 
        description: 'Plaatsnamen in de provincie Overijssel.', 
        words: [
          'Zwolle', 'Enschede', 'Deventer', 'Hengelo', 'Almelo', 'Kampen', 'Rijssen', 'Steenwijk', 'Oldenzaal', 'Haaksbergen', 'Raalte', 'Nijverdal', 'Hardenberg', 'Ommen', 'Dalfsen', 'Staphorst', 'Twente', 'Salland', 'Kop van Overijssel', 'Vriezenveen', 'Hellendoorn', 'Holten', 'Goor', 'Delden', 'Diepenheim', 'Markelo', 'Borne', 'Losser', 'Denekamp', 'Ootmarsum', 'Tubbergen', 'Weerselo', 'Wijhe', 'Olst', 'Heino', 'Lemelerveld', 'Gramsbergen', 'Dedemsvaart', 'Balkbrug', 'Genemuiden'
        ] 
      },
      { 
        id: 'flevoland', 
        title: 'Flevoland', 
        emoji: '🚜', 
        description: 'Plaatsnamen in de provincie Flevoland.', 
        words: [
          'Almere', 'Lelystad', 'Dronten', 'Emmeloord', 'Urk', 'Zeewolde', 'Biddinghuizen', 'Swifterbant', 'Marknesse', 'Ens', 'Tollebeek', 'Nagele', 'Rutten', 'Creil', 'Espel', 'Bant', 'Luttelgeest', 'Noordoostpolder', 'Almere Haven', 'Almere Stad', 'Almere Buiten', 'Almere Hout', 'Almere Poort', 'Almere Pampus', 'Larserbroek', 'Ketelhaven', 'Roggebotsluis', 'Schokland', 'Urkerland', 'Zuidelijk Flevoland', 'Oostelijk Flevoland', 'Knardijk', 'Houtribdijk', 'Harderbroek', 'Reve', 'Harderwold', 'Bremerberg', 'Ketelmeer', 'IJsselmeer', 'Markermeer'
        ] 
      },
      { 
        id: 'gelderland', 
        title: 'Gelderland', 
        emoji: '🦌', 
        description: 'Plaatsnamen in de provincie Gelderland.', 
        words: [
          'Arnhem', 'Nijmegen', 'Apeldoorn', 'Ede', 'Zutphen', 'Doetinchem', 'Tiel', 'Harderwijk', 'Wageningen', 'Winterswijk', 'Barneveld', 'Culemborg', 'Zaltbommel', 'Wijchen', 'Zevenaar', 'Groenlo', 'Elburg', 'De Veluwe', 'De Achterhoek', 'De Betuwe', 'Ermelo', 'Putten', 'Nijkerk', 'Voorthuizen', 'Lunteren', 'Bennekom', 'Renkum', 'Oosterbeek', 'Velp', 'Dieren', 'Doesburg', 'Lichtenvoorde', 'Varsseveld', 'Ulft', 'Terborg', 'Gendringen', 'Aalten', 'Borculo', 'Ruurlo', 'Lochem'
        ] 
      },
      { 
        id: 'utrecht', 
        title: 'Utrecht', 
        emoji: '⛪', 
        description: 'Plaatsnamen in de provincie Utrecht.', 
        words: [
          'Utrecht', 'Amersfoort', 'Zeist', 'Veenendaal', 'Nieuwegein', 'Woerden', 'Soest', 'Houten', 'IJsselstein', 'Leusden', 'Baarn', 'Bunschoten-Spakenburg', 'Wijk bij Duurstede', 'Rhenen', 'Breukelen', 'Maarssen', 'De Utrechtse Heuvelrug', 'Het Gooi', 'Bilthoven', 'De Bilt', 'Den Dolder', 'Bosch en Duin', 'Terwijde', 'Vleuten', 'De Meern', 'Harmelen', 'Kamerik', 'Zegveld', 'Linschoten', 'Montfoort', 'Oudewater', 'Lopik', 'Schoonhoven', 'Polsbroek', 'Benschop', 'Polsbroekerdam', 'Jaarsveld', 'Willige Langerak', 'Eemnes', 'Bunnik'
        ] 
      },
      { 
        id: 'noord-holland', 
        title: 'Noord-Holland', 
        emoji: '🌷', 
        description: 'Plaatsnamen in de provincie Noord-Holland.', 
        words: [
          'Amsterdam', 'Haarlem', 'Alkmaar', 'Hilversum', 'Hoorn', 'Den Helder', 'Zaandam', 'Amstelveen', 'Purmerend', 'Bussum', 'Weesp', 'Heerhugowaard', 'Castricum', 'Zandvoort', 'Volendam', 'Edam', 'Enkhuizen', 'West-Friesland', 'Het Gooi', 'Schagen', 'Den Burg', 'Texel', 'Julianadorp', 'Breezand', 'Anna Paulowna', 'Wieringerwerf', 'Den Oever', 'Medemblik', 'Grootebroek', 'Bovenkarspel', 'Stede Broec', 'Uitgeest', 'Heemskerk', 'Beverwijk', 'IJmuiden', 'Santpoort', 'Bloemendaal', 'Heemstede', 'Aalsmeer', 'Velsen'
        ] 
      },
      { 
        id: 'zuid-holland', 
        title: 'Zuid-Holland', 
        emoji: '⛴️', 
        description: 'Plaatsnamen in de provincie Zuid-Holland.', 
        words: [
          'Rotterdam', 'Den Haag', 'Leiden', 'Delft', 'Gouda', 'Dordrecht', 'Sassenheim', 'Lisse', 'Katwijk', 'Noordwijk', 'Alphen aan den Rijn', 'Zoetermeer', 'Schiedam', 'Vlaardingen', 'Spijkenisse', 'Capelle aan den IJssel', 'Rijswijk', 'Wassenaar', 'Bollenstreek', 'Het Westland', 'Voorburg', 'Leidschendam', 'Pijnacker', 'Nootdorp', 'Berkel en Rodenrijs', 'Bergschenhoek', 'Bleiswijk', 'Lansingerland', 'Naaldwijk', 'Monster', 's-Gravenzande', 'De Lier', 'Wateringen', 'Kwintsheul', 'Honselersdijk', 'Maassluis', 'Hellevoetsluis', 'Brielle', 'Rockanje', 'Goeree-Overflakkee'
        ] 
      },
      { 
        id: 'zeeland', 
        title: 'Zeeland', 
        emoji: '🦐', 
        description: 'Plaatsnamen in de provincie Zeeland.', 
        words: [
          'Middelburg', 'Vlissingen', 'Goes', 'Terneuzen', 'Zierikzee', 'Domburg', 'Hulst', 'Renesse', 'Veere', 'Sluis', 'Breskens', 'Oostburg', 'Axel', 'Kapelle', 'Tholen', 'Bruinisse', 'Yerseke', 'Zeeuws-Vlaanderen', 'Walcheren', 'Zuid-Beveland', 'Noord-Beveland', 'Schouwen-Duiveland', 'Sint-Annaland', 'Sint-Maartensdijk', 'Scherpenisse', 'Stavenisse', 'Kamperland', 'Kortgene', 'Wissenkerke', 'Colijnsplaat', 'Arnemuiden', 'Koudekerke', 'Westkapelle', 'Oostkapelle', 'Grijpskerke', 'Aagtekerke', 'Biggekerke', 'Meliskerke', 'Zoutelande', 'Ritthem'
        ] 
      },
      { 
        id: 'noord-brabant', 
        title: 'Noord-Brabant', 
        emoji: '🎡', 
        description: 'Plaatsnamen in de provincie Noord-Brabant.', 
        words: [
          'Eindhoven', 'Tilburg', 'Breda', 'Den Bosch', 'Helmond', 'Roosendaal', 'Bergen op Zoom', 'Oosterhout', 'Waalwijk', 'Oss', 'Veldhoven', 'Uden', 'Veghel', 'Boxtel', 'Valkenswaard', 'Best', 'Etten-Leur', 'De Kempen', 'De Peel', 'Cuijk', 'Grave', 'Mill', 'Schaijk', 'Heesch', 'Nistelrode', 'Vorstenbosch', 'Heeswijk-Dinther', 'Schijndel', 'Sint-Oedenrode', 'Son en Breugel', 'Nuenen', 'Geldrop', 'Mierlo', 'Waalre', 'Heeze', 'Leende', 'Budel', 'Maarheeze', 'Someren', 'Dongen'
        ] 
      },
      { 
        id: 'limburg', 
        title: 'Limburg', 
        emoji: '⛰️', 
        description: 'Plaatsnamen in de provincie Limburg.', 
        words: [
          'Maastricht', 'Venlo', 'Heerlen', 'Roermond', 'Sittard', 'Geleen', 'Valkenburg', 'Kerkrade', 'Weert', 'Landgraaf', 'Brunssum', 'Venray', 'Stein', 'Beek', 'Panningen', 'Horst', 'Gennep', 'Vaals', 'Gulpen', 'Zuid-Limburg', 'Noord-Limburg', 'Midden-Limburg', 'Tegelen', 'Blerick', 'Reuver', 'Swalmen', 'Melick', 'Herkenbosch', 'Vlodrop', 'Posterholt', 'Sint Odiliënberg', 'Montfort', 'Echt', 'Susteren', 'Roosteren', 'Born', 'Buchten', 'Holtum', 'Munstergeleen', 'Beekdaelen'
        ] 
      },
      { 
        id: 'europe', 
        title: 'Europese landen en hoofdsteden', 
        emoji: '🇪🇺', 
        description: 'De landen van Europa en hun hoofdsteden.', 
        words: [
          'Nederland', 'Amsterdam', 'België', 'Brussel', 'Duitsland', 'Berlijn', 'Frankrijk', 'Parijs', 'Spanje', 'Madrid', 'Italië', 'Rome', 'Portugal', 'Lissabon', 'Griekenland', 'Athene', 'Denemarken', 'Kopenhagen', 'Zweden', 'Stockholm', 'Noorwegen', 'Oslo', 'Finland', 'Helsinki', 'Ierland', 'Dublin', 'Oostenrijk', 'Wenen', 'Polen', 'Warschau', 'Tsjechië', 'Praag', 'Slowakije', 'Bratislava', 'Hongarije', 'Boedapest', 'Roemenië', 'Boekarest', 'Bulgarije', 'Sofia', 'Kroatië', 'Zagreb', 'Slovenië', 'Ljubljana', 'Estland', 'Tallinn', 'Letland', 'Riga', 'Litouwen', 'Vilnius', 'Zwitserland', 'Bern', 'Luxemburg', 'Luxemburg-stad', 'IJsland', 'Reykjavik', 'Malta', 'Valletta', 'Cyprus', 'Nicosia', 'Albanië', 'Tirana', 'Servië', 'Belgrado'
        ] 
      },
    ]
  },
  {
    id: 'typical-dutch',
    title: 'Typisch Nederlands',
    emoji: '🇳🇱',
    description: 'Dagelijks leven, cultuur en gewoontes.',
    themes: [
      { 
        id: 'circle-birthday', 
        title: 'De Kringverjaardag', 
        emoji: '☕', 
        description: 'Visite, koffie en blokjes kaas.', 
        words: [
          'kringetje', 'gefeliciteerd', 'leverworst', 'blokje kaas', 'augurk', 'zilveruitje', 'drie zoenen', 'taartje', 'slagroom', 'klapstoel', 'gezellig', 'koffie', 'thee', 'frisdrank', 'borrelnootjes', 'bitterbal', 'vlaggetjes', 'slingers', 'visite', 'oom', 'tante', 'buurman', 'cadeautje', 'envelop', 'verjaardagskalender', 'wc-rol', 'taartschep', 'vorkje', 'schoteltje', 'kratje bier', 'zoutjes', 'mosterd', 'plakje', 'proosten', 'herrie', 'polonaise', 'jarige', 'feestvarken', 'handen schudden', 'hapjes'
        ] 
      },
      { 
        id: 'weather', 
        title: 'Het Weer', 
        emoji: '🌧️', 
        description: 'Praten over de Hollandse lucht.', 
        words: [
          'regen', 'motregen', 'stortbui', 'plensbui', 'hagel', 'sneeuw', 'ijs', 'gladheid', 'code geel', 'buienradar', 'paraplu', 'regenpak', 'poncho', 'nat', 'waaien', 'storm', 'windkracht', 'tegenwind', 'wind mee', 'zonnig', 'hittegolf', 'terrasje', 'benauwd', 'bewolkt', 'grijs', 'mistig', 'bliksem', 'donder', 'onweer', 'herfst', 'lente', 'zomer', 'winter', 'sjaal', 'muts', 'wanten', 'handschoenen', 'slippers', 'zonnebrand', 'lucht'
        ] 
      },
      { 
        id: 'bicycle', 
        title: 'Op de Fiets', 
        emoji: '🚲', 
        description: 'Fietspaden en bellen.', 
        words: [
          'fietspad', 'bel', 'bagagedrager', 'slot', 'sleutel', 'lekke band', 'fietspomp', 'bakfiets', 'hand uitsteken', 'inhalen', 'stuur', 'zadel', 'verlichting', 'dynamo', 'ventiel', 'ketting', 'trapper', 'remmen', 'spatbord', 'fietstassen', 'kinderzitje', 'helm', 'wiel', 'spaak', 'omafiets', 'e-bike', 'accu', 'opladen', 'tegenligger', 'rotonde', 'voorrang', 'haaientanden', 'zebrapad', 'stoplicht', 'drempel', 'stoep', 'kasseien', 'tunnel', 'fietsenrek', 'stalling'
        ] 
      },
    ]
  },
  {
    id: 'current-2026',
    title: 'Overig & Actueel 2026',
    emoji: '🗞️',
    description: 'Nieuws, evenementen en de toekomst.',
    themes: [
      { 
        id: 'winter-olympics', 
        title: 'Olympische Winterspelen 2026', 
        emoji: '❄️', 
        description: 'Milaan, Cortina en TeamNL.', 
        words: [
          'Milaan', 'Cortina', 'Italië', 'Schaatsen', 'Langebaan', 'Shorttrack', 'IJs', 'Sneeuw', 'Skiën', 'Snowboarden', 'Helm', 'Goud', 'Medaille', 'Oranje', 'TeamNL', 'Sneeuwbril', 'Skipak', 'Slalom', 'Afdaling', 'Bobslee', 'Curling', 'Ijshockey', 'Kunstrijden', 'Langlaufen', 'Schansspringen', 'Olympische vlam', 'Openingsceremonie', 'Sluitingsceremonie', 'Atleet', 'Wedstrijd', 'Finale', 'Kampioen', 'Trainer', 'Supporters', 'Vlag', 'Volkslied', 'Podium', 'Winnaar', 'Zilver', 'Brons', 'Olympisch dorp'
        ] 
      },
      { 
        id: 'digital', 
        title: 'De Digitale Wereld', 
        emoji: '📱', 
        description: 'Wifi, apps en inloggen.', 
        words: [
          'Computer', 'Laptop', 'Telefoon', 'Smartphone', 'Tablet', 'Internet', 'Wifi', 'App', 'Berichtje', 'E-mail', 'Wachtwoord', 'Inloggen', 'Uitloggen', 'Klikken', 'Scherm', 'Oplader', 'Batterij', 'Toetsenbord', 'Muis', 'Camera', 'Luidspreker', 'Koptelefoon', 'Social media', 'Foto', 'Video', 'Bellen', 'Chatten', 'Downloaden', 'Uploaden', 'Link', 'Website', 'Online', 'Offline', 'Privacy', 'Veiligheid', 'Hacker', 'Schermtijd', 'Toetsen', 'Swipe', 'Scrollen', 'Opslaan'
        ] 
      },
    ]
  }
];
