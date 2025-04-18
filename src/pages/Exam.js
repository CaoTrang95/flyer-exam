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
import { useAnim } from "../hooks/useAnim";
import { convertStatus } from "../utils/utils";
import { useExam } from "../context/ExamContext";

function Exam() {
  const { exams, dispatch: send } = useExam();
  const {
    questions,
    videoEnded,
    videoPaused,
    clickedControl,
    points,
    examStorage,
    dispatch,
  } = useQuiz();
  const pauseTimes = questions.map((question) => question.time);
  const playerRef = useRef(null);
  const beeRef = useRef(null);
  const meoRef = useRef(null);
  const needShowOverlay = useRef(false);
  const [currentStopIndex, setCurrentStopIndex] = useState(0);

  useAnim("target", beeRef, meoRef);

  useEffect(() => {
    let interval;
    //video đang chạy mới setInterval
    if (!videoPaused) {
      interval = setInterval(() => {
        if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime();
          const currentMs = currentTime * 1000;

          if (currentStopIndex < pauseTimes.length) {
            const nextStop = pauseTimes[currentStopIndex];

            if (currentMs >= nextStop && currentMs - nextStop < 50) {
              needShowOverlay.current = true;
              dispatch({ type: "pauseVideo" });
              dispatch({ type: "showQuestion" });
              const internalPlayer = playerRef.current.getInternalPlayer();
              internalPlayer?.pause?.();
              setCurrentStopIndex((prev) => prev + 1);
            } else {
              needShowOverlay.current = false;
            }
          }
        }
      }, 50);
    }

    return () => clearInterval(interval);
  }, [videoPaused, currentStopIndex]);

  const handleVideoEnd = () => {
    dispatch({ type: "videoEnd" });
    send({ type: "update", payload: { id: 0, status: 2, points: points } });
  };

  const handlePause = () => {
    dispatch({ type: "pauseVideo" });
  };

  const handlePlay = () => {
    dispatch({ type: "playVideo" });
  };

  const handleClick = () => {
    dispatch({ type: "clickPlay" });
  };

  const handleReplay = () => {
    playerRef.current.seekTo(0);
    setCurrentStopIndex(0);
    dispatch({ type: "clickPlay" });
  };

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
      />
      <img ref={meoRef} src={meo} alt="Meo" className="meo" id="meo" />

      {/* <div className={`content-video-container ${videoPaused && clickedControl ? "show-overlay" : ""}`}> */}
      <div className="video-container" id="target-parent">
        <div className="status-exam1 show-exam1">
          <span>
            {convertStatus(exams[0])}
            {exams[0].status !== 0 ? `/${questions.length}` : ""}
          </span>
        </div>
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
            onPlay={handlePlay}
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
            className={`overlay ${
              (videoPaused && clickedControl && needShowOverlay.current) ||
              videoEnded
                ? "show-overlay"
                : ""
            }`}
          />
          <Quiz playerRef={playerRef} />
          {videoEnded && <Statistics onHandleReplay={handleReplay} />}
        </div>
      </div>
    </StarExplosion>
  );
}

export default Exam;
