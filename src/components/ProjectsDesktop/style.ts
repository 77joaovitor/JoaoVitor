import styled from "styled-components";

export const BodyProjects = styled.ul`
  max-width: 100vw;
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  padding: 4rem;
  gap: 20px;
  height: 40rem;
  overflow: auto;

  > h1 {
    color: white;
    font-size: 1.5rem;
    font-family: "Inter";
    z-index: 1;
    width: 100%;
    background-color: #4400ff;
    border-radius: 1rem;
    box-shadow: 4px 4px 4px #c9c9c9;
    margin-bottom: 1rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 8rem;
    > span {
      font-size: 1.2rem;
      font-family: "Inter";
      font-weight: 600;
      color: #4400ff;
    }
    > p {
      font-size: 1rem;
      font-family: "Inter";
      font-weight: 400;
      text-align: center;
      color: #525252;
    }
  }

  .project {
    width: 18rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    padding-bottom: 2rem;
    margin-bottom: 20px;
    margin-left: 2rem;

    #imageProject {
      display: flex;
      align-items: baseline;
      width: 100%;
      justify-content: center;
      border-radius: 8px 8px 0 0;
      border-bottom: 1px solid #a4a4a4;
    }

    #deviceMobile {
      position: relative;
      margin-bottom: 10px;
      transition: 0.5;
      > img {
        width: 34px;
        position: absolute;
        height: 44px;
        top: 7px;
        left: 17px;
        object-fit: cover;
        transition: 0.5;
        &:hover {
          transform: scale(4);
          top: 0px;
          left: 34px;
          z-index: 3;
        }
      }
    }

    #deviceDesktop {
      position: relative;

      > img {
        width: 132px;
        position: absolute;
        height: 77px;
        object-fit: cover;
        transform: scale(2);
        top: 34px;
        left: -27px;
        box-shadow: 1px 1px 1px 0px #191919;
        transition: 0.5;
      }
    }

    > span {
      font-family: "Inter";
      text-align: center;
      width: 20rem;
      height: 3rem;
      margin: auto;
      margin-top: 1rem;
      color: #4c4c4c;
    }
    > .buttonProject {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      width: 10rem;
      border: 1px solid #4400ff;
      height: 3.5rem;
      margin: auto;
      margin-top: 1.5rem;
      border-radius: 40px;
      font-size: 1rem;
      font-family: "Inter";
      font-weight: 500;
      color: #4c4c4c;
    }
  }
  .buttonGitAndProject {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
      margin: auto;
      margin-top: 1.5rem;
      font-size: 1rem;
      font-family: "Inter";
      font-weight: 500;
      color: #4c4c4c;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      opacity: 0.7;
      &:hover {
        color: #4400ff;
        border-bottom: 2px solid #4400ff;
      }
    }
  }

  #next {
    position: absolute;
    right: 0;
    top: 5rem;
    opacity: 0.5;
    font-size: 4rem;
    &:hover {
      filter: drop-shadow(2px 2px 4px black);
    }
  }
  #prev {
    position: absolute;
    left: 0;
    top: 5.2rem;
    opacity: 0.5;
    font-size: 4rem;
    &:hover {
      filter: drop-shadow(2px 2px 4px black);
    }
  }
  #imgProject {
    width: 80%;
    height: 10rem;
    margin: auto;
    border-radius: 4px;
    color: #4c4c4c;
    &:hover {
      filter: drop-shadow(2px 2px 4px black);
    }
  }

  @media (min-width: 425px) {
    main {
      padding-top: 4.3rem;
    }
  }

  @media (min-width: 769px) {
  }
`;
