import React from "react";

import "./header.css";
import HeaderTitle from "./HeaderTitle";
import HeaderIntro from "./HeaderIntro";

export default function Header({ date, setDate, data }) {
  return (
    <header>
      <HeaderTitle />
      <HeaderIntro date={date} setDate={setDate} data={data}/>
    </header>
  );
}
