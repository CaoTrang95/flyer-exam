import React from "react";
import ReactDOM from "react-dom/client";
import { QuizProvider } from "./context/QuizContext";
import App from "./App";
import "./styles/styles.css";
import { ExamProvider } from "./context/ExamContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExamProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </ExamProvider>
  </React.StrictMode>
);
