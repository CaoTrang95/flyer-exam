import React from "react";
import { useQuiz } from "../context/QuizContext";
import Button from "./Button";
import "./Statistics.css";

function Statistics({ onHandleReplay }) {
  const { points, questions } = useQuiz();
  return (
    <div className="statistics">
      <h3>Quiz đã hoàn thành</h3>
      <p>
        Điểm của bạn: {points}/{questions.length}
      </p>
      <div className="group-buttons">
        <Button onHandleClick={onHandleReplay}>Bắt đầu lại</Button>
        <Button>Bài kế tiếp</Button>
        <Button>Trang chủ</Button>
      </div>
    </div>
  );
}

export default Statistics;
