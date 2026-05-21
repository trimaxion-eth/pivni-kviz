/** Pivní kvíz – slide data (Czech). Images: images/{KK}-{OO}-* */

export const META = {
  title: "Pivní kvíz",
  subtitle: "Festival piva · Port 1560",
  place: "Pivovarská restaurace, Český Krumlov",
  year: "1560",
};

export const RULES = [
  "Domluvte se na názvu týmu a spolu s počtem hráčů ho uveďte na každý odpovědní list.",
  "Každé kolo má 10 otázek (dvě témata po pěti otázkách).",
  "Po každém kole moderátor opraví odpovědní listy a zobrazí správné odpovědi. Pořadí týmů ale uvede až na konci kvízu.",
  "Tipovací otázky: bod získá jen tým s nejbližším odhadem.",
  "Poslední slovo má vždy moderátor.",
];

/** @type {Record<string, string>} round-question → image path */
export const IMAGES = {
  "1-1": "images/01-01-hops.jpg",
  "1-3": "images/01-03-mash.jpg",
  "1-4": "images/01-04-yeast.webp",
  "1-5": "images/01-05-IBU.jpg",
  "1-t2": "images/02-00-audio.jpg",
  "1-6": "images/02-06-branik.webp",
  "1-7": "images/02-07-cert.jpg",
  "1-8": "images/02-08-alkehol.jpg",
  "1-9": "images/02-09-zz.jpg",
  "1-10": "images/02-10-hospoda.jpg",
  "2-t1": "images/03-00-historie.jpg",
  "2-1": "images/03-01-mnich.webp",
  "2-2": "images/03-02-pocet.jpg",
  "2-3": "images/03-03-krcin.jpg",
  "2-4": "images/03-04-egon.jfif",
  "2-5": "images/03-05-rody.jpg",
  "2-t2": "images/04-00-krumlov.jpg",
  "2-6": "images/04-01-roky.png",
  "2-7": "images/04-02-dasa.avif",
  "2-8": "images/04-03-lezaky.webp",
  "2-9": "images/04-04-vyhra.jpg",
  "2-10": "images/04-05-degustace.jpeg",
  "3-t1": "images/05-00-rekord.jpg",
  "3-1": "images/05-01-tmave.jpeg",
  "3-2": "images/05-02-festival.jpg",
  "3-3": "images/05-03-lahve.jpg",
  "3-4": "images/05-04-nejsilnejsi.jpeg",
  "3-5": "images/05-05-kuriozita.jpeg",
  "3-t2": "images/06-00-beer-brands.jpg",
  "3-6": "images/06-01-guiness.jpg",
  "3-7": "images/06-02-limeta.jpg",
  "3-8": "images/06-03-spoj.jpg",
  "3-10": "images/06-05-heineken.jpg",
  "4-t1": "images/07-00-popkultura.jpeg",
  "4-1": "images/07-01-bond.jpg",
  "4-2": "images/07-02-postriziny.jpg",
  "4-3": "images/07-03-kalich.jpg",
  "4-4": "images/07-04-homer.jpeg",
  "4-5": "images/07-05-posel.jpg",
  "4-t2": "images/08-00-druhy.jpg",
  "4-6": "images/08-01-weiss.jpg",
  "4-7": "images/08-02-ipa.jpg",
  "4-8": "images/08-03-plzen.jpg",
  "4-9": "images/08-04-monk.jpg",
  "4-10": "images/08-05-cochtan.jpg",
};

