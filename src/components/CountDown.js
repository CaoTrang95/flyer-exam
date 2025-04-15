import { useEffect, useState, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useQuiz } from "../context/QuizContext";
import "./CountDown.css";
import wrongSound from "../assets/audio/eoh.wav";

export default function CountDown({ time }) {
  const { answer, dispatch, questions } = useQuiz();
  const [size, setSize] = useState(0);
  const wrongAudioRef = useRef(new Audio(wrongSound));
  const remToPx = (remValue) => {
    return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
  };

  const sizeInRem = 0.25;
  const sizeInPx = remToPx(sizeInRem);

  useEffect(() => {
    const target = document.getElementById("target");
    const targetQuiz = document.getElementById("target-quiz");
    const targetRect = target.getBoundingClientRect();
    const targetQuizRect = targetQuiz.getBoundingClientRect();

    const s = Math.floor((targetRect.bottom - targetQuizRect.bottom) / 2 - sizeInRem / 2 + 2);
    setSize(s);
  }, []);

  const playWrongSound = () => {
    wrongAudioRef.current.play();
  };

  function handleComplete() {
    if (answer === null) {
      const ansCurrent = questions.at(0);
      dispatch({ type: "autoClickAnswer", payload: ansCurrent });
      playWrongSound();
      setTimeout(() => {
        dispatch({ type: "playVideo" });
      }, 1200);
    }
  }
  return (
    <div className="countdown">
      <CountdownCircleTimer
        isPlaying
        duration={time}
        colors={["#3093C9", "#7CC760", "#FFC300", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        size={size}
        strokeWidth={sizeInPx}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
