
import * as S from "./styled";

import { useLocation } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

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
  const [activeBoothNums, setActiveBoothNums] = useState([]);

  const location = useLocation();

  const SearchResult = location.state;
  console.log("테스틍틍", SearchResult);


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


  const day = isFirstDate ? 'wednesday' : 'thursday';


  const { boothList } = useBoothInfo(day);
  const { foodData } = useFoodTruckInfo(day);


  const foodList = foodData?.[selectedPlace] ?? [];

  const filteredBoothList = boothList?.[selectedPlace] ?? [];


  const searchBooths = SearchResult?.results?.booths || [];
  const searchFoodTrucks = SearchResult?.results?.food_trucks || [];
  const hasSearchResults =
    searchBooths.length > 0 || searchFoodTrucks.length > 0;

  const PlaceUpdate = useMemo(() => {
    if (!hasSearchResults) return null;

    if (searchBooths.some((booth) => booth.location === PLACENAME.PALJEONGDO)) {
      return PLACENAME.PALJEONGDO;
    }
    if (searchBooths.some((booth) => booth.location === PLACENAME.MANHAE)) {
      return PLACENAME.MANHAE;
    }

    return null;
  }, [hasSearchResults, searchBooths]);


  useEffect(() => {
    if (PlaceUpdate) {
      setSelectedPlace(PlaceUpdate);
      console.log("selectedPlace", PlaceUpdate);
    }
  }, [PlaceUpdate]);
  const displayedBoothList = useMemo(() => {
    if (hasSearchResults) {
      return searchBooths;
    }
    if (isSelectedFromMap && selectedPin) {
      return filteredBoothList.filter(
        (booth) => booth.booth_num === selectedPin
      );
    }
    return filteredBoothList;
  }, [hasSearchResults, isSelectedFromMap, selectedPin, filteredBoothList]);

  const displayedFoodList = useMemo(() => {
    if (hasSearchResults) {
      return searchFoodTrucks;
    }
    if (isSelectedFromMap && selectedPin) {
      return foodList.filter((booth) => booth.booth_num === selectedPin);
    }
    return foodList;
  }, [hasSearchResults, isSelectedFromMap, selectedPin, foodList]);

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
          <Header
            title={"부스안내"}
            isTrue={true}
            hasSearchResults={hasSearchResults}
          />
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
        selectedPins={hasSearchResults ? activeBoothNums : [selectedPin]}
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
              selectedCategory === CATEGORYNAME.FOODTRUCK ? 'food' : 'booth'
            }
            hasSearchResults={hasSearchResults}
            isSelectedFromMap={isSelectedFromMap}
            selectedBoothNum={selectedBoothNum}
            onSelectBoothFromList={onSelectBoothFromList}
            setActiveBoothNums={setActiveBoothNums}
          />
        )}
      </S.BoothDBox>
    </S.BoothContainer>
  );
};
