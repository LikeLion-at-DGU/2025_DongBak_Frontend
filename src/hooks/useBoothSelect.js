import { useState, useEffect } from "react";
import { boothPositions, manhaePositions } from "@constants/Booth/data";
import { PLACENAME, CATEGORYNAME } from "@constants/Booth/data";

export const useBoothSelection = () => {
  const [selectedPin, setSelectedPin] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(PLACENAME.PALJEONGDO);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORYNAME.BOOTH);
  useEffect(() => {
    setSelectedPin(null);
  }, [selectedPlace]);

  const handlePinClick = (boothNum) => {
    if (!boothNum) return; // ✅ boothNum이 없으면 실행하지 않음
    setSelectedPin(boothNum); // ✅ 선택된 핀 유지
  };

  const boothPosition =
    selectedPlace === PLACENAME.PALJEONGDO ? boothPositions : manhaePositions;

  return {
    selectedPin,
    selectedPlace,
    selectedCategory,
    handlePinClick,
    setSelectedPlace,
    setSelectedCategory,
    setSelectedPin,
    boothPosition,
  };
};
