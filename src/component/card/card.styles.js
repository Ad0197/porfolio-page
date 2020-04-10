import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${({ color }) => color};
  padding: 40px;
  margin-right: 20px;
  border-radius: 40px;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.4);
  &::last-child {
    margin-right: none;
  }
`;
