import React, { useContext } from "react";
import {useHistory} from "react-router-dom";
import MenuOptionsContext from "../../context/menu-options/menu.context";
import MenuItem from "../menu-item/menu-item.component";
import {
  HeaderContainer,
  OptionContainer,
  LogoContainer,
  LogoImg
} from "./header.styles";

const Header = () => {
  const { menuOptions } = useContext(MenuOptionsContext);
  const history = useHistory();
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg onClick={()=>history.push('/')}/>
      </LogoContainer>
      <OptionContainer>
        {menuOptions.map((option) => (
          <MenuItem key={option.route} option={option} />
        ))}
      </OptionContainer>
    </HeaderContainer>
  );
};

export default Header;
