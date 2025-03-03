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
import { WED_DAY, NO_DATA_MSG } from "@constants/common";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(customParseFormat);

export const Performance = () => {
  const nowTime = useNowTime();
  const now = dayjs(nowTime, "HH:mm");
  const [day, setDay] = useState(WED_DAY);
  // const [day, setDay] = useState(dayjs().format("dddd").toLowerCase());
  // TO-DO: 당일 코드
  const performanceData = usePerformanceData(day);

  return (
    <S.Container>
      <PerformanceHeader day={day} setDay={setDay} />
      <PerformanceContainer>
        {performanceData?.map((timeData, index) => {
          const start = dayjs(timeData.startTime, "HH:mm");
          const end = dayjs(timeData.endTime, "HH:mm");
          const isNow = now.isSameOrAfter(start) && now.isBefore(end);
          return (
            <PerformanceTimeTableItem
              key={index}
              time={timeData.startTime}
              isNow={isNow}
              title={`${timeData.category} | ${timeData.clubName}`}
              timeSchedule={`${timeData.startTime} ~ ${timeData.endTime}`}
              songs={
                timeData.songs.length > 1
                  ? timeData.songs.join(" | ")
                  : timeData.songs.length === 1
                  ? timeData.songs[0]
                  : NO_DATA_MSG
              }
              members={
                timeData.members.length > 1
                  ? timeData.members.join(" ﹒ ")
                  : timeData.members.length === 1
                  ? timeData.members[0]
                  : NO_DATA_MSG
              }
              instagramId={
                timeData.instagramId && timeData.instagramId !== "-"
                  ? `@${timeData.instagramId}`
                  : NO_DATA_MSG
              }
            />
          );
        })}
      </PerformanceContainer>
    </S.Container>
  );
};
