import React, { useContext } from "react";

import { CardContainer } from "./card.styles";
import ColorsContext from "../../context/color/color.context";

const Card = ({ children, bgColor }) => {
  const colors = useContext(ColorsContext);
  return <CardContainer color={colors[bgColor]}>{children}</CardContainer>;
};

export default Card;
