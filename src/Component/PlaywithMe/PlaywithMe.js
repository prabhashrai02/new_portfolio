import { useState, useEffect } from 'react';
import './PlaywithMe.css';
import rock from "../../Assets/rock.png";
import scissors from "../../Assets/scissors.png";
import paper from "../../Assets/paper.png";

function PlaywithMe() {
  
  const [playerHand, setPlayerHand] = useState(rock);
  const [computerHand, setcomputerHand] = useState(rock);
  
  const [pScore, setpScore] = useState(0);
  const [cScore, setcScore] = useState(0);
  
  const [winner, setWinner] = useState("Choose an option");

  const play = () => {
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
  }

  const computerOptions = ["rock", "paper", "scissors"];
  
  const start = (userSelected) => {
    setPlayerHand(rock);
    setcomputerHand(rock);

    const pHand = document.querySelector(".player-hand");
    const cHand = document.querySelector(".computer-hand");
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    
    setTimeout(() => {
      setWinner(compareHands(userSelected, computerChoice));

      setPlayerHand(select(userSelected));
      setcomputerHand(select(computerChoice));
    }, 1500);
    
    pHand.style.animation = "shakePlayer 1.5s ease";
    cHand.style.animation = "shakeComputer 1.5s ease";
  }

  const select = (selected) => {
    if (selected === "scissors") {
      return scissors;
    }
    else if (selected === "rock") {
      return rock;
    }
    else {
      return paper;
    }
  }
  
  const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return ("It is a tie");
    }
    else if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        setpScore(pScore+1);
        return ("You Won");
      }
      else {
        setcScore(cScore+1);
        return ("Prabhash Won");
      }
    }
    else if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        setcScore(cScore+1);
        return("Prabhash Won");
      }
      else {
        setpScore(pScore+1);
        return ("You Won");
      }
    }
    else if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        setcScore(cScore+1);
        return ("Prabhash Won");
      }
      else {
        setpScore(pScore+1);
        return ("You Won");
      }
    }
  };

  useEffect(() => {
    const hands = document.querySelectorAll(".hands img");
    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

  }, []);

  return (
    <>
      <div className="play_section">
        <div className="game">
          <div className="score">
            <div className="player-score">
              <h2>You</h2>
              <p>{pScore}</p>
            </div>
            <div className="computer-score">
              <h2>Prabhash</h2>
              <p>{cScore}</p>
            </div>
          </div>

          <div className="intro">
            <h1>Rock Paper and Scissors</h1>
            <button onClick={play}>Let's Play</button>
          </div>

          <div className="match fadeOut">
            <h2 className="winner">{winner}</h2>
            <div className="hands">
              <img className="player-hand" src={playerHand} alt="" />
              <img className="computer-hand" src={computerHand} alt="" />
            </div>
            <div className="options">
              <button id="rock" className="rock" onClick={() => start("rock")}>rock</button>
              <button id="paper" className="paper" onClick={() => start("paper")}>paper</button>
              <button if="scissors" className="scissors" onClick={() => start("scissors")}>scissors</button>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}
  
export default PlaywithMe;
  