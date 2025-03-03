import * as S from "./styled";

import { Date } from "@components/Date/Date";
import {
  FIRST_DATE,
  FIRST_DAY,
  SECOND_DATE,
  SECOND_DAY,
} from "@constants/common";
export const DateSelector = ({ isFirstDate, setIsFirstDate }) => {
  return (
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
  );
};
