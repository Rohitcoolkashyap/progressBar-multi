import React, { useState, useEffect } from "react";
import "./styles.css";

export default function ProgressBar({ bar, completeProgress }) {
  const [progress, setProgress] = useState(0);

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setProgress((prev) => prev + 10);
    }, 1000);
    if (progress >= 100) {
      clearInterval(interval);
      completeProgress(bar);
      return;
    }

    return () => clearInterval(interval);
  }, [progress]);

  const style = {
    width: `${progress * 5}px`,
    background: "green",
  };
  return (
    <div className="ProgressBar" style={style}>
      {progress}%
    </div>
  );
}
