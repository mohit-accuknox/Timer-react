import React, { useState, useEffect } from "react";
import "./styles/Timer.css";

const Timer = () => {
  let [sec, setSec] = useState(0);
  let [isActive, setIsActive] = useState(false);
  let [time, setTime] = useState("");
  let [dropDown, setDropDown] = useState("Options");
  let interval;
  let value;
  //   ======Starting timer with start button===========

  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        // console.log(sec);
        if (sec <= time && sec > 0) {
          setSec((time) => time - 1);
          // console.log(sec);
        } else {
          reset();
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  });
  //   =======reset button logic==============
  const reset = () => {
    setSec(0);
    setIsActive(false);
  };
  // ======for handling the time==========
  const handleTime = (e) => {
    value = Number(e.target.value);
    setTime(value);
    // console.log("time is:", e.target.value);
  };
  //   =============handler for the dropdown================
  const handleDropDown = (e) => {
    setDropDown(e.target.value);
    // console.log("the Value is:", e.target.value);
  };

  const handleStartTimer = () => {
    if (dropDown === "seconds") {
      setSec(time);
      // console.log("second value:", value);
    }
    if (dropDown === "minutes") {
      setSec(time * 60);
      // console.log("minute value:", value);
    }
    setIsActive(!isActive);
  };

  // console.log("the sec value from input is:", sec);


  const transformSeconds = (secs) => {
    secs = Number(secs);
    const m = Math.floor(secs / 60);
    // console.log(m);
    const s = Math.floor(secs % 60);
    // console.log(s);
    const mDisplay = m < 10 ? String(m).padStart(2, "0") : m;
    const sDisplay = s < 10 ? String(s).padStart(2, "0") : s;
    return `${mDisplay}:${sDisplay}`;
  };

  return (
    <div>
      <section className="container">
        <h3 className="timer">{transformSeconds(sec)}</h3>
        <div className="inputContainer">
          <input
            type="text"
            required
            name="time"
            className="timerInput time"
            onChange={handleTime}
            value={time}
          />
          <select
            name="Timer"
            id="timer"
            className="dropDown"
            value={dropDown}
            onChange={handleDropDown}
          >
            <option value="Options">Select Time</option>
            <option value="seconds" className="second">
              Seconds
            </option>
            <option value="minutes" className="minute">
              Minutes
            </option>
          </select>
        </div>
        <button className="startTimer" onClick={handleStartTimer}>
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