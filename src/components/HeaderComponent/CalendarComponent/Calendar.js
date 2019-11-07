import React from "react";

import "./calendar.css";

import CalendarHeader from "./CalendarHeader";
import CalendarDate from "./CalendarDate";

export default function Calendar({ date, setDate }) {
  return (
    <div className="calendar">
      <CalendarHeader date={date} />
      <CalendarDate setDate={setDate} />
    </div>
  );
}
