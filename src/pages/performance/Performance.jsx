import * as S from "./styled";

import { PerformanceContainer } from "./_components/container/PerformanceContainer";
import { PerformanceHeader } from "./_components/header/PerformanceHeader";
import { PerformanceTimeTableItem } from "./_components/timeTableItem/PerformanceTimeTableItem";

import { TIME_SET } from "@constants/performaceData";

export const Performance = () => {
  return (
    <S.Container>
      <PerformanceHeader />
      <PerformanceContainer>
        {TIME_SET.map((time, index) => (
          <PerformanceTimeTableItem time={time} key={index} />
        ))}
      </PerformanceContainer>
    </S.Container>
  );
};
