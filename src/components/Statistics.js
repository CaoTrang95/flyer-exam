import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/exam2">
          <Button>Bài kế tiếp</Button>
        </Link>
        <Link to="/">
          <Button>Trang chủ</Button>
        </Link>
      </div>
    </div>
  );
}

export default Statistics;
