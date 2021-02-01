import logo from "./logo.svg";
import "./App.scss";
import React, { useState, useEffect } from "react";

function App() {
  const [arrival, setArrival] = useState(true);
  const [win, setWin] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");

  const renderAuthButton = () => {
    return (
      <div class="container opac">
        <h3> JOYEUX ANNIVERSAIRE MA TIANA !</h3>
        <button onClick={changeToQuestions}> Je veux mon cadeau </button>
      </div>
    );
  };

  const renderWin = () => {
    return (
      <div class="container victoire">
        <h3 class="bonaniv"> Bonne anniversaire Titi !</h3>
      </div>
    );
  };

  const renderQuestions = () => {
    return (
      <div class="questionContainer">
        <div class="question">
          <span>
            Quel est le type du gros monstre que combat Gandalf ? (seulement le
            premier mot)
          </span>
          <input type="text" onChange={(e) => setFirst(e.target.value)}></input>
        </div>
        <div class="question">
          <span>Qui a écrit le livre Soulier ?</span>
          <input
            type="text"
            onChange={(e) => setSecond(e.target.value)}
          ></input>
        </div>
        <div class="question">
          <span>Quel est notre digicode ?</span>
          <input type="text" onChange={(e) => setThird(e.target.value)}></input>
        </div>
        <div class="question">
          <span>2* 4 + 50 / 20 ?</span>
          <input type="text" onChange={(e) => setFour(e.target.value)}></input>
        </div>
        <div class="question">
          <span>J'ai 100 ml d'eau, combien ai-je de centi litres d'eau ?</span>
          <input type="text" onChange={(e) => setFive(e.target.value)}></input>
        </div>
        <div class="question">
          <span>quel est mon autre prénom qui commence par L ?</span>
          <input type="text" onChange={(e) => setSix(e.target.value)}></input>
        </div>
        <div class="question">
          <span>Pipi .. caca .. ?</span>
          <input type="text" onChange={(e) => setSeven(e.target.value)}></input>
        </div>
        <button class="victory" onClick={changeToWin}>
          VICTOIRE
        </button>
      </div>
    );
  };

  function changeToWin() {
    if (
      first == "Balerog" &&
      second == "Hugo Jacomet" &&
      (third == "63B08" || third == "63b08") &&
      four == "10.5" &&
      five == "10" &&
      six == "Ludovic" &&
      (seven == "prout" || seven == "Prout")
    ) {
      setWin(true);
    }
  }

  function changeToQuestions() {
    setArrival(false);
  }

  return (
    <div className="App">
      {arrival ? (
        renderAuthButton()
      ) : (
        <div class="container">{win ? renderWin() : renderQuestions()}</div>
      )}
    </div>
  );
}

export default App;
