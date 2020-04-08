import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  justify-content: space-between;
`;

export const Info = styled.div`
  height: 100%;
  padding: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
`;

export const Title = styled.h2`
  text-align: center;
  color: black;
  padding: 0 10px;
  background: white;
`;
export const TextContainer = styled.div`
  display: flex;
  padding: 20px 60px;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 20px;
  text-align: justify;
  opacity: 0.7;
  color: white;
`;

export const ButtomContainer = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImageContainer = styled.div`
  height: 100%;

  &:hover {
    & > div:last-child {
      display: flex;
    }
  }
  & > div:last-child {
    height: 100%;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -100%;
    opacity: 0.9;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 500;

    & > h2 {
      position: relative;
      color: white;
      opacity: 0.9;
    }
  }
`;
