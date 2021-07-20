import { useEffect, useRef } from "react"
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
    const textRed = useRef();

    useEffect(() => {
        init(textRed.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Data Analyst"]
        })
    }, [])


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
<<<<<<< HEAD
                    <img src="assets/DSC_0013.jpg" alt="" />
=======
                    <img src="assets/DSC_0013.JPG" alt="" />
>>>>>>> 53d3da0dcbb4a95f2d8b495a3b556ee3cdcf0daa
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Oliver Reyes</h1>
                    <h3>Freelance <span ref={textRed}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
