import React, { useState, useEffect } from "react";
import "./App.css";

import mockup from "./model/mockup";

import axios from "axios/dist/axios";
import Header from "./components/HeaderComponent/Header";

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(
    _ => {
      setData(prevData => null);
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
        )
        .then(({ data }) => {
          console.log(data);
          setData(prevData => data);
        });
      // console.log(mockup.one);
      // setData(prevData => mockup.one);
    },
    [date]
  );
  return (
    <div className="App">
      <Header date={date} setDate={setDate} data={data} />
    </div>
  );
}

export default App;
