import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: min-content auto 1fr;
  grid-template-rows: auto auto;
  row-gap: 0.5rem;
  column-gap: 1.5rem;
  margin-bottom: 0.5rem;

  & > h2 {
    grid-column: 1 / 2;
    grid-row: 1/ 2;
    text-align: right;
    align-self: center;
  }

  & > h3 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    text-align: right;
    align-self: start;
  }
`;

export const DividerCircle = styled.img`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  place-self: center;
`;

export const TimeLine = styled.div`
  position: relative;
  width: 1.5px;
  background-color: ${({ theme }) =>
    transparentize(0.5, theme.colors.green200)};
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  place-self: stretch center;
`;

export const DividerLine = styled.div`
  height: 1.5px;
  background-color: ${({ theme }) => transparentize(0.7, theme.colors.black)};
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  place-self: center stretch;
`;

export const CardWrapper = styled.div`
  width: 100%;

  grid-column: 3 / 4;
  grid-row: 2 / 3;
  place-self: center center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ProgressDot = styled.img`
  position: absolute;
  transform: translateX(-45%);
  width: 1.5rem;
  height: 1.5rem;
  top: ${({ $progress }) => $progress};
  transition: top 0.5s ease-in-out;
`;
