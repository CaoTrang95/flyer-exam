import React from "react";
import CheckboxGroup from "./CheckboxGroup";
import { useQuiz } from "../context/QuizContext";
import "./Quiz.css";
import CountDown from "./CountDown";

function Quiz() {
  const { questions, index, videoPaused, answer, clickedControl, videoEnded } = useQuiz();
  const question = questions.at(index);
  return (
    <div className={`quiz-container ${videoPaused && clickedControl && !videoEnded ? "show" : ""}`}>
      <CheckboxGroup question={question} />
      {videoPaused && index === 0 && answer === null && <CountDown time={10} />}
    </div>
  );
}

export default Quiz;
