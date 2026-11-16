// Facts for the homepage. Source of truth: veon/client.json (fact ids in comments). Nothing here is invented.

export const clinic = {
  name: "IrDent",
  // C-B001
  phoneDisplay: "066 298 69 03",
  phoneFull: "+38 066 298 69 03",
  phoneHref: "tel:+380662986903",
  hours: "Пн–Пт 09:00–18:00",
  city: "Ужгород",
  street: "вул. Заньковецької, 48а",
  addressFull: "м. Ужгород, вул. Заньковецької, 48а",
  // Route to the address on Google Maps (company.contacts.addresses)
  routeHref: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("вул. Заньковецької, 48а, Ужгород, Україна")}`,
  // socials[] (confirmed)
  instagram: "https://www.instagram.com/irdent_uzh/",
  facebook: "https://www.facebook.com/irdent.com.ua",
  // C-B017 (shown as text: only the client's own channels are linked in the demo)
  rating: { value: "4,6", count: 86, source: "top20.ua" },
} as const;

export interface PriceRow { name: string; price: string; }
export interface Direction { id: string; title: string; from: string; scope: string; rows: PriceRow[]; }

// C-B007 – C-B010, C-B006 (prices from the published price list, C-B011)
export const directions: Direction[] = [
  {
    id: "terapiya",
    title: "Терапія",
    from: "від 1 950 грн",
    scope: "Лікування карієсу, реставрація зубів",
    rows: [
      { name: "Лікування карієсу з реставрацією, 1 площина", price: "1 950 грн" },
      { name: "Лікування карієсу з реставрацією, 2 площини", price: "2 250 грн" },
      { name: "Лікування карієсу з реставрацією, 3 площини", price: "2 600 грн" },
    ],
  },
  {
    id: "implantatsiya",
    title: "Імплантація",
    from: "від 14 000 грн",
    scope: "Імплантати MegaGen AnyOne, MegaGen AnyRidge, Straumann; коронка на імплантаті",
    rows: [
      { name: "Імплантат MegaGen AnyOne", price: "14 000 грн" },
      { name: "Імплантат MegaGen AnyRidge", price: "22 000 грн" },
      { name: "Імплантат Straumann", price: "37 000 грн" },
      { name: "Коронка на імплантаті", price: "13 000–14 000 грн" },
    ],
  },
  {
    id: "ortopediya",
    title: "Ортопедія й протезування",
    from: "від 9 000 грн",
    scope: "Коронки цирконій і E.MAX, вініри; знімні протези: бюгельні, нейлонові, акрилові",
    rows: [
      { name: "Коронка цирконій + кераміка", price: "9 000 грн" },
      { name: "Коронка E.MAX", price: "12 000 грн" },
      { name: "Вінір", price: "12 000 грн" },
    ],
  },
  {
    id: "ortodontiya",
    title: "Ортодонтія",
    from: "від 27 000 грн",
    scope: "Брекети EmPower, зокрема керамічні; елайнери Cristaline; пластинки, ретейнери, міофункціональні трейнери",
    rows: [
      { name: "Брекет-система EmPower, самолігатурна", price: "27 000 грн" },
      { name: "Брекет-система EmPower, керамічна", price: "35 000 грн" },
      { name: "Елайнери Cristaline", price: "3 000 євро" },
      { name: "Перша консультація ортодонта", price: "800 грн" },
      { name: "Пластинки, ретейнери, міофункціональні трейнери", price: "ціна в повному прайсі" },
    ],
  },
  {
    id: "hirurgiya",
    title: "Хірургія",
    from: "від 1 500 грн",
    scope: "Видалення зубів, зокрема зубів мудрості",
    rows: [{ name: "Видалення зуба мудрості", price: "1 500 грн" }],
  },
  {
    id: "dytyacha",
    title: "Дитяча стоматологія",
    from: "від 450 грн",
    scope: "Лікування й протезування молочних зубів, герметизація фісур, навчання чищенню",
    rows: [
      { name: "Дитяча консультація, до 10 років", price: "450 грн" },
      { name: "Герметизація фісур", price: "ціна в повному прайсі" },
      { name: "Лікування й протезування молочних зубів", price: "ціна в повному прайсі" },
      { name: "Навчання чищенню зубів", price: "ціна в повному прайсі" },
    ],
  },
];

// company.business_lines without a price on the homepage
export const alsoDirections = [
  "Ендодонтія: лікування каналів під мікроскопом",
  "Пародонтологія: лікування ясен",
  "Гігієна: професійна чистка, відбілювання",
  "3D-знімок і цифрова діагностика",
];

// C-B006
export const firstVisit = [
  { price: "500", label: "Консультація й огляд" },
  { price: "500", label: "Онлайн-консультація" },
  { price: "450", label: "Дитяча консультація, до 10 років" },
  { price: "800", label: "Перша консультація ортодонта" },
] as const;

// C-B004, C-B005
export const facts = [
  { figure: "2–3 мкЗв", text: "доза прицільного знімка на цифровому візіографі" },
  { figure: "24 с", text: "інтраоральний 3D-сканер знімає один відбиток замість зліпка" },
  { figure: "Клас B", text: "автоклав: інструменти стерилізують у крафт-пакетах" },
  { figure: "Мікроскоп", text: "лікування каналів під збільшенням" },
  { figure: "3D-моделі", text: "друковані моделі щелеп, є в прайсі клініки" },
] as const;

// C-B003
export const doctors = {
  lead: {
    name: "Трегубова Ірина Олексіївна",
    role: "Засновниця й головний лікар, 20 років досвіду",
    spec: "Терапевт, ендодонтист, ортопед, хірург",
  },
  others: [
    { key: "beznoskov", name: "Безносков Ярослав Олегович", role: "Хірург-імплантолог" },
    { key: "mashuk", name: "Машук Корнелія Юріївна", role: "Лікар-стоматолог терапевт" },
  ],
} as const;

export const futureNote = "Розділ у розробці";
