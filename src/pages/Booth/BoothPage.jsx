import * as S from "./styled";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { BoothDetailBox } from "../../components/BoothDetailBox/BoothDetailBox";
import { Btn } from "../../components/Btn/Btn";
import { Date } from "../../components/Date/Date";
import { boothPositions, manhaePositions } from "../../constants/Booth/data";

import MAP1 from "/images/map1.svg";
import MAP2 from "/images/map2.svg";
import mappin from "/images/mappin.svg";
import SlideBar from "/images/SlideBar.svg";
import SlideBar2 from "/images/SlideBar2.svg";
import {
  FIRST_DATE,
  FIRST_DAY,
  SECOND_DATE,
  SECOND_DAY,
} from "@constants/common";

export const BoothPage = () => {
  const [selectedPin, setSelectedPin] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState("팔정도");
  const [isFirstDate, setIsFirstDate] = useState(true);

  useEffect(() => {
    setSelectedPin(null);
  }, [selectedPlace]);

  useEffect(() => {
    console.log("현재 선택된 핀 상태:", selectedPin);
  }, [selectedPin]);

  const boothData =
    selectedPlace === "팔정도" ? boothPositions : manhaePositions;

  return (
    <S.BoothContainer>
      <S.HeaderBox>
        <Header title={"부스안내"} isTrue={true} />
        <S.HeaderWrapper>
          <S.DateWrapper>
            <Date
              date={FIRST_DATE}
              day={FIRST_DAY}
              isClick={isFirstDate}
              onClick={() => !isFirstDate && setIsFirstDate(true)}
            />
            <Date
              date={SECOND_DATE}
              day={SECOND_DAY}
              isClick={!isFirstDate}
              onClick={() => isFirstDate && setIsFirstDate(false)}
            />
          </S.DateWrapper>

          <S.BtnWrapper>
            <Btn
              place={"팔정도"}
              isClick={selectedPlace === "팔정도"}
              onClick={() => setSelectedPlace("팔정도")}
            />
            <Btn
              place={"만해광장"}
              isClick={selectedPlace === "만해광장"}
              onClick={() => setSelectedPlace("만해광장")}
            />
          </S.BtnWrapper>
        </S.HeaderWrapper>
      </S.HeaderBox>
      <S.MapBox>
        <S.MAP bgImage={selectedPlace === "팔정도" ? MAP1 : MAP2}>
          <S.GridContainer bgImage={selectedPlace === "팔정도" ? MAP1 : MAP2}>
            {boothData.map(
              ({ id, columnStart, columnEnd, rowStart, rowEnd }) => (
                <S.GridArea
                  key={id}
                  style={{
                    gridColumn: `${columnStart} / ${columnEnd}`,
                    gridRow: `${rowStart} / ${rowEnd}`,
                  }}
                  onClick={() => {
                    setSelectedPin(selectedPin === id ? null : id);
                  }}
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
