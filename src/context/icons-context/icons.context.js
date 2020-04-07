import desktop from "../../assets/icons/desktop.png";
import mobile from "../../assets/icons/mobile.png";
import tabletDesign from "../../assets/icons/tablet-design.png";
import HamburguerMenu from "../../assets/icons/hamburger-menu.png";
import { createContext } from "react";

const ICON_DATA = {
  desktop,
  mobile,
  tabletDesign,
  HamburguerMenu,
};

const IconContext = createContext(ICON_DATA);

export default IconContext