import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { useQuiz } from "../context/QuizContext";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
import StarExplosion from "../components/StarExplosion";
import "./Exam.css";

import bee_hi from "../assets/images/bee_hi.png";
import bee_read from "../assets/images/bee_read.png";
import bee_choose from "../assets/images/bee_choose.png";
import meo from "../assets/images/meo.png";
import bg from "../assets/images/bg_winter.png";
import bg_video from "../assets/images/bg_video_winter_red.webp";
import play_button from "../assets/images/play-button.png";

import dino from "../assets/dino_cuted.mp4";
import CountDown from "../components/CountDown";

function Exam() {
  const { questions, videoEnded, videoPaused, clickedControl, index, answer, dispatch } = useQuiz();
  const pauseTimes = questions.map((question) => question.time);
  const playerRef = useRef(null);
  const beeRef = useRef(null);
  const meoRef = useRef(null);
  const [currentStopIndex, setCurrentStopIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const currentMs = currentTime * 1000;

        if (currentStopIndex < pauseTimes.length) {
          const nextStop = pauseTimes[currentStopIndex];

          if (currentMs >= nextStop && !videoPaused) {
            dispatch({ type: "pauseVideo" });
            dispatch({ type: "showQuestion" });
            const internalPlayer = playerRef.current.getInternalPlayer();
            internalPlayer?.pause?.();
            setCurrentStopIndex((prev) => prev + 1);
          }
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [videoPaused, currentStopIndex]);

  const handleVideoEnd = () => {
    dispatch({ type: "videoEnd" });
  };

  const handlePause = () => {
    dispatch({ type: "pauseVideo" });
  };

  const handleClick = () => {
    dispatch({ type: "clickPlay" });
  };

  const handleReplay = () => {
    playerRef.current.seekTo(0);
    setCurrentStopIndex(0);
    dispatch({ type: "clickPlay" });
  };

  useEffect(() => {
    const target = document.getElementById("target");
    const targetRect = target.getBoundingClientRect();

    let bounceInterval;

    var widthBee = beeRef.current.offsetWidth;
    var widthMeo = meoRef.current.offsetWidth;

    const rootElement = document.documentElement;
    const rootFontSize = parseFloat(window.getComputedStyle(rootElement).fontSize);
    const remInPixels = 0.625 * rootFontSize;

    const targetXBee = targetRect.left - widthBee - remInPixels;
    const targetYBee = targetRect.top - targetRect.height / 2 - widthBee / 2;

    const targetXMeo = targetRect.left - widthMeo - remInPixels;
    const targetYMeo = targetRect.top - targetRect.height / 2 - widthMeo / 2;

    beeRef.current.style.transform = `translate(${targetXBee}px, ${targetYBee}px)`;
    meoRef.current.style.transform = `translate(-${targetXMeo}px, ${targetYMeo}px)`;

    function bounce() {
      let up = true;
      bounceInterval = setInterval(() => {
        if (up) {
          beeRef.current.style.transform = `translate(${targetXBee}px, ${targetYBee - 3.75 * rootFontSize}px)`;
          meoRef.current.style.transform = `translate(-${targetXMeo}px, ${targetYMeo - 3.75 * rootFontSize}px)`;
        } else {
          beeRef.current.style.transform = `translate(${targetXBee}px, ${targetYBee}px)`;
          meoRef.current.style.transform = `translate(-${targetXMeo}px, ${targetYMeo}px)`;
        }
        up = !up;
      }, 800);
    }

    const timeid = setTimeout(bounce, 5000);

    return function () {
      clearTimeout(timeid);
      clearInterval(bounceInterval);
    };
  }, []);

  return (
    <StarExplosion>
      <img className="img-bg" src={bg} alt="background" />
      <img
        ref={beeRef}
        src={`${!clickedControl ? bee_hi : clickedControl && !videoPaused ? bee_read : bee_choose}`}
        alt="Bee"
        className="bee"
        id="bee"
      />
      <img ref={meoRef} src={meo} alt="Meo" className="meo" id="meo" />

      {/* <div className={`content-video-container ${videoPaused && clickedControl ? "show-overlay" : ""}`}> */}
      <div className="video-container" id="target-parent">
        <img className="content-bg" src={bg_video} alt="background video" />
        <div className="wrap-guide">
          <h3 className="guide">Với mỗi câu hỏi, chọn câu trả lời đúng:</h3>
        </div>
        <div className={`content-video-container `}>
          <ReactPlayer
            id="target"
            url={dino}
            playing={!videoPaused}
            onEnded={handleVideoEnd}
            onPause={handlePause}
            controls={false}
            // onProgress={handleProgress}
            ref={playerRef}
            width="80%"
            height="80%"
          />
          {!clickedControl && (
            <div className="play" onClick={handleClick}>
              <img src={play_button} className="icon-play" alt="play button" />
            </div>
          )}
          <div className={`overlay ${videoPaused && clickedControl ? "show-overlay" : ""}`} />
          <Quiz />
          {videoEnded && <Statistics onHandleReplay={handleReplay} />}
        </div>
      </div>
    </StarExplosion>
  );
}

export default Exam;
