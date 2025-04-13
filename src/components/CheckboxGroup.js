import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useQuiz } from "../context/QuizContext";
import "./Checkbox.css";
import wrongSound from "../assets/audio/eoh.wav";
import correctSound from "../assets/audio/wow.wav";

const CheckboxGroup = ({ question }) => {
  return (
    <div className="quiz-content">
      <b>{question.question}</b>
      <div className="container-checkbox-group">
        {question.options.map((option, index) => (
          <Checkbox
            key={option}
            value={option}
            question={question}
            indexCheckbox={index}
          />
        ))}
      </div>
    </div>
  );
};

const Checkbox = ({ question, value, indexCheckbox }) => {
  const { dispatch, answer } = useQuiz();
  const correctAudioRef = useRef(new Audio(correctSound));
  const wrongAudioRef = useRef(new Audio(wrongSound));
  let time1, time2;

  const playCorrectSound = () => {
    correctAudioRef.current.play();
  };

  const playWrongSound = () => {
    wrongAudioRef.current.play();
  };

  function indexToLetter(index) {
    return String.fromCharCode(65 + index);
  }

  const handleOptionChange = (event, index) => {
    dispatch({ type: "newAnswer", payload: index });
    if (index === question.correctAnswer) {
      playCorrectSound();
      time1 = setTimeout(() => {
        dispatch({ type: "playVideo" });
      }, 1200);
    } else {
      playWrongSound();
      time2 = setTimeout(() => {
        dispatch({ type: "playVideo" });
      }, 1200);
    }
  };
  // useEffect(() => {
  //   return () => {
  //     clearTimeout(time1);
  //     clearTimeout(time2);
  //   };
  // }, [answer]);

  const hasAnswered = answer != null;

  /* Sử dụng useSpring để tạo animation cho dấu tích, x*/
  const { strokeDashoffset } = useSpring({
    /* 0: toàn bộ viền được hiển thị, 100: đường viền biến mất*/
    strokeDashoffset: indexCheckbox === answer || hasAnswered ? 0 : 100,
    config: { duration: 300 },
    immediate: !(indexCheckbox === answer),
  });

  return (
    <div
      className={`checkbox-container ${hasAnswered ? "no-click" : ""}`}
      onClick={(e) => handleOptionChange(e, indexCheckbox)}
    >
      <div className="image-box">
        <img
          className="image-answer"
          alt="image-scarf"
          src={question.options[indexCheckbox]}
        ></img>
        <p className="icon-answer">{indexToLetter(indexCheckbox)}</p>
      </div>

      <div className={`answer-box ${hasAnswered ? "no-click" : ""}`}>
        <svg className="circle">
          <circle
            cx="24"
            cy="24"
            r="10"
            stroke="#E7AB7A"
            strokeWidth="3"
            fill="white"
          />
          <animated.path
            d={
              answer !== question.correctAnswer && indexCheckbox === answer
                ? "M 16 16 L 32 32 M 32 16 L 16 32"
                : indexCheckbox === question.correctAnswer
                ? "M 14 22 L 22 30 L 38 12"
                : ""
            }
            stroke={
              answer !== question.correctAnswer && indexCheckbox === answer
                ? "red"
                : "#32CD32"
            }
            strokeWidth="4"
            fill="none"
            strokeDasharray="100"
            style={{ strokeDashoffset }}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
export default CheckboxGroup;
