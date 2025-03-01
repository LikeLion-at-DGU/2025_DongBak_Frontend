import { PerformanceContainer } from "./_components/container/PerformanceContainer";
import { PerformanceHeader } from "./_components/header/PerformanceHeader";
import { PerformanceTimeTableItem } from "./_components/timeTableItem/PerformanceTimeTableItem";
import * as S from "./styled";

export const Performance = () => {
  return (
    <S.Container>
      <PerformanceHeader />
      <PerformanceContainer>
        <PerformanceTimeTableItem />
        <PerformanceTimeTableItem />
        <PerformanceTimeTableItem />
      </PerformanceContainer>
    </S.Container>
  );
};
