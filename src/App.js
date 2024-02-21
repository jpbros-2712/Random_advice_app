import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(()=>{
    fetchAdvice();
  },[]);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((Response) => {
        const { advice } = Response.data.slip; // destructuring of abject
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="advice-data">{advice}</h1>
        <button className="btn" onClick={fetchAdvice}>
          Give Me Advice!!
        </button>
      </div>
    </div>
  );
}

export default App;
