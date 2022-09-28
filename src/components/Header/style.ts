import styled, { css } from "styled-components";

interface IPropsHeader {
  isLeave: boolean;
  classNameHeader: boolean;
}

export const StyleHeader = styled.header<IPropsHeader>`
  @keyframes animationModalMenu {
    0% {
      transform: translateX(200px);
    }

    80% {
      transform: translateX(-10px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  @keyframes animationModalMenuOut {
    0% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(200px);
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 100%;

  margin: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  ${({ classNameHeader }) =>
    classNameHeader
      ? css`
          box-shadow: 2px 2px 2px black;
          background: #4400ff;
          height: 4rem;
        `
      : css`
          height: 5rem;
        `};
  z-index: 2;
  transition: 0.5s;

  .menu-icon {
    position: absolute;
    right: 0px;
    color: white;
    margin-right: 1rem;
    transition: 0.5s;
    ${({ classNameHeader }) =>
      classNameHeader
        ? css`
        top 12px
        `
        : css`
            top: 15px;
          `};
  }

  .contact {
    display: none;
    > a {
      color: white;
      width: 2rem;
      > svg {
        margin-left: 30px;
        color: white;
        font-size: 1.2rem;
        opacity: 0.8;
        cursor: pointer;
        &:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
    margin-right: 2rem;
  }
  .menu {
    gap: 20px;
    display: none;
  }

  .menu > a {
    background-color: transparent;
    text-decoration: none;
    color: white;
    border: none;
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    &:hover {
      opacity: 1;
      border-bottom: 2px solid yellow;
    }
  }

  @media (min-width: 769px) {
    .menu-icon {
      display: none;
    }
    .menu {
      display: flex;
    }

    .contact {
      display: flex;
    }
  }
`;
