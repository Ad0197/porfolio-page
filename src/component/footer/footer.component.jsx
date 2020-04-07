import React from "react";
import { useContext } from "react";
import { ServiceContext } from "../../context/servicesOptions/serivice.context";

import {
  FooterContainer,
  InfoContainer,
  Info,
  Title,
  InfoLabel,
  Copyright,
} from "./footer.styles";
const Footer = () => {
  const { servicesOptions, emails, contacts } = useContext(ServiceContext);
  return (
    <FooterContainer>
      <InfoContainer>
        <Info>
          <Title> Servicios </Title>
          {servicesOptions.map(({ displayName, route }) => (
            <InfoLabel href={route}>{displayName}</InfoLabel>
          ))}
        </Info>
        <Info>
          <Title> Correos </Title>
          {emails.map((email) => (
            <InfoLabel href={`/contact/emails/${email}`}>{email}</InfoLabel>
          ))}
        </Info>
        <Info>
          <Title> Contactos </Title>
          {contacts.map(({ displayName, url }) => (
            <InfoLabel href={url}>{displayName}</InfoLabel>
          ))}
        </Info>
      </InfoContainer>
      <Copyright> Adrison Gomez &copy; Right Reserved 2020</Copyright>
    </FooterContainer>
  );
};

export default Footer;
