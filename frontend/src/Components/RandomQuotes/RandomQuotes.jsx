import React, { useState } from "react";
import "./RandomQuotes.css";
import reload from "../Assests/reload.png";

const RandomQuotes = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const [quote, setQuote] = useState({
    text: "Difficulties increases the nearer we get to the goal",
    author: "Johann Wolfgang von Goethe",
  });

  loadQuotes();
  return (
    <div className="Container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author"> - {quote.author.split(",")[0]} </div>
          <div className="icons">
            <img
              src={reload}
              className="reload"
              alt=""
              onClick={() => {
                random();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuotes;
