import image1 from "./assets/artists/Image-1.png";
import image5 from "./assets/artists/Image-1.png";
import image2 from "./assets/artists/Image-2.png";
import image6 from "./assets/artists/Image-2.png";
import image3 from "./assets/artists/Image-3.png";
import image7 from "./assets/artists/Image-3.png";
import image8 from "./assets/artists/Image-3.png";
import image4 from "./assets/artists/Image-4.png";

import equipment1 from "./assets/equipment/equipment-01.jpg";
import equipment2 from "./assets/equipment/equipment-02.jpg";
import equipment3 from "./assets/equipment/equipment-03.jpg";
import equipment4 from "./assets/equipment/equipment-04.jpg";

export const artistsData = [
  {
    id: 1,
    name: "Mia Anderson",
    label: "Pop Artist",
    image: image1,
    shortDescription: "Популярная поп-звезда.",
    fullDescription: "Миа Андерсон - одна из ведущих поп-артистов.",
    category: "dj",
    price: 8000,
  },
  {
    id: 2,
    name: "Benjamin Smith",
    label: "Country Artist",
    image: image2,
    shortDescription: "Известный кантри-исполнитель.",
    fullDescription: "Бенджамин Смит - легенда кантри-музыки.",
    category: "mc",
    price: 9000,
  },
  {
    id: 3,
    name: "Charlotte Parker",
    label: "Rap Artist",
    image: image3,
    shortDescription: "Топовый рэп-исполнитель.",
    fullDescription: "Шарлотта Паркер - звезда рэп-сцены.",
    category: "artist",
    price: 10000,
  },
  {
    id: 4,
    name: "Matthew Clark",
    label: "Metal Artist",
    image: image4,
    shortDescription: "Звезда метал-сцены.",
    fullDescription: "Мэтью Кларк - легенда метал-музыки.",
    category: "dj",
    price: 7000,
  },
  {
    id: 5,
    name: "Elena Rossi",
    label: "Classical Soprano",
    image: image5,
    shortDescription: "Известная оперная певица.",
    fullDescription: "Елена Росси - оперная певица, завоевавшая мировое признание.",
    category: "artist",
    price: 12000,
  },
  {
    id: 6,
    name: "Liam Scott",
    label: "Rock Guitarist",
    image: image6,
    shortDescription: "Легендарный рок-гитарист.",
    fullDescription: "Лиам Скотт - виртуозный рок-гитарист с многолетним опытом.",
    category: "artist",
    price: 9500,
  },
  {
    id: 7,
    name: "Natalie Johnson",
    label: "Jazz Vocalist",
    image: image7,
    shortDescription: "Популярная джазовая певица.",
    fullDescription:
      "Натали Джонсон - одна из самых талантливых джазовых вокалисток нашего времени.",
    category: "mc",
    price: 8500,
  },
  {
    id: 8,
    name: "Oliver Stone",
    label: "Electronic DJ",
    image: image8,
    shortDescription: "Звезда электронной музыки.",
    fullDescription: "Оливер Стоун - известный диджей, работающий в жанре электронной музыки.",
    category: "dj",
    price: 6500,
  },
];

export const serviceData = [
  {
    id: 1,
    title: "Свадьба",
    price: 50,
    description:
      "Свадьба – это особенный день, который должен запомниться на всю жизнь. Мы предлагаем организацию свадебных торжеств любой сложности. В стоимость входят услуги по планированию, украшение зала, музыкальное сопровождение и многое другое.",
    benefits: [
      "Полная организация мероприятия",
      "Декорации и цветы",
      "Фотосессия и видеосъемка",
      "Кейтеринг",
    ],
  },
  {
    id: 2,
    title: "Корпоратив",
    price: 90,
    description:
      "Устраиваете корпоратив? Мы поможем вам организовать незабываемое событие для вашей команды. Веселые конкурсы, развлечения и тематические вечеринки – мы всё предусмотрим.",
    benefits: [
      "Тематические мероприятия",
      "Аренда площадки",
      "Кейтеринг и напитки",
      "Призы и сувениры для участников",
    ],
  },
  {
    id: 3,
    title: "День рождения",
    price: 50,
    description:
      "Мы организуем ваш день рождения на высшем уровне, предложив самые интересные развлечения, вкусную еду и весёлую программу.",
    benefits: [
      "Организация мероприятия под ключ",
      "Аренда площадки и музыкальное сопровождение",
      "Аниматоры и ведущие",
      "Фото- и видеосъемка",
    ],
  },
  {
    id: 4,
    title: "Юбилей",
    price: 80,
    description:
      "Отметьте свой юбилей вместе с нами! Мы позаботимся о каждом аспекте вашего праздника – от концепции до реализации.",
    benefits: [
      "Индивидуальный подход к каждому клиенту",
      "Праздничное оформление",
      "Профессиональные ведущие и артисты",
      "Кейтеринг и развлекательная программа",
    ],
  },
  {
    id: 5,
    title: "Вечеринка",
    price: 60,
    description:
      "Устройте вечеринку по высшему разряду. А мы сделаем этот вечер незабываемым и полным впечатлений!",
    benefits: [
      "Уникальный формат мероприятия",
      "Топовые артисты и ведущие",
      "Профессиональная аппаратура",
      "Большой опыт организаторов",
    ],
  },
];

export const equipmentData = [
  {
    id: 1,
    title: "Аренда контроллера Pioneer XDJ-RX3",
    price: 6000,
    description:
      "2-канальная DJ-станция серии XDJ-RX3, обеспечивающая широкий спектр музыкальных эффектов и инструментов.",
    image: equipment1,
  },
  {
    id: 2,
    title: "Аренда DJ-Комплекта Pioneer Limited Platinum Edition",
    price: 8000,
    description:
      "Платиновые хромированные корпуса и белые светодиодные огни - добавляют больше шика и внимания к диджею стоящиму за пультом. Идеально подходят для корпоративных мероприятий, презентаций или фото и видео съемок. В комплект входят: - две дэки Pioneer CDJ-2000 NXS-M - микшерный пульт Pioneer DJM-900 NEXUS - необходимая коммутация",
    image: equipment2,
  },
  {
    id: 3,
    title: "Аренда мобильного DJ-комплекта на акумуляторах",
    price: 9500,
    description:
      "Мы предлагаем для аренды уникальный DJ-комплект, который позволит отыграть DJ-сэт в любых условиях, любом месте и даже без использования электричества.",
    image: equipment3,
  },
  {
    id: 4,
    title: "Аренда наушников для DJ Audio-Technica ATH-M40X",
    price: 500,
    description: `
- Диапазон воспроизводимых частот: 15 – 24 000 Гц
- Импенданс 35 Ом
- Чувствительность 98 дБ/мВт
- Максимальная мощность 1,6 Вт
- Вес 240 г
- Диаметр мембраны 40 мм
- кабель 3м с разъемом minijack 3.5мм c переходником на 6,3 мм`,
    image: equipment4,
  },
];
