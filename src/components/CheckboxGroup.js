import React, { useRef, useEffect, useState } from "react";
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
  const [pathTick, setPathTick] = useState(null);
  const [pathCross, setPathCross] = useState(null);

  const parentCheckboxRef = useRef(null);
  const [radius, setRadius] = useState(0);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  const strokeCheckbox = useRef(null);
  const strokePath = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      const newRadius = Math.min(width, height) / 4;
      const newCenterX = width / 2;
      const newCenterY = height / 2;

      strokeCheckbox.current = "0.1875rem";
      strokePath.current = "0.25rem";

      setRadius(newRadius);
      setCenterX(newCenterX);
      setCenterY(newCenterY);

      const pTick = `M ${newCenterX / 2} ${newCenterX / 2} L ${
        (3 * newCenterX) / 2
      } ${(3 * newCenterX) / 2} M ${(3 * newCenterX) / 2} ${newCenterX / 2} L ${
        newCenterX / 2
      } ${(3 * newCenterX) / 2}`;

      const pCross = `M ${newCenterX / 2} ${0.9 * newCenterX} L ${
        0.9 * newCenterX
      } ${1.3 * newCenterX} L ${1.7 * newCenterX} ${0.4 * newCenterX}`;

      setPathTick(pTick);
      setPathCross(pCross);
    });

    if (parentCheckboxRef.current) {
      observer.observe(parentCheckboxRef.current);
    }

    return () => {
      if (parentCheckboxRef.current) {
        observer.unobserve(parentCheckboxRef.current);
      }
    };
  }, []);

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
      setTimeout(() => {
        dispatch({ type: "playVideo" });
      }, 1200);
    } else {
      playWrongSound();
      setTimeout(() => {
        dispatch({ type: "playVideo" });
      }, 1200);
    }
  };

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

      <div
        id="checkBox"
        className={`answer-box ${hasAnswered ? "no-click" : ""}`}
        ref={parentCheckboxRef}
      >
        <svg width={2 * centerX} height={2 * centerX}>
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            stroke="#E7AB7A"
            strokeWidth={strokeCheckbox.current}
            fill="white"
            id={`myCircle_${indexCheckbox}`}
          />
          <animated.path
            d={
              answer !== question.correctAnswer && indexCheckbox === answer
                ? pathTick
                : indexCheckbox === question.correctAnswer
                ? pathCross
                : ""
            }
            stroke={
              answer !== question.correctAnswer && indexCheckbox === answer
                ? "red"
                : "#32CD32"
            }
            strokeWidth={strokePath.current}
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
