import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative infline-flex items-center justify-center px-${px} py-2
    h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${
    white ? "text-n-8" : "text-n-1"
  } 
    ${className || ""}`;
     
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
    );
    
    const renderLink = () => (
      <a className={classes} href={href} >
        <span>{children}</span>
        {ButtonSvg(white)}
      </a>
    );


  return href? renderLink() :  renderButton();
};

export default Button;
