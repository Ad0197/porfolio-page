import styled from "styled-components";
import { Link } from "react-router-dom";

export const Option = styled(Link)`
  padding: 0 20px;
  color: black;
  text-decoration: none;
  font-size: 2vh;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: row;

  &:hover {
    color: white;
    background-color: black;
  }
  &:last-child{
    margin-right: 40px;
  }
`;