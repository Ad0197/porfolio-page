import styled from "styled-components";

export const Icon = styled.div`
  width: 220px;
  height: 220px;
  background-size: cover;
  background-image: url(${({ iconRef }) => iconRef});
`;

export const ServiceItemContainer = styled.div`
  height: 485px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-right: 2px solid #999;
  &:last-child{
    border-right: none;
  }
`;

export const LabelService = styled.span`
  font-size: 25px;
  font-weight: bold;
`;
