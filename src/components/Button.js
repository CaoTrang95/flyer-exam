import "./Button.css";

export default function Button({ onHandleClick, children, className }) {
  return (
    <button className={`button-statistic ${className}`} onClick={onHandleClick}>
      {children}
    </button>
  );
}
