import styled from "styled-components";

export const HoverContainer = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  top: -100%;
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

export const ProjectContainer = styled.div`
  width: 100%;
  height: 300px;
  &:hover {
    ${HoverContainer} {
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.9;
`;

export const TextHover = styled.span`
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
  color: #fff;
`;
