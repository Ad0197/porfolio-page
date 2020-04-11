import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const HeaderContainer = styled.div`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px;
  overflow: hidden;
`;

export const LogoImg = styled(Logo)`
  height: 45px;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const LogoContainer = styled.div`
  height: 100%;
  min-width: 40px;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
