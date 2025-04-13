import React from "react";
import CheckboxGroup from "./CheckboxGroup";
import { useQuiz } from "../context/QuizContext";
import "./Quiz.css";

function Quiz() {
  const { questions, index, videoPaused, clickedControl, videoEnded } =
    useQuiz();
  const question = questions.at(index);
  return (
    <div
      className={`quiz-container ${
        videoPaused && clickedControl && !videoEnded ? "show" : ""
      }`}
    >
      <CheckboxGroup question={question} />
    </div>
  );
}

export default Quiz;
