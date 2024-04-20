import { useState, useEffect, useRef } from "react";
import "./slider.css";
// import "./thumb.css";

type ISlide = { percentage: number; handlePercentage: (e: any) => void };

function Slider({ percentage = 0, handlePercentage }: ISlide) {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef(null);
  const thumbRef = useRef(null);
  useEffect(() => {
    const rangeWidth: any = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth: any = thumbRef.current.getBoundingClientRect().width;
    // const thumbWidth = 20;
    // console.log(thumbWidth);
    // console.log(rangeWidth);
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <div className="slider-container mt-2">
      <div
        className="progress-bar-cover"
        style={{
          width: `${progressBarWidth}px`,
        }}
      ></div>
      <div
        className="thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      >
        <div className="h-4 w-4 bg-primary rounded-[50%]"></div>
      </div>
      <input
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className="range"
        onChange={handlePercentage}
      />
    </div>
  );
}

export default Slider;
