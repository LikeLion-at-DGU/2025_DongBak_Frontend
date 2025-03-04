import * as S from './styled';

import { useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

import { Header } from '@components/Header/Header';
import { useBoothSelection } from '@hooks/useBoothSelect';
import { useBoothInfo } from '@hooks/Booth/useBoothInfo';
import { useFoodTruckInfo } from '@hooks/Booth/useFoodTruckInfo';
import { DateSelector } from '@components/Selector/DateSelector';
import { PlaceSelector } from '@components/Selector/PlaceSelector';
import { CategorySelector } from '@components/Selector/CategorySelector';
import { BoothList } from '@components/BoothList/BoothList';
import { BoothMap } from '@components/BoothMap/BoothMap';
import { ErrorBox } from '@components/errorBox/ErrorBox';
import { CATEGORYNAME } from '@constants/Booth/data';
import { PLACENAME } from '@constants/Booth/data';
import { Footer } from '@components/footer/Footer';

export const BoothPage = () => {
  const [isFirstDate, setIsFirstDate] = useState(true);
  const [isSelectedFromMap, setIsSelectedFromMap] = useState(false);
  const [selectedBoothNum, setSelectedBoothNum] = useState(null);
  const [activeBoothNums, setActiveBoothNums] = useState([]);

  const location = useLocation();
  const searchResult = location.state;

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

  useEffect(() => {
    console.log('안녕어어어어어 ', searchResult);
  }, [searchResult]);

  const day = isFirstDate ? 'wednesday' : 'thursday';

  console.log('day', day);
  const { boothList } = useBoothInfo(day);
  const { foodData } = useFoodTruckInfo(day);

  useEffect(() => {
    setSelectedPin(null);
    setSelectedBoothNum(null);
  }, [boothList, foodData]); // ✅ boothList가 변경될 때마다 실행

  const foodList = foodData?.[selectedPlace] ?? [];
  const filteredBoothList = boothList?.[selectedPlace] ?? [];

  const searchBooths = useMemo(() => {
    if (Array.isArray(searchResult?.results?.booths)) {
      return searchResult.results.booths;
    }
    return searchResult?.booth ? [searchResult.booth] : [];
  }, [searchResult]);

  const searchFoodTrucks = searchResult?.results?.food_trucks || [];
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
      console.log('selectedPlace', PlaceUpdate);
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
        <Header
          title={'부스안내'}
          isTrue={true}
          hasSearchResults={hasSearchResults}
        />
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
      <Footer />
    </S.BoothContainer>
  );
};
