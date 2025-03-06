import { useState, useEffect } from "react";
import { boothPositions, manhaePositions } from "@constants/Booth/data";
import { PLACENAME, CATEGORYNAME } from "@constants/Booth/data";

export const useBoothSelection = () => {
  const [selectedPin, setSelectedPin] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(PLACENAME.MANHAE);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORYNAME.BOOTH);
  useEffect(() => {
    setSelectedPin(null);
  }, [selectedPlace]);

  const handlePinClick = (boothNum) => {
    if (!boothNum) return;
    setSelectedPin(boothNum);
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
