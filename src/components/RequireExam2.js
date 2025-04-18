import { useState, useEffect } from "react";
import Button from "../components/Button";
import "./RequireExam2.css";
import require from "../assets/images/require2.jpg";
import FileUpload from "../components/FileUpload";
import { Link } from "react-router-dom";
import { useExam } from "../context/ExamContext";
import { convertStatus } from "../utils/utils";

export default function RequireExam2({ onLearnAgain }) {
  const [fileName, setFileName] = useState(null);
  const { exams, dispatch } = useExam();
  const [showResult, setShowResult] = useState(false);
  let timeid;

  function handleSubmit() {
    dispatch({ type: "update", payload: { id: 1, status: 1, points: 0 } });

    timeid = setTimeout(() => {
      dispatch({ type: "update", payload: { id: 1, status: 2, points: 10 } });
      setShowResult(true);
    }, 5000);
  }
  useEffect(() => {
    return () => {
      clearTimeout(timeid);
    };
  }, []);

  return (
    <>
      <div className={`result ${exams[1].status === 2 && showResult ? "show" : ""}`}>
        <h2>Bạn được 10 điểm. Chúc mừng bạn 🎉🎉🎉</h2>
      </div>

      <div className={`require-container ${!showResult ? "show" : ""}`}>
        <div className={`status-exam2 ${!showResult ? "show" : ""}`}>
          <span>{convertStatus(exams[1])}</span>
        </div>

        <h2>Bạn hãy phát âm các từ sau, quay video và gửi lên</h2>
        <div className="wrapper-img">
          <img className="img-require" src={require} alt="require" />
        </div>
        <div className="group-buttons-require">
          <FileUpload onSetFileName={setFileName} />
          {fileName && (
            <div className="group-buttons-submit-again">
              <Button onHandleClick={handleSubmit} className={`${!fileName ? "not-allow-submit" : ""}`}>
                Nộp bài
              </Button>
              <Button onHandleClick={onLearnAgain}>Học lại</Button>
              <Link to="/">
                <Button onHandleClick={onLearnAgain}>Trang chủ</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
