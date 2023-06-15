import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});
  const [bgColor, setBgColor] = useState("#fff");

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data);
    setBgColor(randomColor());
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const randomColor = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2980b9",
      "#8e44ad",
      "#2c3e50",
      "#f39c12",
      "#d35400",
      "#c0392b",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div style={{ backgroundColor: bgColor }} className="container">
      <h1 className="quote">{quote.content}</h1>
      <p className="author">- {quote.author}</p>
      <button onClick={fetchQuote} className="button">
        New Quote
      </button>
    </div>
  );
}

export default App;
