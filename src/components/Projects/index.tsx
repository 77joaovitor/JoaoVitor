import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BodyProjects } from "./style";
import { GoDeviceMobile, GoDeviceDesktop } from "react-icons/go";
import data from "../../Data";
import { useEffect, useState } from "react";

const Projects = () => {
  const [changeProject, setChangeProject] = useState(0);
  const [animation, setAnimation] = useState(false);

  const next = () => {
    setChangeProject((oldNumber) =>
      oldNumber < data.length - 1 ? oldNumber + 1 : 0
    );

    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  };

  useEffect(() => {
    setAnimation(true);
    let timer: any;
    timer = setTimeout(() => {
      setAnimation(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const previus = () => {
    setChangeProject((oldNumber) =>
      oldNumber > 0 ? oldNumber - 1 : oldNumber + data.length - 1
    );
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  };

  return (
    <>
      <BodyProjects animation={animation} id="Project">
        <div className="project">
          <div id="imageProject">
            <div id="deviceMobile">
              <GoDeviceMobile size={68} />
              <img
                id="imgDeviceMobile"
                src={data[changeProject].img}
                alt="devLov"
              />
            </div>
            <div id="deviceDesktop">
              <GoDeviceDesktop size={150} />
              <img
                id="imgDeviceMobile"
                src={data[changeProject].img}
                alt="devLov"
              />
            </div>
          </div>
          <div className="description">
            <span>{data[changeProject].title}</span>
            <p>{data[changeProject].description}</p>
          </div>
          <div className="buttonGitAndProject">
            <a
              className="buttonProject"
              href={data[changeProject].siteLink}
              target="blanc"
            >
              Ver Projeto
            </a>
            <a href={data[changeProject].gitLink} target="blanc">
              Git
            </a>
          </div>
        </div>
        <div>
          <GrFormPrevious size={60} id="prev" onClick={previus} />
        </div>
        <div>
          <GrFormNext size={60} id="next" onClick={next} />
        </div>
      </BodyProjects>
    </>
  );
};

export default Projects;
