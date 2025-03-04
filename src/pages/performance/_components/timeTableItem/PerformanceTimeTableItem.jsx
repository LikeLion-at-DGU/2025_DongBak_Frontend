import { useState } from "react";
import dayjs from "dayjs";
import * as S from "./styled";

import {
  PerformanceNowTime,
  PerformanceTimeType,
} from "../base/PerformancTime";
import { PerformanceCard } from "../base/PerformanceCard";
import { NO_DATA_MSG } from "@constants/common";

import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export const PerformanceTimeTableItem = ({
  nowTime,
  time,
  isNow,
  firstCard,
  secondCard,
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
          title={firstCard.category + " | " + firstCard.clubName}
          isOpen={isFirstCardOpen}
          setStatus={() => setIsFirstCardOpen(!isFirstCardOpen)}
          isNow={
            isNow &&
            dayjs(nowTime, "HH:mm").isBetween(
              dayjs(firstCard.startTime, "HH:mm"),
              dayjs(firstCard.endTime, "HH:mm"),
              "minute",
              "[]"
            )
          }
          time={firstCard.startTime + " ~ " + firstCard.endTime}
          songs={
            firstCard.songs.length > 0
              ? firstCard.songs.map(({ name }) => name).join()
              : NO_DATA_MSG
          }
          members={
            firstCard.members.length > 0
              ? firstCard.members.map(({ name }) => name).join()
              : NO_DATA_MSG
          }
          instagramId={
            firstCard.instagramId && firstCard.instagramId !== "-"
              ? `@${firstCard.instagramId}`
              : NO_DATA_MSG
          }
          imageUrl={firstCard.logo ?? null}
        />

        {secondCard && (
          <PerformanceCard
            title={secondCard.category + " | " + secondCard.clubName}
            isOpen={isSecondCardOpen}
            setStatus={() => setIsSecondCardOpen(!isSecondCardOpen)}
            isNow={
              isNow &&
              dayjs(nowTime, "HH:mm").isBetween(
                dayjs(secondCard.startTime, "HH:mm"),
                dayjs(secondCard.endTime, "HH:mm"),
                "minute",
                "[]"
              )
            }
            time={secondCard.startTime + " ~ " + secondCard.endTime}
            songs={
              secondCard.songs.length > 0
                ? secondCard.songs.map(({ name }) => name).join()
                : NO_DATA_MSG
            }
            members={
              secondCard.members.length > 0
                ? secondCard.members.map(({ name }) => name).join()
                : NO_DATA_MSG
            }
            instagramId={
              secondCard.instagramId && secondCard.instagramId !== "-"
                ? `@${secondCard.instagramId}`
                : NO_DATA_MSG
            }
            imageUrl={secondCard.logo ?? null}
          />
        )}
      </S.CardWrapper>
    </S.Wrapper>
  );
};
