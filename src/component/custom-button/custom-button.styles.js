import styled from "styled-components";

export const RoundedButtom = styled.div`
  padding: 20px 30px;
  border: ${({ bgColor }) => (bgColor ? "none" : "3px solid black")};
  font-weight: bold;
  color: ${({ txtColor }) => txtColor || "black"};
  background-color: ${({ bgColor }) => bgColor || "white"};
  border-radius: 50px;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

export const RectangleButton = styled.div`
  padding: 20px 30px;
  font-size: 25px;
  border: ${({ bgColor }) => (bgColor ? "none" : "3px solid black")};
  font-weight: bold;
  color: ${({ txtColor }) => txtColor || "black"};
  background-color: ${({ bgColor }) => bgColor || "white"};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;
