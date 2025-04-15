import React, { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import "./StarExplosion.css";

const StarExplosion = ({ children }) => {
  const [stars, setStars] = useState([]);
  let newStars;

  const rootElement = document.documentElement;
  const rootFontSize = parseFloat(
    window.getComputedStyle(rootElement).fontSize
  );

  const handleClick = (e) => {
    const { clientX, clientY } = e;

    newStars = Array.from({ length: 5 }).map((_, index) => {
      return {
        id: Date.now() + Math.random(),
        x: clientX - 20,
        y: clientY - 20,
        dx: Math.random() * 600 - 300,
        dy: Math.random() * 600 - 300,
        rotate: Math.random() * 360,
        size:
          1.875 * rootFontSize +
          (index * (2.5 * rootFontSize - 0.9 * rootFontSize)) / 4,
      };
    });
    setStars((prev) => [...prev, ...newStars]);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStars((prev) => [...prev.filter((ele) => newStars?.includes(ele))]);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [stars]);

  const springs = useSprings(
    stars.length,
    stars.map((star) => ({
      from: {
        transform: `translate(0px, 0px) rotate(0deg) scale(0.5)`,
        opacity: 1,
      },
      to: {
        transform: `translate(${star.dx}px, ${star.dy}px) rotate(${star.rotate}deg) scale(1)`,
        opacity: 0,
      },
      config: { duration: 1500 },
    }))
  );

  return (
    <div className="star-container" onClick={handleClick}>
      {children}
      {springs.map((props, index) => (
        <animated.div
          key={stars[index].id}
          style={{
            position: "absolute",
            left: `${stars[index].x}px`,
            top: `${stars[index].y}px`,
            width: `${stars[index].size}px`,
            height: `${stars[index].size}px`,
            zIndex: 10000,
            ...props,
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="gold">
            <polygon points="50,10 61,38 90,38 66,58 75,90 50,72 25,90 34,58 10,38 39,38" />
          </svg>
        </animated.div>
      ))}
    </div>
  );
};

export default StarExplosion;
