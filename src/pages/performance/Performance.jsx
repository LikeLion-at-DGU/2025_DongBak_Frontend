import * as S from "./styled";

import { PerformanceContainer } from "./_components/container/PerformanceContainer";
import { PerformanceHeader } from "./_components/header/PerformanceHeader";
import { PerformanceTimeTableItem } from "./_components/timeTableItem/PerformanceTimeTableItem";

import { useNowTime } from "@hooks/useNowTime";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import { usePerformanceData } from "@hooks/usePerformanceData";
import { Footer } from "@components/footer/Footer";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(customParseFormat);

export const Performance = () => {
  const nowTime = useNowTime();
  const now = dayjs(nowTime, "HH:mm");
  const [day, setDay] = useState(dayjs().format("dddd").toLowerCase());
  const performanceData = usePerformanceData(day);

  return (
    <S.Container>
      <PerformanceHeader day={day} setDay={setDay} />
      <PerformanceContainer key={day}>
        {performanceData?.map(({ time, performances }, index) => {
          const isNow = now.isSame(dayjs(time, "HH:mm"), "hour");
          return (
            <PerformanceTimeTableItem
              key={index}
              nowTime={now}
              time={time}
              sNow={dayjs().format("dddd").toLowerCase() === day && isNow}
              firstCard={performances[0]}
              secondCard={performances[1] ?? null}
            />
          );
        })}
      </PerformanceContainer>
      <Footer />
    </S.Container>
  );
};
