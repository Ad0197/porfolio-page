import React, { useContext } from "react";
import { RoundedButtom, RectangleButton } from "./custom-button.styles";
import ColorContext from "../../context/color/color.context";

const CustomButton = ({ children, handle, rectangle, txtColor, bgColor, inverted }) => {
  const Button = rectangle ? RectangleButton : RoundedButtom;
  const color = useContext(ColorContext);
  return (
    <Button onClick={handle} inverted={inverted} txtColor={txtColor} bgColor={color[bgColor]}>
      {children}
    </Button>
  );
};

export default CustomButton;
