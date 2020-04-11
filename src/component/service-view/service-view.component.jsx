import React, { useContext } from "react";
import { ServiceContext } from "../../context/service-context/service.context";
import ServiceItem from "../service-item/service-item.component";
import { Title } from "../../global.styles";
import { ServiceViewContainer, Container } from "./service-view.styles";
const ServiceView = () => {
  const { servicesOptions } = useContext(ServiceContext);
  return (
    <Container>
      <Title>Servicios</Title>
      <ServiceViewContainer>
        {servicesOptions.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </ServiceViewContainer>
    </Container>
  );
};

export default ServiceView;
