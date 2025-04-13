import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./RadioButton.css";

const RadioButton = ({ value, isChecked, onChange }) => {
  const springProps = useSpring({
    transform: isChecked ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <div onClick={onChange}>
      <label style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
        <animated.div
          style={{
            /* ...springProps,*/
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: isChecked ? "3px solid #32CD32" : "3px solid #ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <animated.div
            style={{
              ...springProps,
              width: isChecked ? "12px" : "0px",
              height: isChecked ? "12px" : "0px",
              borderRadius: "50%",
              backgroundColor: "#32CD32",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </animated.div>
        <span style={{ marginLeft: "8px" }}>{value}</span>
      </label>
    </div>
  );
};

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = ["Đáp án 1", "Đáp án 2", "Đáp án 3"];

  const handleChange = (value, event) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h3>Chọn một đáp án:</h3>
      <div className="container-radio-group">
        {options.map((option) => (
          <RadioButton
            key={option}
            value={option}
            isChecked={selectedValue === option}
            onChange={(event) => handleChange(option, event)}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
