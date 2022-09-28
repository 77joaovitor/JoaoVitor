import { StyleHeader } from "./style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import MenuHeader from "../MenuHeader";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [modalMenu, setModalMenu] = useState(false);
  const [isLeave, setIsLeave] = useState(false);
  const [classNameHeader, setClassNameHeader] = useState(false);

  const setLeave = () => {
    setIsLeave(true);
    setTimeout(() => {
      setIsLeave(false);
    }, 500);
  };

  useEffect(() => {
    const intersectionObserve = new IntersectionObserver((entries) => {
      setClassNameHeader(entries[0].isIntersecting);
    });

    intersectionObserve.observe(document.querySelector<any>("#buttonSeePF"));

    return () => intersectionObserve.disconnect();
  });

  const scrool = (number: any) => (event: any) => {
    event.preventDefault();
    window.scroll({
      top: number,
      behavior: "smooth",
    });
  };

  return (
    <StyleHeader isLeave={isLeave} classNameHeader={classNameHeader}>
      <TiThMenu
        className="menu-icon"
        size={36}
        onClick={() => {
          setLeave();
          setModalMenu(!modalMenu);
        }}
      />
      {modalMenu && <MenuHeader />}
      <div className="menu">
        <a href="#Project" onClick={scrool(0)}>
          Início
        </a>
        <a href="#Project" onClick={scrool(450)}>
          Projetos
        </a>
        <a href="#Project" onClick={scrool(1120)}>
          Habilidades
        </a>
        <a href="#Project" onClick={scrool(1380)}>
          {" "}
          Contato
        </a>
      </div>
      <div className="contact">
        <a
          href="https://github.com/77joaovitor"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joaovitorhenrique/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://wa.me/5531991953568" target="blank">
          <BsWhatsapp />
        </a>
      </div>
    </StyleHeader>
  );
};

export default Header;
