import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: absolute;
  right: 10px;
  top: 65px;
  width: 90%;
  height: 13rem;
  background-color: #a200ff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.2);
  /* animation: animationModalMenu 0.5s; */
  z-index: 2;
  > button {
    color: black;
    font-family: "Inter";
    background-color: transparent;
    border: none;
    font-weight: 400;
    border-radius: 4px;
    width: 100%;
    margin: auto;
    height: 1.5rem;
    text-align: start;
  }
`;
