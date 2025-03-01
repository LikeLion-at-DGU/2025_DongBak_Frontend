import { useState, useEffect } from "react";
import { boothPositions, manhaePositions } from "../constants/Booth/data";

export const useBoothSelection = () => {
  const [selectedPin, setSelectedPin] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState("팔정도");
  const [selectedDate, setSelectedDate] = useState({ 5: true, 6: false });
  const [selectedCategory, setSelectedCategory] = useState("부스");
  useEffect(() => {
    setSelectedPin(null);
  }, [selectedPlace]);

  const handleDateClick = (dateNum) => {
    setSelectedDate({ 5: dateNum === "5", 6: dateNum === "6" });
  };

  const handlePinClick = (id) => {
    setSelectedPin((prev) => (prev === id ? null : id));
  };

  const boothPosition =
    selectedPlace === "팔정도" ? boothPositions : manhaePositions;

  return {
    selectedPin,
    selectedPlace,
    selectedDate,
    selectedCategory,
    handleDateClick,
    handlePinClick,
    setSelectedPlace,
    setSelectedCategory,
    boothPosition,
  };
};
