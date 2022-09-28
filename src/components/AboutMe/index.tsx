import { ContainerAboutMe } from "./style";
import joaovitor from "../../assets/joaovitor.jpeg";

const AboutMeContent = () => {
  return (
    <ContainerAboutMe>
      <img className="imageJoaoVitor" src={joaovitor} alt="João Vitor" />
      <p>
        A 6 meses atás resolvi mudar minha área de atuação, da música para a
        programação, então resolvi iniciar meus estudos na Kenzie Academy
        Brasil. Está sendo muito desafiador para eu, sair do "zero" não
        conhecendo nada sobre o assunto, está sendo um ano de muito desafio e
        aprendizado. Nos 6 primeiros meses do curso, aprendi algumas das
        tecnologias mais ultilizadas no mercado como, JavaScript, CSS, HTML,
        ReactJS, TypeScript e NodeJS.{" "}
      </p>
    </ContainerAboutMe>
  );
};

export default AboutMeContent;
