import styled from "styled-components";

export const BodyHomePage = styled.div`
  @keyframes identifier {
    0% {
      transform: scaleX(1.2);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(1.2);
    }
  }
  background-color: #ffffff;
  width: 100vw;

  .backgrown {
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 0;
    background: linear-gradient(180deg, #4400ff, blue);
  }

  #background2 {
    position: absolute;
    width: 100vw;
    opacity: 0.1;
    background-attachment: fixed;
    height: 70vh;
    object-fit: cover;
  }

  .mainAboutMe {
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: "Inter";
    width: 80%;
    margin: auto;
    margin-top: 3rem;
    text-align: center;
    gap: 4px;
    line-height: 1.5;
    z-index: 1;
  }

  .mainHome {
    width: 100%;
    height: 68vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #buttonGet {
    margin-bottom: 3rem;
    background-image: linear-gradient(to bottom, yellow, #9ba507);
    width: 10rem;
    border: none;
    height: 3.5rem;
    /* margin: auto; */
    z-index: 1;
    border-radius: 40px;
    font-size: 1rem;
    font-family: "Inter";
    font-weight: 500;
    box-shadow: 2px 2px 2px black;
    color: #4c4c4c;
  }

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 2rem;
  }

  #projectDesktop {
    display: none;
  }

  #buttonSeePF {
    position: absolute;
    top: 650px;
    left: 100px;
    height: 150vh;
  }

  .subTitle {
    margin: auto;
    /* margin-top: 4rem; */
    text-align: center;
    gap: 4px;
    color: gray;
    font-size: 1.5rem;
    font-family: "Inter";
    z-index: 1;
    width: 90%;
    border-radius: 4px;
    /* background-color: #4400ff; */
    box-shadow: 2px 2px 2px 4px #4400ff;
    margin-bottom: 1rem;
  }

  @media (min-width: 425px) {
    main {
      padding-top: 4.3rem;
    }
  }

  @media (min-width: 769px) {
    .backgrown {
      border-radius: 0px 0px 2000px 2000px / 0px 0px 53px 53px;
      width: 100vw;
      background-attachment: fixed;
    }
    #projectMobile {
      display: none;
    }
    #projectDesktop {
      display: flex;
    }
    .project {
      margin-top: 4rem;
    }
    #background2 {
      position: absolute;
      width: 100vw;
      opacity: 0.1;
      border-radius: 0px 0px 2000px 2000px / 0px 0px 53px 53px;
      background-attachment: fixed;
      height: 70vh;
      object-fit: cover;
    }
    #buttonSeePF {
      position: absolute;
      top: 750px;
    }
  }
`;
