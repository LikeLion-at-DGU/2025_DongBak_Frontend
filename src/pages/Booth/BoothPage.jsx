import * as S from "./styled";
import { Header } from "../../components/Header/Header";
import { BoothDetailBox } from "../../components/BoothDetailBox/BoothDetailBox";
import { Btn } from "../../components/Btn/Btn";
import { Date } from "../../components/Date/Date";
import { useBoothSelection } from "../../hooks/useBoothSelect";
import { useBoothInfo } from "../../hooks/Booth/useBoothInfo";
import { useFoodTruckInfo } from "../../hooks/Booth/useFoodTruckInfo";
import useCustomNavigate from "../../hooks/useCustomNavigate";
import MAP1 from "../../../public/images/map1.svg";
import MAP2 from "../../../public/images/map2.svg";
import mappin from "../../../public/images/mappin.svg";
import SlideBar from "../../../public/images/SlideBar.svg";
import SlideBar2 from "../../../public/images/SlideBar2.svg";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  FIRST_DATE,
  FIRST_DAY,
  SECOND_DATE,
  SECOND_DAY,
} from "@constants/common";

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

  const day = isFirstDate ? FIRST_DAY : SECOND_DAY;

  console.log("day", day);
  const { boothList } = useBoothInfo(day);
  const { foodData } = useFoodTruckInfo(day);
  useEffect(() => {
    console.log("boothList", boothList);
    console.log("foodData", foodData);
  }, [isFirstDate]);

  const foodList =
    foodData && foodData?.[0]?.[selectedPlace]
      ? foodData[0]?.[selectedPlace]
      : [];

  const filteredBoothList =
    boothList && boothList[0]?.[selectedPlace]
      ? boothList[0]?.[selectedPlace]
      : [];

  useEffect(() => {
    console.log("filteredBoothList", filteredBoothList);
    console.log("foodList", foodList);
  }, [filteredBoothList, foodList, selectedPlace]);

  const displayedBoothList = selectedPin
    ? filteredBoothList?.filter((booth) => booth.id === selectedPin)
    : filteredBoothList;
  const displayedFoodList = selectedPin
    ? foodList?.filter((booth) => booth.id === selectedPin)
    : foodList;

  return (
    <S.BoothContainer>
      <S.HeaderBox>
        <Header title={"부스안내"} isTrue={true} />
        <S.HeaderWrapper>
          <S.DateWrapper>
            {[FIRST_DATE, SECOND_DATE].map((num, index) => (
              <Date
                key={num}
                date={num}
                day={index === 0 ? FIRST_DAY : SECOND_DAY}
                isClick={index === 0 ? isFirstDate : !isFirstDate}
                onClick={() => setIsFirstDate(index === 0)}
              />
            ))}
          </S.DateWrapper>

          <S.BtnWrapper>
            {["팔정도", "만해광장"].map((place) => (
              <Btn
                key={place}
                place={place}
                isClick={selectedPlace === place}
                onClick={() => setSelectedPlace(place)}
              />
            ))}
          </S.BtnWrapper>
        </S.HeaderWrapper>
      </S.HeaderBox>

      {/* 지도 */}
      <S.MapBox>
        <S.MAP $bgImage={selectedPlace === "팔정도" ? MAP1 : MAP2}>
          <S.GridContainer $bgImage={selectedPlace === "팔정도" ? MAP1 : MAP2}>
            {boothPosition.map(
              ({ id, columnStart, columnEnd, rowStart, rowEnd }) => (
                <S.GridArea
                  key={id}
                  style={{
                    gridColumn: `${columnStart} / ${columnEnd}`,
                    gridRow: `${rowStart} / ${rowEnd}`,
                  }}
                  onClick={() => handlePinClick(id)}
                >
                  <S.GridItem
                    src={mappin}
                    style={{
                      display: selectedPin === id ? "block" : "none",
                    }}
                  />
                </S.GridArea>
              )
            )}
          </S.GridContainer>
        </S.MAP>
        <img src={selectedPlace === "팔정도" ? SlideBar : SlideBar2} />
        <S.BoothLine />
      </S.MapBox>

      {/* 부스 상세 */}
      <S.BoothDBox>
        <S.BtnWrapper style={{ justifyContent: "flex-start" }}>
          {["부스", "푸드트럭"].map((category) => (
            <Btn
              key={category}
              place={category}
              isClick={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </S.BtnWrapper>
        <S.BoothDWrapper>
          {selectedCategory === "푸드트럭"
            ? displayedFoodList.map((food) => (
                <BoothDetailBox
                  key={food.id}
                  booth={food}
                  selectedDate={isFirstDate}
                  onClick={() => goToPage(`/food/${food.id}`)}
                />
              ))
            : displayedBoothList?.map((booth) => (
                <BoothDetailBox
                  key={booth.id}
                  booth={booth}
                  onClick={() => goToPage(`/booth/${booth.id}`)}
                />
              ))}
        </S.BoothDWrapper>
      </S.BoothDBox>
    </S.BoothContainer>
  );
};
