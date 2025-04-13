export default function Spinner({ size }) {
  const spinnerStyle = {
    width: size || "48px",
    height: size || "48px",
  };
  return (
    <div className={`spinnerContainer`}>
      <div className="spinner" style={spinnerStyle}></div>
    </div>
  );
}
