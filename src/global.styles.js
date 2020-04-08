import styled, { createGlobalStyle } from "styled-components";
import { Switch } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Montserrat', sans-serif;
}

*{
    box-sizing: border-box;
}      
`;

export const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SwitchContainer = styled(Switch)`
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 55px;
  padding: 5px 30px;
  font-weight: bolder;
`;
