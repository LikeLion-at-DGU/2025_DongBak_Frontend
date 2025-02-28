import * as S from "./styled";
import { useState } from "react";

import { Header } from "@components/Header/Header";
import {
  FIRST_DATE,
  FIRST_DAY,
  SECOND_DATE,
  SECOND_DAY,
} from "@constants/common";
import { PERFORMANCE_TITLE } from "@constants/performaceData";
import { Date } from "@components/Date/Date";

export const PerformanceHeader = () => {
  const [isFirstDate, setIsFirstDate] = useState(true);

  return (
    <S.Wrapper>
      <Header title={PERFORMANCE_TITLE} />
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
    </S.Wrapper>
  );
};
