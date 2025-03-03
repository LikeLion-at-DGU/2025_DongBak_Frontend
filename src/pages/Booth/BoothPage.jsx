import * as S from "./styled";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

import { Header } from "@components/Header/Header";
import { useBoothSelection } from "@hooks/useBoothSelect";
import { useBoothInfo } from "@hooks/Booth/useBoothInfo";
import { useFoodTruckInfo } from "@hooks/Booth/useFoodTruckInfo";
import useCustomNavigate from "@hooks/useCustomNavigate";

import { DateSelector } from "@components/Selector/DateSelector";
import { PlaceSelector } from "@components/Selector/PlaceSelector";
import { CategorySelector } from "@components/Selector/CategorySelector";
import { BoothList } from "@components/BoothList/BoothList";
import { BoothMap } from "@components/BoothMap/BoothMap";

import { CATEGORYNAME } from "@constants/Booth/data";
import { PLACENAME } from "@constants/Booth/data";
export const BoothPage = () => {
  const { goToPage } = useCustomNavigate();
  const [isFirstDate, setIsFirstDate] = useState(true);

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

  const displayedBoothList = useMemo(
    () =>
      selectedPin
        ? filteredBoothList.filter((booth) => booth.id === selectedPin)
        : filteredBoothList,
    [selectedPin, filteredBoothList]
  );

  const displayedFoodList = useMemo(
    () =>
      selectedPin
        ? foodList.filter((booth) => booth.id === selectedPin)
        : foodList,
    [selectedPin, foodList]
  );

  return (
    <S.BoothContainer>
      <S.HeaderBox>
        <Header title={"부스안내"} isTrue={true} />
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
        handlePinClick={handlePinClick}
      />

      {/* 부스 상세 */}
      <S.BoothDBox>
        <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {selectedCategory === CATEGORYNAME.FOODTRUCK &&
        selectedPlace === PLACENAME.PALJEONGDO ? (
          <div>팔정도에용</div>
        ) : (
          <BoothList
            list={
              selectedCategory === CATEGORYNAME.FOODTRUCK
                ? displayedFoodList
                : displayedBoothList
            }
            goToPage={goToPage}
            type={
              selectedCategory === CATEGORYNAME.FOODTRUCK ? "food" : "booth"
            }
          />
        )}
      </S.BoothDBox>
    </S.BoothContainer>
  );
};
