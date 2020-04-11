import React, { useContext } from "react";

import { ServiceContext } from "../../context/service-context/service.context";
import ColorsContext from "../../context/color/color.context";

import ServicePreview from "../../component/service-preview/service-preview.component";

import { Container } from "./service.styles";

const ServicePage = () => {
  const { servicesOptions } = useContext(ServiceContext);
  const colors = useContext(ColorsContext);
  return (
    <Container style={{ background: "none" }}>
      {servicesOptions.map((service) => (
        <ServicePreview key={service.id} {...service} />
      ))}
    </Container>
  );
};

export default ServicePage;
