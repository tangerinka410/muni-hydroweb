const staffData = [
  {
    id: "helesic",
    name: "Doc. RNDr. Jan Helešic, Ph.D.",
    position: "Vedoucí pracovní skupiny",
    research: [
      "V době studia se věnoval ornitologii a chiropterologii",
      "Do roku 1990 pracoval v resortním ústavu Ministerstva dopravy, kde se věnoval se toxikologii, ochraně povrchových a podzemních vod a čistírenství",
      "Po návratu na MU se zpočátku věnoval ekotoxikologii a detekci znečištění prostředí perzistentními polutanty.",
      "Specialista na řád pošvatky (Plecoptera), bioindikace stavu tekoucích vod (habilitace v roce 1999).",
      "Nyní se především věnuje ekologii tekoucích vod, hyporealu, procesům na a v říčním dně a obecným problémům populací a společenstev vodních bezobratlých."
    ],
    img: "../images/staff/helesic.jpg",
    phoneNumber: "549 49 4194",
    email: "helesic@sci.muni.cz",
    address: "A07/007",
    researchgate: "https://www.researchgate.net/profile/Jan_Helesic2",
    is: "https://is.muni.cz/osoba/580"
  },
  {
    id: "zahradkova",
    name: "Doc. RNDr. Světlana Zahrádková, Ph.D.",
    position: "Akademický pracovník",
    research: [""],
    img: "../images/staff/zahradkova.jpg",
    phoneNumber: "549 49 8174",
    address: "A07/007",
    email: "zahradkova@sci.muni.cz",
    is: "https://is.muni.cz/auth/osoba/2277"
  },
  {
    id: "bojkova",
    name: "Mgr. Jindřiška Bojková, Ph.D.",
    position: "Akademický pracovník",
    description:
      "Jsem absolventkou postgraduálního studia oboru hydrobiologie na Masarykově univerzitě....Zabývám se ekologií vodního hmyzu, především jepic, pošvatek a chrostíků.",
    research: [
      "dlouhodobé změny prostředí tekoucích vod a jejich bentických společenstev a role historických antropogenních vlivů na současný výskyt různých druhů vodního hmyzu",
      "ekologie mokřadů, především prameništních slatinišť Západních Karpat a vrchovišť na Šumavě, a faktory, které ovlivňují jejich vodní společenstva",
      "problematika obnovy vodních biotopů zasažených lidskou činností, především zotavováním po acidifikaci a revitalizace tekoucích vod.",
      "taxonomie jepic Západopalearktické oblasti"
    ],
    img: "../images/staff/bojkova.jpg",
    phoneNumber: "+420549498577",
    email: "bosikado@mail.muni.cz",
    address: "A07/007",
    is: "https://is.muni.cz/auth/osoba/bosikado"
  },
  {
    id: "schenkova",
    name: "Doc. RNDr. Jana Schenková, Ph.D.",
    position: "Akademický pracovník",
    research: [""],
    img: "../images/staff/schenkova.jpg",
    phoneNumber: "549 49 6959",
    address: "A07/007",
    email: "schenk@sci.muni.cz",
    is: "https://is.muni.cz/auth/osoba/1981"
  },

  {
    id: "zhai",
    name: "Mgr. Marie Zhai, Ph.D",
    position: "Odborný pracovník",
    research: [
      "Marie Zhai je výzkumnou pracovnicí na Ústavu botaniky a zoologie Masarykovy univerzity a v současnosti se věnuje především mikroskopickým korýšům v tekoucích vodách. Tématem její magisterské práce byly planktonní korýši žijící v tůních a jejich sezónní dynamika. V roce 2007 obhájila dizertační práci na téma Časová a prostorová distribuce společenstva bezobratlých v hyporeálu štěrkovitého toku. Její vyvolenou skupinou korýšů jsou plazivky (Harpacticoida)."
    ],
    img: "../images/staff/omesova.jpg",
    phoneNumber: "549 49 8567",
    address: "A07/007",
    email: "marie.zhai@yahoo.com",
    is: "https://is.muni.cz/auth/osoba/11978"
  },
  {
    id: "syrovatka",
    name: "Mgr. Vít Syrovátka, Ph.D.",
    position: "Akademický pracovník",
    research: [""],
    img: "../images/staff/nophoto.png",
    phoneNumber: "549 49 8566",
    address: "A07/007",
    email: "syrovat@sci.muni.cz",
    is: "https://is.muni.cz/auth/osoba/43336"
  },
  {
    id: "sychra",
    name: "Mgr. Jan Sychra, Ph.D.",
    position: "Akademický pracovník",
    research: [
      "Jan Sychra je studentem prezenční formy doktorského studijního programu biologie v oboru hydrobiologie. Během magisterského studia se zabýval výzkumem hnízdní biologie potápek (Podicipediformes) a jejich potravní nabídkou na rybnících. Diplomovou práci na toto téma obhájil v roce 2004. Z tohoto období vyplynulo jeho zaměření na studium rybničního ekosystému v širších souvislostech. Kromě výzkumu vodních ptáků se to týká především vodních bezobratlých živočichů rybničního litorálu, kteří žijí v asociaci s vodními makrofyty (hlavně Hirudinea, Coleoptera a Heteroptera). Tomuto tématu je věnována zpracovávaná disertační práce."
    ],
    img: "../images/staff/sychra.jpg",
    phoneNumber: "549 49 8564",
    address: "A07/007",
    email: "honzas@mail.muni.cz",
    is: "https://is.muni.cz/auth/osoba/honzas"
  },
  {
    id: "paril",
    name: "RNDr. Petr Pařil, Ph.D.",
    position: "Odborný pracovník",
    research: [""],
    img: "../images/staff/paril.jpg",
    phoneNumber: "549 49 8563",
    address: "A07/007",
    email: "paril@sci.muni.cz",
    is: "https://is.muni.cz/auth/osoba/70751"
  },
  {
    id: "sorfova",
    name: "Mgr. Vanda Šorfová, Ph.D.",
    position: "Odborný pracovník",
    research: [""],
    img: "../images/staff/sorfova.jpg",
    phoneNumber: "549 49 8577",
    address: "A07/007",
    email: "vanda.sorfova@mail.muni.cz",
    is: "https://is.muni.cz/auth/osoba/222709"
  },
  {
    id: "polaskova",
    name: "Mgr. Vendula Polášková, Ph.D.",
    position: "Odborný pracovník",
    research: [""],
    img: "../images/staff/polaskova.jpg",
    phoneNumber: "549 49 8577",
    address: "A07/007",
    email: "106044@mail.muni.cz",
    is: "https://is.muni.cz/auth/osoba/106044"
  }
];

module.exports = staffData;
