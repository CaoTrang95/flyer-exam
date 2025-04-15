import "./Button.css";

export default function Button({ onHandleClick, children }) {
  return (
    <button className="button-statistic" onClick={onHandleClick}>
      {children}
    </button>
  );
}
