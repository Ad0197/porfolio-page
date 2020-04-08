import React, { useContext } from "react";
import CustomButton from "../custom-button/custom-button.component";
import ColorsContext from "../../context/color/color.context";

import {
  ServiceContainer,
  Image,
  ButtomContainer,
  Text,
  Info,
  Title,
  TextContainer,
  ImageContainer,
} from "./service-preview.styles";

const ServicePreview = ({ displayName, description, imgUrl, inverted }) => {
  const colors = useContext(ColorsContext);
  return (
    <ServiceContainer inverted={inverted} bgColor={colors.fourthBg}>
      <ImageContainer>
        <Image src={imgUrl} />
        <div>
          <h2>{displayName}</h2>
        </div>
      </ImageContainer>
      <Info>
        <TextContainer>
          <Title>{displayName}</Title>
          <Text>{description}</Text>
        </TextContainer>
        <ButtomContainer>
          <CustomButton rectangle txtColor="white" bgColor="primaryBg">
            Ver Proyectos
          </CustomButton>
          <CustomButton rectangle txtColor="white" bgColor="secondaryBg">
            Me interesa!
          </CustomButton>
        </ButtomContainer>
      </Info>
    </ServiceContainer>
  );
};

export default ServicePreview;
