import React, { useState, useEffect } from "react" 
import './App.css';

function App() {
  const[timer, setTimer] = useState(null)
  const[minute, setMinute] = useState(0)
  const[second, setSecond] = useState(0)
  const[stopTime, setStopTime] = useState(false)
  // const[time, setTime] = useState(128)

  // useEffect(()=>{
  //   let count = time
  //   setTimer(setInterval(() =>{
  //     count = count - 1
  //     const minute = Math.floor((count / 60))
  //     const second = count - (minute * 60)
  //     setCountdown(`${minute > 9? minute: `0${minute}`}:${second > 9? second:`0${second}`}`)
  //   },1000))
  // },[time])


  const startCountDown = () =>{
    let count = minute * 60
    setTimer(setInterval(() =>{
      count = count - 1
      setMinute(Math.floor(count / 60))
      setSecond(count - ((Math.floor(count / 60) * 60)))
      if(count ===0){
        setStopTime(true)
      }
    },1000))
  }

  useEffect(() =>{
    if(stopTime){
      clearInterval(timer)
    } 
  },[stopTime])

  return (
    <div className="App">
      <p>{`${minute > 9 ? minute : `0${minute}`}:${second > 9 ? second : `0${second}`}`}</p>
      <div>
        <button onClick={() => minute > 0 ? setMinute(minute - 1): setMinute(0)}>-</button>
        <button onClick={startCountDown}>Start</button>
        <button onClick={() => setMinute(minute + 1)}>+</button>
      </div>
      {/* <p>{time}</p> */}
    </div>
  );
}

export default App;
