import { useState } from "react";
import CheckList from './CheckList/CheckList'

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
      <CheckList time={currentTime}/>
    </div>
  );
}
