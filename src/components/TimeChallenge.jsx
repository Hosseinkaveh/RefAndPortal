import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timerid = useRef();
  const dialog = useRef();
  const [timeleft, setTimeleft] = useState(targetTime * 1000);
  let timerStarted = timeleft > 0 && timeleft < targetTime * 1000;
  if (timeleft <= 0) {
    clearInterval(timerid.current);
    dialog.current.showDialog();
  }
  const handelReset = () => {
    setTimeleft(targetTime * 1000);
  };
  const handelStart = () => {
    timerid.current = setInterval(() => {
      setTimeleft((pre) => pre - 10);
    }, 10);
  };

  const handelStop = () => {
    dialog.current.showDialog();
    clearInterval(timerid.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeleft={timeleft}
        onReset={handelReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handelStop : handelStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="active">{"Time is running...Timer inactive"}</p>
      </section>
    </>
  );
}
