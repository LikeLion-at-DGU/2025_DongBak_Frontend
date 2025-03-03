import * as S from "./styled";

import {
  PerformanceNowTime,
  PerformanceTimeType,
} from "../base/PerformancTime";
import { PerformanceCard } from "../base/PerformanceCard";

export const PerformanceTimeTableItem = () => {
  return (
    <S.Wrapper>
      <PerformanceNowTime time={"12:00"} />
      <PerformanceTimeType />
      <S.DividerCircle src="/images/divider-circle.svg" />
      <S.TimeLine />
      <S.DividerLine />
      <S.CardWrapper>
        <PerformanceCard title={"test1"} />
        <PerformanceCard title={"test2"} />
      </S.CardWrapper>
    </S.Wrapper>
  );
};
