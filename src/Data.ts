import imageDesktop from "./assets/Captura de Tela 2022-09-26 às 20.35.09.png";
import imageKenzieHub from "./assets/Captura de Tela 2022-09-26 às 22.21.19.png";

export interface IData {
  img: string;
  description: string;
  siteLink: string;
  title: string;
  gitLink: string;
}

const data: IData[] = [
  {
    img: imageDesktop,
    title: "DevLov",
    siteLink: "https://lnkd.in/dRhHFXKd",
    description:
      "Projeto criado em grupo, para finalizar o 3 modulo do curso da Kenzie Academy.",
    gitLink: "https://github.com/grupo8-m3-alex/dev-lov",
  },
  {
    img: imageKenzieHub,
    title: "Kenzie Hub",
    siteLink: "https://kenzie-hub-peoject.vercel.app/",
    description:
      "Projeto criado em grupo, para finalizar o 3 modulo do curso da Kenzie Academy.",
    gitLink: "https://github.com/grupo8-m3-alex/dev-lov",
  },
  {
    img: imageDesktop,
    title: "Hamburgueria Kenzie",
    siteLink:
      "https://react-entrega-s1-hamburgueria-da-kenzie-77joaovitor.vercel.app/",
    description:
      "Projeto criado em grupo, para finalizar o 3 modulo do curso da Kenzie Academy.",
    gitLink: "https://github.com/grupo8-m3-alex/dev-lov",
  },
  {
    img: imageKenzieHub,
    title: "imageKenzieHub",
    siteLink:
      " https://kenzie-academy-brasil-developers.github.io/m2-capstone-kenzie-habits-felipemotavieira/",
    description:
      "Projeto criado em grupo, para finalizar o 3 modulo do curso da Kenzie Academy.",
    gitLink: "https://github.com/grupo8-m3-alex/dev-lov",
  },
];

export default data;
