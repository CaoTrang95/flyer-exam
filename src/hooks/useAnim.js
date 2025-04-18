import { useEffect } from "react";

export function useAnim(targetName, beeRef, meoRef) {
  useEffect(() => {
    const target = document.getElementById(targetName);
    const targetRect = target?.getBoundingClientRect();

    let bounceInterval;

    var widthBee = beeRef.current.offsetWidth;
    var widthMeo = meoRef.current.offsetWidth;

    const rootElement = document.documentElement;
    const rootFontSize = parseFloat(window.getComputedStyle(rootElement).fontSize);
    const remInPixels = 0.625 * rootFontSize;

    const targetXBee = targetRect.left - widthBee - remInPixels;
    const targetYBee = targetRect.top - targetRect.height / 2 - widthBee / 2;

    const targetXMeo = targetRect.left - widthMeo - remInPixels;
    const targetYMeo = targetRect.top - targetRect.height / 2 - widthMeo / 2;

    beeRef.current.style.transform = `translate(${targetXBee}px, ${targetYBee}px)`;
    meoRef.current.style.transform = `translate(-${targetXMeo}px, ${targetYMeo}px)`;

    function bounce() {
      let up = true;
      bounceInterval = setInterval(() => {
        if (up) {
          beeRef.current.style.transform = `translate(${targetXBee}px, ${targetYBee - 3.75 * rootFontSize}px)`;
          meoRef.current.style.transform = `translate(-${targetXMeo}px, ${targetYMeo - 3.75 * rootFontSize}px)`;
        } else {
          beeRef.current.style.transform = `translate(${targetXBee}px, ${targetYBee}px)`;
          meoRef.current.style.transform = `translate(-${targetXMeo}px, ${targetYMeo}px)`;
        }
        up = !up;
      }, 800);
    }

    const timeid = setTimeout(bounce, 5000);

    return function () {
      clearTimeout(timeid);
      clearInterval(bounceInterval);
    };
  }, []);
}
