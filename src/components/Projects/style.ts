import styled, { css } from "styled-components";

interface IAnimation {
  animation: boolean;
}

export const BodyProjects = styled.div<IAnimation>`
  @keyframes project {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  max-width: 100vw;
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  .project {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${({ animation }) => {
      if (animation) {
        return css`
          animation-name: project;
        `;
      }
    }}
    animation-duration: 1s;
  }

  #imageProject {
    display: flex;
    align-items: baseline;

    #deviceMobile {
      position: relative;
      > img {
        width: 34px;
        position: absolute;
        height: 44px;
        top: 7px;
        left: 17px;
        object-fit: cover;
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
    /* .buttonProject {
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
    } */
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    width: 90%;
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

  .buttonGitAndProject {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      width: 10rem;
      height: 3.5rem;
      margin: auto;
      margin-top: 1.5rem;
      border-radius: 40px;
      font-size: 1rem;
      font-family: "Inter";
      font-weight: 500;
      color: #4c4c4c;
      text-decoration: none;
    }
  }

  #next {
    position: absolute;
    right: -10px;
    top: 10rem;
    opacity: 0.5;
    font-size: 4rem;
    color: #4400ff;
    &:hover {
      filter: drop-shadow(2px 2px 4px black);
    }
  }
  #prev {
    position: absolute;
    left: -15px;
    top: 10.2rem;
    opacity: 0.5;
    font-size: 4rem;
    color: #4400ff;
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
    margin-top: 12rem;
  }
`;
