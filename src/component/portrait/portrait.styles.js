import styled from "styled-components";

export const NameSpan = styled.span`
  color: white;
  font-size: 80px;
  font-weight: 700;
`;

export const OccupationSpan = styled.span`
  color: white;
  font-size: 30px;
  font-weight: 500;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-end;
  right: 5vw;
  top: 350px;
`;

export const PortraitImgContainer = styled.div`
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;
