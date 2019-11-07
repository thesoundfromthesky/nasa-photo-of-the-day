import React from "react";

import Card from "../shared/CardComponent/Card";
import Calendar from "../HeaderComponent/CalendarComponent/Calendar";

export default function HeaderIntro({ date, setDate, data }) {
  return (
    <section className="header-intro wrapper">
      <div>
        <Card data={data} />
      </div>
      <div>
        <Calendar date={date} setDate={setDate} />
      </div>
    </section>
  );
}
