import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "./pages/Exam";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Easy />} path="/"></Route>
        <Route element={<Medium/>} path="/medium"></Route>
        <Route element={<Hard/>} path="/hard"></Route>
        <Route element={<Exam />} path="/exam"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
