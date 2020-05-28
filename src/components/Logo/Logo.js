import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";
import { checkPropTypes } from "prop-types";

const Logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurger Logo" />
  </div>
);

export default Logo;
