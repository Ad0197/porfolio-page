import { createContext } from "react";

export const COLOR_NORMAL_MODE = {
  primaryBg: "#0A46BF",
  secondaryBg: "#0A3EA6",
  thirthBg: "#000540",
  fourthBg: "#021140",
  fivethBg: "#021859",
};

export const COLORS_DART_MODE = {};

const ColorsCurrent = COLOR_NORMAL_MODE;

const ColorsContext = createContext(ColorsCurrent);

export default ColorsContext;
