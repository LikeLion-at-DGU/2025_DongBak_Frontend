import styled from "styled-components";
import { transparentize } from "polished";

const TimeText = styled.h2`
  ${({ theme }) => theme.fonts.SUITE03}
`;

const TypeText = styled.h3`
  ${({ theme }) => theme.fonts.SUITEB4};
  color: ${({ theme }) => transparentize(0.7, theme.colors.black)};
`;

export const PerformanceNowTime = ({ time }) => {
  return <TimeText>{time}</TimeText>;
};

export const PerformanceTimeType = ({ isAM = false }) => {
  return <TypeText>{isAM ? "AM" : "PM"}</TypeText>;
};
