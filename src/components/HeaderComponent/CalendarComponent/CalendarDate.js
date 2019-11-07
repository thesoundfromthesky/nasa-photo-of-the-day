import React, { useEffect, useRef } from "react";

export default function CalendarDate({ setDate }) {
  const input = useRef();
  useEffect(_ => {
    setDate(prevDate => {
      input.current.value = prevDate;
      return prevDate;
    });
  }, []);

  const handleChange = e => {
    setDate(prevDate => input.current.value);
  };

  return (
    <div className="calendar-date">
      <p>Pick a date to see the past Picture Of The Day</p>
      <input onChange={handleChange} ref={input} type="date" />
      <p>
        API Demo key is supported by{" "}
        <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>
      </p>
      <h4>
        Hourly Limit: 30 requests per IP address per hour
        <br />
        Daily Limit: 50 requests per IP address per day
      </h4>
    </div>
  );
}
