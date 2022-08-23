import React, { useState, useEffect } from "react";
import "./styles/Timer.css";

const Timer = () => {
  let [min, setMin] = useState(0);

  let [sec, setSec] = useState(0);

  let [isActive, setIsActive] = useState(false);

  let [time, setTime] = useState('');

  let [dropDown, setDropDown] = useState("Options");

  let interval;

  //   ======Starting timer with start button===========

  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        // setSec(sec + 1);
        // if (sec === 59) {
        //   setMin(min + 1);
        //   setSec(0);
        // }

        if(dropDown === "seconds"){
            setSec(time => time - 1);
            console.log(sec);
            // setMin(0);
        }



      }, 1000);
    }

    return () => clearInterval(interval);
  });

  //   =======reset button logic==============

  const reset = () => {
    setMin(0);
    setSec(0);
    setIsActive(false);
  };

  // ======for handling the time==========

  const handleTime = (e) => {
    setTime(e.target.value);

    console.log("time is:", e.target.value);
  };


//   =============handler for the dropdown================
  const handleDropDown = (e) => {
    setDropDown(e.target.value)
    console.log("the Value is:", e.target.value)
  }


  return (
    <div>
      <section className="container">
        <h3 className="timer">
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </h3>
        <div className="inputContainer">
          <input
            type="text"
            required
            name="time"
            className="timerInput time"
            onChange={handleTime}
            value={time}
          />
          <select name="Timer" id="timer" className="dropDown" value={dropDown} onChange={handleDropDown}>
            <option value="Options">Select Time</option>
            <option value="seconds" className="second">
              Seconds
            </option>
            <option value="minutes" className="minute">
              Minutes
            </option>
          </select>
        </div>
        <button className="startTimer" onClick={() => setIsActive(!isActive)}>
          Start
        </button>
        <button className="resetTimer" onClick={reset}>
          Reset
        </button>
      </section>
    </div>
  );
};

export default Timer;
