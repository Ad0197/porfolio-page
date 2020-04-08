import React from "react";
import { useContext } from "react";
import { ServiceContext } from "../../context/service-context/service.context";

import {
  FooterContainer,
  InfoContainer,
  Info,
  Title,
  InfoLabel,
  Copyright,
} from "./footer.styles";
import ColorsContext from "../../context/color/color.context";
const Footer = () => {
  const { servicesOptions, emails, contacts } = useContext(ServiceContext);
  const colors = useContext(ColorsContext);
  return (
    <FooterContainer bgColor={colors.thirthBg}>
      <InfoContainer>
        <Info>
          <Title> Servicios </Title>
          {servicesOptions.map(({ id, displayName, route }) => (
            <InfoLabel key={id} href={route}>
              {displayName}
            </InfoLabel>
          ))}
        </Info>
        <Info>
          <Title> Correos </Title>
          {emails.map((email) => (
            <InfoLabel key={email} href={`/contact/emails/${email}`}>
              {email}
            </InfoLabel>
          ))}
        </Info>
        <Info>
          <Title> Contactos </Title>
          {contacts.map(({ id, displayName, url }) => (
            <InfoLabel key={id} href={url}>
              {displayName}
            </InfoLabel>
          ))}
        </Info>
      </InfoContainer>
      <Copyright> Adrison Gomez &copy; Right Reserved 2020</Copyright>
    </FooterContainer>
  );
};

export default Footer;
