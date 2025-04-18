import React from "react";
import CheckboxGroup from "./CheckboxGroup";
import { useQuiz } from "../context/QuizContext";
import "./Quiz.css";
import CountDown from "./CountDown";

function Quiz({ playerRef }) {
  const { questions, index, videoPaused, answer, clickedControl, videoEnded } = useQuiz();
  const question = questions.at(index);

  function checkTime() {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      const currMsTime = currentTime * 1000;
      const nextStop = question.time;

      if (currMsTime - nextStop < 50) return true;
      return false;
    }
    return false;
  }

  return (
    <div
      className={`quiz-container ${
        videoPaused && clickedControl && !videoEnded && index > -1 && checkTime() ? "show" : ""
      }`}
    >
      <CheckboxGroup question={question} />
      {videoPaused && index === 0 && answer === null && <CountDown time={10} />}
    </div>
  );
}

export default Quiz;
