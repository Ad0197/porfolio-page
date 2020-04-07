import React, { useContext } from "react";
import IconContext from "../../context/icons-context/icons.context";

import {
  Icon,
  ServiceItemContainer,
  LabelService,
} from "./service-item.styles";
import CustomButton from "../custom-button/custom-button.component";

const ServiceItem = ({ service: { displayName, iconRef } }) => {
  const icons = useContext(IconContext);
  return (
    <ServiceItemContainer>
      <Icon iconRef={icons[iconRef]} />
      <LabelService>{displayName}</LabelService>
      <CustomButton>Ver Proyectos</CustomButton>
    </ServiceItemContainer>
  );
};
export default ServiceItem;
