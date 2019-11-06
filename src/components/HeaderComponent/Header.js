import React from "react";

import "./header.css";
import HeaderTitle from "./HeaderTitle";
import HeaderIntro from "./HeaderIntro";

export default function Header() {
  return (
    <header>
      <HeaderTitle />
      <HeaderIntro />
    </header>
  );
}
