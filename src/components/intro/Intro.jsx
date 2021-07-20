import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRed = useRef();

  useEffect(() => {
    init(textRed.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Data Analyst"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/DSC_0013.PNG" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Oliver Reyes</h1>
          <h3>
            Freelance <span ref={textRed}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
