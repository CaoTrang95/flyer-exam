import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import StarExplosion from "../components/StarExplosion";
import RequireExam2 from "../components/RequireExam2";
import "./Exam2.css";

import bee_read from "../assets/images/bee_read.png";
import meo from "../assets/images/meo.png";
import bg from "../assets/images/bg-2.webp";
import play_button from "../assets/images/play-button.png";
import bear from "../assets/bear.mp4";
import { useAnim } from "../hooks/useAnim";
import { useExam } from "../context/ExamContext";
import { convertStatus } from "../utils/utils";

export default function Exam2() {
  const { exams } = useExam();
  const beeRef = useRef(null);
  const meoRef = useRef(null);
  const playerRef = useRef(null);

  const [videoPaused, setVideoPaused] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [clickedControl, setClickedControl] = useState(false);

  function handleClick() {
    setVideoPaused(false);
    setVideoEnded(false);
    setClickedControl(true);
  }
  useAnim("target-bee", beeRef, meoRef);

  return (
    <StarExplosion>
      <img className="img-bg" src={bg} alt="background" />
      <img ref={beeRef} src={bee_read} alt="Bee" className="bee" id="bee" />
      <img ref={meoRef} src={meo} alt="Meo" className="meo" id="meo" />

      <div className="video-container-exam2">
        <div className={`status-exam2-main ${!videoEnded ? "show" : ""}`}>
          <span>{convertStatus(exams[1])}</span>
        </div>
        <div className="content-video-container-exam2" id="target-bee">
          {!videoEnded && (
            <ReactPlayer
              url={bear}
              playing={!videoPaused}
              onEnded={() => setVideoEnded(true)}
              onPause={() => setVideoPaused(true)}
              controls={false}
              ref={playerRef}
              width="100%"
              height="100%"
            />
          )}
          {!clickedControl && !videoEnded && (
            <div
              className="play"
              onClick={() => {
                setVideoPaused(false);
                setClickedControl(true);
              }}
            >
              <img src={play_button} className="icon-play" alt="play button" />
            </div>
          )}
          {videoEnded && <RequireExam2 onLearnAgain={handleClick} />}
        </div>
      </div>
    </StarExplosion>
  );
}
