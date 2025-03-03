import * as S from "./styled";

import { Btn } from "@components/Btn/Btn";
import { PLACENAME } from "@constants/Booth/data";
export const PlaceSelector = ({ selectedPlace, setSelectedPlace }) => {
  return (
    <S.BtnWrapper>
      {[PLACENAME.PALJEONGDO, PLACENAME.MANHAE].map((place) => (
        <Btn
          key={place}
          place={place}
          isClick={selectedPlace === place}
          onClick={() => setSelectedPlace(place)}
        />
      ))}
    </S.BtnWrapper>
  );
};
