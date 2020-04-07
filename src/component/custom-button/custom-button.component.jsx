import React from 'react'
import {ButtomRounded} from './custom-button.styles';

const CustomButton = ({children, handle}) => (
    <ButtomRounded>{children}</ButtomRounded>
);


export default CustomButton;