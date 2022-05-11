import { useState } from "react";
import CheckList from './CheckList/CheckList'

import './Card.css'

export default function Time() {
  let time = new Date().getTime();
  let [currentTime, changeTime] = useState(time);
  function checkTime() {
    time = new Date().getTime();
    changeTime(time);
  }

  setInterval(checkTime, 1000);

  return (
    <div className="time">
      <h1>{new Date(currentTime).toLocaleTimeString()}</h1>
      <CheckList time={currentTime}/>
    </div>
  );
}
