// dati della linea smorzata — unica fonte per card e render
export const COLORWAYS = [
  { nome: "crema", hex: "#ece3d0" },
  { nome: "verde", hex: "#1f3a2c" },
  { nome: "terra", hex: "#b5472a" },
];

export const LINEA = [
  {
    nome: "otto di sera",
    tipo: "quarter-zip pesante · tinta unita · ricamo sul petto",
    desc: "da mettere dopo la partita, dopo la doccia. collo alto, zip fino al petto.",
    fallback: "#ece3d0",
    shots: [
      {
        src: "assets/render/otto-di-sera-1.jpg",
        alt: "otto di sera, colorway crema",
      },
      {
        src: "assets/render/otto-di-sera-2.jpg",
        alt: "otto di sera, colorway terra",
      },
    ],
  },
  {
    nome: "cancello",
    tipo: "felpa con cappuccio · tinta unita · ricamo sul petto",
    desc: "da sudati, dritti verso casa. il cancello del club, indosso.",
    fallback: "#1f3a2c",
    shots: [
      {
        src: "assets/render/cancello-1.jpg",
        alt: "cancello, colorway verde",
      },
      {
        src: "assets/render/cancello-3.jpg",
        alt: "cancello, colorway crema",
      },
      {
        src: "assets/render/cancello-4.jpg",
        alt: "cancello, colorway terra",
      },
    ],
  },
  {
    nome: "dal campo",
    tipo: "t-shirt · tre stampe · simbolo ricamato sull'orlo",
    desc: "il quadrato ricamato in basso a sinistra. la stampa fa il resto.",
    fallback: "#1f3a2c",
    stampe: "terra che macchia · cemento spaccato · la riga",
    shots: [
      {
        src: "assets/render/cemento-spaccato-1.JPG",
        alt: "cemento spaccato",
      },
      { src: "assets/render/la-riga-1.JPG", alt: "la riga" },
    ],
  },
];
