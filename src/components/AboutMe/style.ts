import styled from "styled-components";

export const ContainerAboutMe = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .imageJoaoVitor {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 4px;
  }

  > p {
    width: 100%;
    margin-top: 1rem;
    font-size: 1rem;
    font-family: "Inter";
    text-align: justify;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: 20px;
    background-color: #e6e6e6;
  }

  @media (min-width: 769px) {
    .imageJoaoVitor {
    }
  }
`;
