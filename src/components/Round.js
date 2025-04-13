import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Checkbox.css";

const Round = () => {
  const [checked, setChecked] = useState(false);

  const radius = 15;
  const circumference = 2 * Math.PI * radius;

  const { strokeDashoffset } = useSpring({
    strokeDashoffset: checked ? 0 : circumference,
    config: { duration: 300 },
  });

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="checkbox-container" onClick={handleCheckboxChange}>
      <svg width="50" height="50" className="circle">
        {/* Vòng tròn khoanh quanh chữ "A" */}
        <animated.circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#32CD32"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
        <text x="25" y="30" textAnchor="middle" fontSize="20" fill="#endregion" fontWeight="bold">
          A
        </text>
      </svg>
    </div>
  );
};

export default Round;
