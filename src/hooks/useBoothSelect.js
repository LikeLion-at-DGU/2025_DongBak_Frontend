import { useState, useEffect } from "react";
import { boothPositions, manhaePositions } from "../constants/Booth/data";

export const useBoothSelection = () => {
  const [selectedPin, setSelectedPin] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState("팔정도");
  const [selectedCategory, setSelectedCategory] = useState("부스");
  useEffect(() => {
    setSelectedPin(null);
  }, [selectedPlace]);

  const handlePinClick = (id) => {
    setSelectedPin((prev) => (prev === id ? null : id));
  };

  const boothPosition =
    selectedPlace === "팔정도" ? boothPositions : manhaePositions;

  return {
    selectedPin,
    selectedPlace,
    selectedCategory,
    handlePinClick,
    setSelectedPlace,
    setSelectedCategory,
    boothPosition,
  };
};
