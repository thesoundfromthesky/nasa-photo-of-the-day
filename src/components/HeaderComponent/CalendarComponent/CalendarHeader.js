import React, { useState, useEffect } from "react";

export default function CalendarHeader({ date }) {
  const [display, setDisplay] = useState(["0000", "00", "00"]);

  useEffect(
    _ => {
      const temp = date.split("-");
      setDisplay(prevDisplay => temp);
    },
    [date]
  );

  return (
    <div className="calendar-header">
      <h1>
        <span>
          {display[1]}-{display[2]}
        </span>
        <br />
        <span>{display[0]}</span>
      </h1>
    </div>
  );
}
