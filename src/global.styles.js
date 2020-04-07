import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Montserrat', sans-serif;
}

*{
    box-sizing: border-box;
}      
`;

export const Title = styled.h2`
  font-size: 55px;
  padding: 5px 30px;
  font-weight: bolder;
`;
