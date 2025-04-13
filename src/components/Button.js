import "./Button.css";

export default function Button({ onHandleClick, children }) {
  return <button onClick={onHandleClick}>{children}</button>;
}
