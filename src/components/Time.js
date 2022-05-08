import { useState } from "react";
import Tasks from "./Tasks";

export default function Time() {
  let time = new Date().toLocaleTimeString();
  let [currentTime, changeTime] = useState(time);
  function checkTime() {
    time = new Date().toLocaleTimeString();
    changeTime(time);
  }

  setInterval(checkTime, 1000);

  return (
    <div>
      <h1>{currentTime}</h1>
      <Tasks/>
    </div>
  );
}
