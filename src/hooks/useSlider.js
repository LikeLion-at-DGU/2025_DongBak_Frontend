import { useState, useEffect, useRef } from "react";

export const useSlider = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    updateTranslateX();
    window.addEventListener("resize", updateTranslateX);
    return () => window.removeEventListener("resize", updateTranslateX);
  }, [currentIndex]);

  const updateTranslateX = () => {
    if (sliderContainerRef.current) {
      const containerWidth = sliderContainerRef.current.offsetWidth;
      setTranslateX(-currentIndex * containerWidth);
    }
  };

  const handleTouchStart = (e) => {
    sliderContainerRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX =
      e.changedTouches[0].clientX - sliderContainerRef.current.startX;
    if (deltaX < -50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (deltaX > 50) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return {
    currentIndex,
    translateX,
    sliderContainerRef,
    handleTouchStart,
    handleTouchEnd,
  };
};
