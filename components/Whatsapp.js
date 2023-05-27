import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import wstyle from "./styles/whatsapp.module.css";
const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/4962079248734"
        className={wstyle.whatsapp_float}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className={wstyle.whatsappicon}size={30} />
      </a>
    </div>
  );
};

export default Whatsapp;
