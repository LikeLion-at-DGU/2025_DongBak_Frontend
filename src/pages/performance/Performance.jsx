import * as S from "./styled";

import { PerformanceContainer } from "./_components/container/PerformanceContainer";
import { PerformanceHeader } from "./_components/header/PerformanceHeader";
import { PerformanceTimeTableItem } from "./_components/timeTableItem/PerformanceTimeTableItem";

import { TIME_SET } from "@constants/performaceData";
import { useNowTime } from "@hooks/useNowTime";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(customParseFormat);

export const Performance = () => {
  const nowTime = useNowTime();
  const now = dayjs(nowTime, "HH:mm");
  return (
    <S.Container>
      <PerformanceHeader />
      <PerformanceContainer>
        {TIME_SET.map((time, index) => {
          const start = dayjs(time, "HH:mm");
          const end = start.add(1, "hour");
          const isNow = now.isSameOrAfter(start) && now.isBefore(end);
          return (
            <PerformanceTimeTableItem key={index} time={time} isNow={isNow} />
          );
        })}
      </PerformanceContainer>
    </S.Container>
  );
};
