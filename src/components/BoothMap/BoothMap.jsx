import * as S from "./styled";
import MAP1 from "/images/map1.svg";
import MAP2 from "/images/map2.svg";
import mappin from "/images/mappin.svg";
import SlideBar2 from "/images/SlideBar2.svg";
import SlideBar from "/images/SlideBar.svg";

import { PLACENAME } from "@constants/Booth/data";

export const BoothMap = ({
  selectedPlace,
  boothPosition,
  selectedPin,
  handlePinClick,
}) => {
  return (
    <S.MapBox>
      <S.MAP $bgImage={selectedPlace === PLACENAME.PALJEONGDO ? MAP1 : MAP2}>
        <S.GridContainer
          $bgImage={selectedPlace === PLACENAME.PALJEONGDO ? MAP1 : MAP2}
        >
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
      <img
        src={selectedPlace === PLACENAME.PALJEONGDO ? SlideBar : SlideBar2}
      />
      <S.BoothLine />
    </S.MapBox>
  );
};
