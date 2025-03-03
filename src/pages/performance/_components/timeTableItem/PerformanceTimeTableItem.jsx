import { useState } from "react";
import * as S from "./styled";

import {
  PerformanceNowTime,
  PerformanceTimeType,
} from "../base/PerformancTime";
import { PerformanceCard } from "../base/PerformanceCard";

export const PerformanceTimeTableItem = ({ time, isNow }) => {
  const [isFirstCardOpen, setIsFirstCardOpen] = useState(false);
  const [isSecondCardOpen, setIsSecondCardOpen] = useState(false);
  return (
    <S.Wrapper>
      <PerformanceNowTime time={time} />
      <PerformanceTimeType />
      <S.DividerCircle src="/images/divider-circle.svg" />
      <S.TimeLine />
      <S.DividerLine />
      <S.CardWrapper>
        <PerformanceCard
          title={"test1"}
          isOpen={isFirstCardOpen}
          setStatus={() => setIsFirstCardOpen(!isFirstCardOpen)}
          isNow={isNow}
        />
        <PerformanceCard
          title={"test2"}
          isOpen={isSecondCardOpen}
          setStatus={() => setIsSecondCardOpen(!isSecondCardOpen)}
          isNow={isNow}
        />
      </S.CardWrapper>
    </S.Wrapper>
  );
};
