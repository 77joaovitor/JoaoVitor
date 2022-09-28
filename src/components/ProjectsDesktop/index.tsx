import { BodyProjects } from "./style";
import { GoDeviceMobile, GoDeviceDesktop } from "react-icons/go";
import data from "../../Data";

const ProjectsDesktop = () => {
  return (
    <BodyProjects id="Project">
      {data.map((elem, index) => (
        <li className="project" key={index}>
          <div id="imageProject">
            <div id="deviceMobile">
              <GoDeviceMobile size={68} />
              <img id="imgDeviceMobile" src={elem.img} alt="devLov" />
            </div>
            <div id="deviceDesktop">
              <GoDeviceDesktop size={150} />
              <img id="imgDeviceMobile" src={elem.img} alt="devLov" />
            </div>
          </div>
          <div className="description">
            <span>{elem.title}</span>
            <p>{elem.description}</p>
          </div>
          <div className="buttonGitAndProject">
            <a className="buttonProject" href={elem.siteLink} target="blanc">
              Ver Projeto
            </a>
            <a href={elem.gitLink} target="blanc">
              Repositório
            </a>
          </div>
        </li>
      ))}
    </BodyProjects>
  );
};

export default ProjectsDesktop;
