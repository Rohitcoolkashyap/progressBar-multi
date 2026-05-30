import React, { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

let MAX = 3;

export default function App() {
  const [activeBars, setActiveBars] = useState([]);
  const [queue, setQueue] = useState([]);

  const launchProgress = () => {
    let id = Date.now();
    if (activeBars.length < MAX) {
      setActiveBars((prev) => [...prev, id]);
    } else {
      setQueue((prev) => [...prev, id]);
    }
  };

  const completeProgress = (id) => {
    console.log("id", id);
    setActiveBars((prev) => {
      const updatedBars = prev.filter((p) => p != id);

      if (queue.length > 0) {
        let nextBar = queue[0];

        setQueue((prev) => prev.slice(1));

        return [...updatedBars, nextBar];
      }
      return updatedBars;
    });
  };

  return (
    <div className="App">
      <button onClick={launchProgress}>launch</button>
      {activeBars.map((bar) => (
        <ProgressBar key={bar} bar={bar} completeProgress={completeProgress} />
      ))}
    </div>
  );
}
