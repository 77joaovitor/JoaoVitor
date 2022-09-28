import Header from "../../components/Header/Index";
import Projects from "../../components/Projects";
import ProjectsDesktop from "../../components/ProjectsDesktop";
import { BodyHomePage } from "./style";
import background2 from "../../assets/SL-043021-42650-28.jpg";
import AboutMeContent from "../../components/AboutMe";
import FooterComponent from "../../components/Footer";

const HomePage = () => {
  const scrool = (number: any) => (event: any) => {
    event.preventDefault();
    window.scroll({
      top: number,
      behavior: "smooth",
    });
  };
  return (
    <BodyHomePage>
      <div className="backgrown">
        <img id="background2" src={background2} alt="" />
        <Header />
        <main>
          <div className="mainHome">
            <h1 className="mainAboutMe">
              Olá meu nome é João Vitor Henrique, Desenvolvedor Full-Stack,
              estudante na Kenzie Academy Brasil
            </h1>
            <button id="buttonGet" onClick={scrool(1300)}>
              Saiba mais
            </button>
          </div>
          <h1 className="subTitle">Projetos</h1>
          <div id="projectMobile">
            <Projects />
          </div>
          <div id="projectDesktop">
            <ProjectsDesktop />
          </div>
          <div id="buttonSeePF"></div>
          <h1 className="subTitle">Sobre Mim</h1>
          <AboutMeContent />
        </main>
        <FooterComponent />
      </div>
    </BodyHomePage>
  );
};

export default HomePage;
