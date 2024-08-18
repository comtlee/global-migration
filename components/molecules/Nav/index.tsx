'use client';

import React, { useState } from "react";
import NavItem from "@/components/atoms/NavItem";
import { LanguageDropDownButton } from "@/components/molecules/Select";
import LANGUAGE from "@/type/language";

interface NavProps {
  className?: string;
}

const Nav = ({ className }: NavProps) => {
  const [language, setLanguage] = useState<LANGUAGE>(LANGUAGE.english)
  return (
    <nav>
      <ul className={className}>
        <NavItem href="/product">PRODUCT</NavItem>
        <NavItem href="/digitalization">DIGITALIZATION</NavItem>
        <NavItem href="/company">COMPANY</NavItem>
        <NavItem href="/mobile-app">MOBILE APP</NavItem>
        <NavItem href="/contact-us">CONTACT US</NavItem>
        <div className={"change-lang-box"}>
          <LanguageDropDownButton
            className={"select-lang"}
            language={language}
            onChange={(language) => { setLanguage(language) }}
          />
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
