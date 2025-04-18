import { createContext, useReducer, useEffect, useContext } from "react";
import { exams_mock } from "../mock-data/exams";
import { createStorage } from "../utils/localStorage";
const ExamContext = createContext();

const initialState = {
  exams: [{}],
  examStorage: {},
};

function updateExam(state, action) {
  const id = action.payload.id;
  const newExam = state.exams[id];
  newExam.status = action.payload.status;
  newExam.points = action.payload.points;

  state.exams[id] = newExam;

  state.examStorage.set("exams", state.exams);
}

function reducer(state, action) {
  switch (action.type) {
    case "dataLoaded":
      return {
        ...state,
        exams: action.payload.exams,
        examStorage: action.payload.examStorage,
      };
    case "update":
      updateExam(state, action);
      return {
        ...state,
      };

    default:
      throw new Error("Action unknown");
  }
}
function ExamProvider({ children }) {
  const [{ exams }, dispatch] = useReducer(reducer, initialState);
  const examStorage = createStorage("listExams");

  useEffect(function () {
    const exams = examStorage.get("exams") || exams_mock;
    dispatch({ type: "dataLoaded", payload: { exams, examStorage } });
  }, []);

  return (
    <ExamContext.Provider
      value={{
        exams,
        dispatch,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
}

function useExam() {
  const context = useContext(ExamContext);
  if (context === undefined) throw new Error("ExamContext was used outside of the QuizProvider component!");
  return context;
}

export { ExamProvider, useExam };
