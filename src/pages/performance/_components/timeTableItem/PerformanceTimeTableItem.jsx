import { useState } from "react";
import dayjs from "dayjs";
import * as S from "./styled";

import {
  PerformanceNowTime,
  PerformanceTimeType,
} from "../base/PerformancTime";
import { PerformanceCard } from "../base/PerformanceCard";

export const PerformanceTimeTableItem = ({
  time,
  isNow,
  title,
  timeSchedule,
  songs,
  members,
  instagramId,
}) => {
  const [isFirstCardOpen, setIsFirstCardOpen] = useState(false);
  const [isSecondCardOpen, setIsSecondCardOpen] = useState(false);
  return (
    <S.Wrapper>
      <PerformanceNowTime time={time} />
      <PerformanceTimeType />
      <S.DividerCircle src="/images/divider-circle.svg" />
      <S.TimeLine>
        {isNow && (
          <S.ProgressDot
            src="/images/now.svg"
            $progress={`${(dayjs().minute() / 60) * 100}%`}
          />
        )}
      </S.TimeLine>
      <S.DividerLine />
      <S.CardWrapper>
        <PerformanceCard
          title={title}
          isOpen={isFirstCardOpen}
          setStatus={() => setIsFirstCardOpen(!isFirstCardOpen)}
          isNow={isNow}
          time={timeSchedule}
          songs={songs}
          members={members}
          instagramId={instagramId}
        />
        {/* <PerformanceCard
          title={"test2"}
          isOpen={isSecondCardOpen}
          setStatus={() => setIsSecondCardOpen(!isSecondCardOpen)}
          isNow={isNow}
        /> */}
      </S.CardWrapper>
    </S.Wrapper>
  );
};
