import React from "react";
import { useQuiz } from "../context/QuizContext";
import Button from "./Button";
import "./Statistics.css";

function Statistics({ onHandleReplay }) {
  const { points, questions } = useQuiz();
  return (
    <div className="statistics">
      <h3>Quiz Completed</h3>
      <p>
        Your Score: {points}/{questions.length}
      </p>
      <div className="group-buttons">
        <Button onHandleClick={onHandleReplay}>Learn again</Button>
        <Button>Next lesson</Button>
        <Button>Back home</Button>
      </div>
    </div>
  );
}

export default Statistics;
