import * as S from "./styled";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { BoothDetailBox } from "../../components/BoothDetailBox/BoothDetailBox";
import { Btn } from "../../components/Btn/Btn";
import { Date } from "../../components/Date/Date";
import { useBoothSelection } from "../../hooks/useBoothSelect";
import MAP1 from "../../../public/images/map1.svg";
import MAP2 from "../../../public/images/map2.svg";
import mappin from "../../../public/images/mappin.svg";
import SlideBar from "../../../public/images/SlideBar.svg";
import SlideBar2 from "../../../public/images/SlideBar2.svg";

export const BoothPage = () => {
  const {
    selectedPin,
    selectedPlace,
    selectedDate,
    handleDateClick,
    handlePinClick,
    setSelectedPlace,
    boothData,
  } = useBoothSelection();

  return (
    <S.BoothContainer>
      <S.HeaderBox>
        <Header Title={"부스안내"} isTrue={true} />
        <S.HeaderWrapper>
          <S.DateWrapper>
            {["5", "6"].map((num) => (
              <Date
                key={num}
                DateNum={num}
                Date={num === "5" ? "WED" : "THR"}
                isClick={selectedDate[num]}
                onClick={() => handleDateClick(num)}
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
            {boothData.map(
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
          <Btn place={"부스"} isClick={true} />
          <Btn place={"푸드트럭"} isClick={false} />
        </S.BtnWrapper>
        <S.BoothDWrapper>
          <BoothDetailBox />
        </S.BoothDWrapper>
      </S.BoothDBox>
    </S.BoothContainer>
  );
};