export const ROUNDS = [
  {
    num: 1,
    themes: [
      {
        num: 1,
        title: "Pivní základy",
        questions: [
          {
            text: "Pivo se vaří ze čtyř základních ingrediencí – sladu, vody, chmele a kvasničné kultury. Lze dle české legislativy nahradit část sladu i jinou přísadou a pořád se dá nápoj nazývat pivem? Ano či ne?",
            answer:
              "ANO – slad lze do výše jedné třetiny hmotnosti celkového extraktu původní mladiny nahradit extraktem (cukr, obilný škrob, ječmen, pšenice, rýže).",
          },
          {
            text: "Jaký druh obilí se používá nejčastěji při výrobě českého piva?",
            answer: "ječmen",
          },
          {
            text: "Jak se nazývá proces, při kterém se škrob ve sladu mění na zkvasitelné cukry?",
            answer: "rmutování",
          },
          {
            text: "Jaký typ kvašení je typický pro české ležáky?",
            answer: "spodní kvašení",
          },
          {
            text: "Co znamená zkratka IBU na pivní etiketě?",
            answer: "jednotka hořkosti piva",
          },
        ],
      },
      {
        num: 2,
        title: "Audioukázky",
        imageKey: "1-t2",
        audio: true,
        questions: [
          {
            text: "Poznáte, která pražská značka piva se v 90. letech proslavila touto reklamou? Poznejte po zvuku.",
            hint: "Poslechněte si ukázku",
            answer: "Braník",
          },
          {
            text: "Napište podle zvuku českou pohádku z roku 1984.",
            hint: "Poslechněte si ukázku",
            answer: "S čerty nejsou žerty",
          },
          {
            text: "Uveďte kapelu, která vydala tuto píseň z roku 1993.",
            hint: "Poslechněte si ukázku",
            answer: "Alkehol",
          },
          {
            text: "Které americké trio natočilo v roce 1973 píseň Beer Drinkers & Hell Raisers?",
            hint: "Poslechněte si ukázku",
            answer: "ZZ Top",
          },
          {
            text: "Dokončete sloku znělky seriálu Hospoda: „To je ten důvod má milá, že…“",
            hint: "Poslechněte si ukázku",
            answer: "„…já tam raz dva tři jsem.“",
          },
        ],
      },
    ],
  },
  {
    num: 2,
    themes: [
      {
        num: 3,
        title: "Pivní historie Krumlova",
        imageKey: "2-t1",
        questions: [
          {
            text: "Co znamenal pojem „mílové právo“, které Petr z Rožmberka v roce 1347 udělil krumlovským krčmám a pivovaru?",
            answer:
              "Výhradní právo prodávat pivo v okruhu jedné míle od městských hradeb",
          },
          {
            text: "Kromě panského pivovaru, v jehož areálu právě sedíme, měl Český Krumlov v minulosti více pivovarů. Nejvíc jich najednou fungovalo v 18. století. Kolik jich bylo?",
            answer:
              "4 – pivovar klarisek, arciděkanství a prelatury, panský pivovar, městský pivovar",
          },
          {
            text: "Jak se jmenoval rybníkář, který v roce 1561 nechal vybudovat vodovod pro panský pivovar?",
            answer: "Jakub Krčín z Jelčan",
          },
          {
            text: "Budova které krumlovské instituce sloužila až do roku 1949 jako městský pivovar?",
            options: [
              "a) Hotel Růže",
              "b) Egon Schiele Art Centrum",
              "c) Městské divadlo",
              "d) ZUŠ",
            ],
            answer: "b) Egon Schiele Art Centrum",
          },
          {
            text: "Seřaďte šlechtické vlastníky panského pivovaru od nejstarších po nejmladší.",
            options: [
              "a) Eggenberkové",
              "b) Schwarzenbergové",
              "c) Rožmberkové",
            ],
            orderItems: ["Rožmberkové", "Eggenberkové", "Schwarzenbergové"],
          },
        ],
      },
      {
        num: 4,
        title: "Pivovar Krumlov",
        imageKey: "2-t2",
        questions: [
          {
            text: "Jaké jubileum letos Pivovar Krumlov oslavil?",
            answer: "10 let",
          },
          {
            text: "Jak se celým jménem jmenuje sládek krumlovského pivovaru?",
            answer: "Dagmar Vlková",
          },
          {
            text: "Která piva vaří pivovar celoročně? Napiště alespoň druh piva a stupeň.",
            answer:
              "Světlý ležák 11°, Premium světlý ležák 12°, Tmavý nakuřovaný ležák 12°",
          },
          {
            text: "Jak se jmenuje speciál, který letos vyhrál cenu Chutná hezky. Jihočesky?",
            answer: "Rogendorf",
          },
          {
            text: "Praktická část: dokážete pojmenovat piva Pivovaru Krumlov z degustačního prkénka? Zvolte zástupce týmu nebo hodnoťte společně.",
            tasting: true,
            answer:
              "modrá: Světlý ležák 11°, zelená: Premium světlý ležák 12°, žlutá: Tmavý nakuřovaný ležák 12°, červená: Festivalový speciál Rogendorf",
          },
        ],
      },
    ],
  },
  {
    num: 3,
    themes: [
      {
        num: 5,
        title: "Pivní rekordy, mýty a kuriozity",
        imageKey: "3-t1",
        questions: [
          {
            text: "Je pravda, že tmavé pivo obsahuje více alkoholu než světlé?",
            answer: "Ne – barva piva neudává obsah alkoholu",
          },
          {
            text: "Jaký pivní rekord vytvořili návštěvníci Českého pivního festivalu v roce 2013?",
            options: [
              "a) vyrobili největší pivní tácek",
              "b) štafetou vypili nejvyšší počet různých druhů piv",
              "c) šlo o nejvíce návštěvníků pivního festivalu v Evropě",
              "d) vypili nejvíce nealkoholického piva",
            ],
            answer:
              "b) účastníci během půl hodin štafetou vypili 248 různých druhů piv",
          },
          {
            text: "Tipněte si: kolik lahví má ve sbírce držitel Guinnessova rekordu Rob Werner z USA? Bod dostane jen tým s nejbližším tipem.",
            answer: "25 866 lahví",
          },
          {
            text: "Kolik alkoholu má skotské pivo Snake Venom, které je podle jeho výrobce nejsilnější pivo na světě?",
            options: ["1. 52,5 %", "2. 82,3 %", "3. 67,5 %"],
            answer:
              "67,5 % (oficiálně nepotvrzeno; Guinnessova kniha rekordů uvádí jako nejsilnější pivo The End of History pivovaru BrewDog s 55 % alkoholu)",
          },
          {
            text: "V roce 2016 byla v belgických Bruggách vybudována pivní kuriozita. Která?",
            options: [
              "a) pípa v kašně na náměstí",
              "b) speciální pivní potrubí",
              "c) ledová socha ze zmrzlého piva",
            ],
            answer:
              "b) podzemní potrubí pivovaru De Halve Maan – vede z pivovaru do stáčírny a má přes 3 kilometry",
          },
        ],
      },
      {
        num: 6,
        title: "Slavné pivní značky",
        imageKey: "3-t2",
        questions: [
          {
            text: "Jak se jmenuje pivovar, který vyrábí pivo Guinness?",
            options: [
              "a) Dubliner",
              "b) Hoegaarden",
              "c) St. James's Gate Brewery",
              "d) Celtic",
            ],
            answer: "c) St. James's Gate Brewery",
          },
          {
            text: "Jak se jmenuje mexické pivo, které se často podává s limetkou?",
            answer: "Corona",
          },
          {
            text: "Spojte značku se zemí původu:",
            matchOptions: true,
            matchColumnTitles: { left: "Značka piva", right: "Země původu" },
            options: [
              "1. Heineken",
              "2. Tuborg",
              "3. Brahma",
              "4. Stella Artois",
              "a) Belgie",
              "b) Brazílie",
              "c) Dánsko",
              "d) Nizozemsko",
            ],
            matchPairs: [
              { left: "Heineken", right: "Nizozemsko" },
              { left: "Tuborg", right: "Dánsko" },
              { left: "Brahma", right: "Brazílie" },
              { left: "Stella Artois", right: "Belgie" },
            ],
          },
          {
            text: "Která česká značka používá slogan „Život je hořký. Bohudík.“?",
            answer: "Radegast",
          },
          {
            text: "Uveďte tři ČESKÉ značky z portfolia společnosti Heineken ČR. Za dvě správné odpovědi dostanete půl bodu.",
            answer: "Krušovice, Starobrno, Zlatopramen, Březňák, Hostan",
          },
        ],
      },
    ],
  },
  {
    num: 4,
    themes: [
      {
        num: 7,
        title: "Pivo v popkultuře",
        imageKey: "4-t1",
        questions: [
          {
            text: "V posledních filmech s Danielem Craigem vyměnil slavný špion James Bond martini za pivo. O jakou značku šlo?",
            answer:
              "Heineken (na kameře se poprvé objevilo ve filmu Skyfall (2012)",
          },
          {
            text: "Který český spisovatel napsal Postřižiny a Slavnosti sněženek, kde hrají pivo a hospoda důležitou roli?",
            answer: "Bohumil Hrabal",
          },
          {
            text: "Ve kterém románu chodí hlavní hrdina do hospody U Kalicha? Za jméno autora obdržíte půl bodu navíc.",
            answer: "Osudy dobrého vojáka Švejka – Jaroslav Hašek",
          },
          {
            text: "Jak se jmenuje pivo, kterému holduje Homer Simpson?",
            answer:
              "Duff. (V konkurenčním městě Shelbyville mají pivo značky Fudd.)",
          },
          {
            text: "Dokončete: „Lepší pivo v žaludku nežli…“ (replika z cimrmanovské hry Posel z Liptákova)",
            answer: "„…voda na plicích“",
          },
        ],
      },
      {
        num: 8,
        title: "Druhy piva",
        imageKey: "4-t2",
        questions: [
          {
            text: "Čím se hlavně vyznačuje pivo weizen?",
            answer: "obsahem pšenice – má minimálně 50 % pšeničného sladu",
          },
          {
            text: "Co znamená zkratka IPA?",
            answer:
              "India Pale Ale – silně chmelené světlé svrchně kvašené pivo (vzniklo pro export do Indie)",
          },
          {
            text: "Ve kterém století vznikl plzeňský ležák?",
            answer:
              "19. století (přesně to bylo 5. 10. 1842, uvařil ho bavorský sládek Josef Groll)",
          },
          {
            text: "Která země je proslulá trapistickými pivy z klášterů?",
            answer: "Belgie",
          },
          {
            text: "Jaké pivo dostanete, když si v české hospodě objednáte čochtana?",
            answer: "bez pěny, na jeden zátah (opak mlíka)",
          },
        ],
      },
    ],
  },
];
