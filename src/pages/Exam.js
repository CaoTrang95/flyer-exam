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
import bg from "../assets/images/bg.png";
import bg_video from "../assets/images/bg-video.png";
import play_button from "../assets/images/play-button.png";

import dino from "../assets/dino_cuted.mp4";

function Exam() {
  const { questions, videoEnded, videoPaused, clickedControl, dispatch } =
    useQuiz();
  const pauseTimes = questions.map((question) => question.time);
  const playerRef = useRef(null);
  const beeRef = useRef(null);
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

    const targetX = targetRect.left - 120;
    const targetY = targetRect.top - targetRect.height / 2 - 50;

    beeRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;

    function bounce() {
      let up = true;
      bounceInterval = setInterval(() => {
        if (up) {
          beeRef.current.style.transform = `translate(${targetX}px, ${
            targetY - 60
          }px)`;
        } else {
          beeRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
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
        src={`${
          !clickedControl
            ? bee_hi
            : clickedControl && !videoPaused
            ? bee_read
            : bee_choose
        }`}
        alt="Bee"
        className="bee"
        id="bee"
      ></img>

      <div className="video-container">
        <img className="content-bg" src={bg_video} alt="background video" />
        <div className="wrap-guide">
          <h3 className="guide">
            FOR EACH QUESTION, CHOOSE THE CORRECT ANSWER:
          </h3>
        </div>
        <div className="content-video-container">
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
          <div
            className={`overlay ${videoPaused && clickedControl ? "show" : ""}`}
          />
          <Quiz />
          {videoEnded && <Statistics onHandleReplay={handleReplay} />}
        </div>
      </div>
    </StarExplosion>
  );
}

export default Exam;
