import * as S from "./styled";

import { useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

import { Header } from "@components/Header/Header";
import { useBoothSelection } from "@hooks/useBoothSelect";
import { useBoothInfo } from "@hooks/Booth/useBoothInfo";
import { useFoodTruckInfo } from "@hooks/Booth/useFoodTruckInfo";

import { DateSelector } from "@components/Selector/DateSelector";
import { PlaceSelector } from "@components/Selector/PlaceSelector";
import { CategorySelector } from "@components/Selector/CategorySelector";
import { BoothList } from "@components/BoothList/BoothList";
import { BoothMap } from "@components/BoothMap/BoothMap";
import { ErrorBox } from "@components/errorBox/ErrorBox";
import { CATEGORYNAME } from "@constants/Booth/data";
import { PLACENAME } from "@constants/Booth/data";
export const BoothPage = () => {
  const [isFirstDate, setIsFirstDate] = useState(true);
  const [isSelectedFromMap, setIsSelectedFromMap] = useState(false);
  const [selectedBoothNum, setSelectedBoothNum] = useState(null);

  const location = useLocation();
  const result = location.state;
  console.log("테스틍틍", result);

  const {
    selectedPin,
    selectedPlace,
    selectedCategory,
    handlePinClick,
    setSelectedPlace,
    setSelectedCategory,
    setSelectedPin,
    boothPosition,
  } = useBoothSelection();
  console.log("selectedPin", selectedPin);

  const day = isFirstDate ? "wednesday" : "thursday";

  console.log("day", day);
  const { boothList } = useBoothInfo(day);
  const { foodData } = useFoodTruckInfo(day);
  useEffect(() => {
    console.log("boothList", boothList);
    console.log("foodData", foodData);
  }, [isFirstDate]);

  const foodList = foodData?.[selectedPlace] ?? [];
  const filteredBoothList = boothList?.[selectedPlace] ?? [];

  useEffect(() => {
    console.log("filteredBoothList", filteredBoothList);
    console.log("foodList", foodList);
  }, [filteredBoothList, foodList, selectedPlace]);

  const displayedBoothList = useMemo(() => {
    if (isSelectedFromMap && selectedPin) {
      return filteredBoothList.filter(
        (booth) => booth.booth_num === selectedPin
      );
    }
    return filteredBoothList;
  }, [isSelectedFromMap, selectedPin, filteredBoothList]);

  const displayedFoodList = useMemo(() => {
    if (isSelectedFromMap && selectedPin) {
      return foodList.filter((booth) => booth.booth_num === selectedPin);
    }
    return foodList;
  }, [isSelectedFromMap, selectedPin, foodList]);

  const onSelectBoothFromMap = (boothNum) => {
    handlePinClick(boothNum);
    setIsSelectedFromMap(true);
    setSelectedBoothNum(null);
  };

  const onSelectBoothFromList = (boothNum) => {
    handlePinClick(boothNum);
    setSelectedBoothNum(boothNum);

    if (isSelectedFromMap) {
      setIsSelectedFromMap(true);
    }
  };
  const onClearSelection = () => {
    setSelectedPin(null);
    setSelectedBoothNum(null);
    setIsSelectedFromMap(false);
  };

  return (
    <S.BoothContainer>
      <S.HeaderBox>
        <S.FixedHeader>
          <Header title={"부스안내"} isTrue={true} />
        </S.FixedHeader>
        <S.HeaderWrapper>
          <DateSelector
            isFirstDate={isFirstDate}
            setIsFirstDate={setIsFirstDate}
          />
          <PlaceSelector
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
          />
        </S.HeaderWrapper>
      </S.HeaderBox>

      {/* 지도 */}
      <BoothMap
        selectedPlace={selectedPlace}
        boothPosition={boothPosition}
        selectedPin={selectedPin}
        onSelectBoothFromMap={onSelectBoothFromMap}
        onClearSelection={onClearSelection}
      />

      {/* 부스 상세 */}
      <S.BoothDBox>
        <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {selectedCategory === CATEGORYNAME.FOODTRUCK &&
        selectedPlace === PLACENAME.PALJEONGDO ? (
          <S.ErrorBoxContainer>
            <ErrorBox />
          </S.ErrorBoxContainer>
        ) : (
          <BoothList
            list={
              selectedCategory === CATEGORYNAME.FOODTRUCK
                ? displayedFoodList
                : displayedBoothList
            }
            type={
              selectedCategory === CATEGORYNAME.FOODTRUCK ? "food" : "booth"
            }
            isSelectedFromMap={isSelectedFromMap}
            selectedBoothNum={selectedBoothNum}
            onSelectBoothFromList={onSelectBoothFromList}
          />
        )}
      </S.BoothDBox>
    </S.BoothContainer>
  );
};
