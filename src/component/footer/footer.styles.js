import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding: 20px 3.25vw 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2e3192;
  color: white;
`;

export const InfoContainer = styled.div`
  align-items: flex-start;
  justify-content: center;
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10vw;
  &:last-child {
    margin-right: none;
  }
`;

export const InfoLabel = styled.a`
  text-decoration: none;
  padding: 2.5px 0px;
  color: white;
  opacity: 0.7;
`;

export const Title = styled.h3`
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
`;

export const Copyright = styled.h3`
  margin-top: 20px;
  font-size: 18px;
  font-weight: normal;
`;
