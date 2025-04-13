import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "./pages/Exam";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Exam />} path="/exam"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
