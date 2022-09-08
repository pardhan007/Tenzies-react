import React from "react";
import Header from "./components/Header";
import Dice from "./components/Dice";
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true);
      // console.log("You Won");
    }
  }, [dice])


  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.ceil(Math.random() * 6);
      newDice.push({
        id: nanoid(),
        value: randomNumber,
        isHeld: false,
      });

    }
    return newDice;
  }

  function toggle(diceId) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === diceId ? { ...die, isHeld: !die.isHeld } : die
    }))
  }

  const diceElements = dice.map(die =>
    <Dice
      id={die.id}
      key={die.id}
      value={die.value}
      toggle={toggle}
      isHeld={die.isHeld}
    />
  )

  function suffle() {
    if (tenzies) {
      setDice(allNewDice())
      setTenzies(false);
      setCount(0)
    }
    else {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld === true ? die : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() }
      }))
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div className="container">
      {tenzies && <Confetti />}
      <Header count={count} />
      <div className="gridBox">
        {diceElements}
      </div>
      <div className="btnDiv">
        <button onClick={suffle} className="rollBtn">{tenzies ? `New Game` : `Roll`}</button>
      </div>
    </div>
  )
}


export default App;
