import styled, { css } from "styled-components";

const buttonstyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  border: ${({ bgColor }) => (bgColor ? "none" : "3px solid black")};
  font-weight: bold;
  color: ${({ txtColor }) => txtColor || "black"};
  background-color: ${({ bgColor }) => bgColor || "white"};
  ${({ inverted }) =>
    inverted
      ? `
  &{
    opacity: 0.5;    
    border: none;
    background-color: rgba(0, 0, 0, 0.5);; 
    color:white;
  }
    `
      : ""}
  &:hover {
    background-color: ${({ inverted }) => (inverted ? "white" : "black")};
    color: ${({ inverted }) => (inverted ? "black" : "white")};
    cursor: pointer;
  }
`;

export const RoundedButtom = styled.div`
  ${buttonstyles}
  border-radius: 50px;
`;

export const RectangleButton = styled.div`
  ${buttonstyles}
`;
