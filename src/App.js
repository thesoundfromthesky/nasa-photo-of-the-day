import React, { useState, useEffect } from "react";
import "./App.css";

import mockup from "./model/mockup";

import Header from "./components/HeaderComponent/Header";

function App() {
  const [data, setData] = useState();

  useEffect(_ => {
    setData(prevData => mockup);
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
