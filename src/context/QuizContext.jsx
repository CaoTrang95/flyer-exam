import { createContext, useReducer, useEffect, useContext } from "react";
import { quizs } from "../mock-data/data";
const QuizContext = createContext();

const initialState = {
  questions: [
    {
      question: "",
      options: [],
      correctAnswer: -1,
      time: -1,
    },
  ],
  status: "loading",
  index: -1,
  answer: null,
  points: 0,
  videoEnded: false,
  videoPaused: true,
  clickedControl: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataLoaded":
      return {
        ...state,
        questions: action.payload,
      };
    case "dataError":
      return {
        ...state,
        status: "error",
      };
    case "showQuestion":
      return {
        ...state,
        index: state.index + 1,
        clickedControl: true,
        answer: null,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        videoPaused: true,
        points: action.payload === question.correctAnswer ? state.points + 1 : state.points,
      };
    case "autoClickAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    case "pauseVideo":
      return {
        ...state,
        videoPaused: true,
      };
    case "playVideo":
      return {
        ...state,
        videoPaused: false,
      };
    case "videoEnd":
      return {
        ...state,
        videoEnded: true,
        videoPaused: true,
      };
    case "clickPlay":
      return {
        ...state,
        clickedControl: true,
        videoPaused: false,
        index: -1,
        answer: null,
        points: 0,
        videoEnded: false,
      };
    default:
      throw new Error("Action unknown");
  }
}
function QuizProvider({ children }) {
  const [{ questions, status, index, answer, points, videoEnded, videoPaused, clickedControl }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;

  useEffect(function () {
    dispatch({ type: "dataLoaded", payload: quizs });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        numQuestions,
        videoEnded,
        videoPaused,
        clickedControl,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error("QuizContext was used outside of the QuizProvider component!");
  return context;
}

export { QuizProvider, useQuiz };
