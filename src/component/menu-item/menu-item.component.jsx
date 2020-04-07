import React from "react";
import {Option} from "./menu-item.styles";

const MenuItem = ({ option: { displayName, route } }) => (
  <Option to={route}>{displayName}</Option>
);

export default MenuItem;
