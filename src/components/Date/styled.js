import styled from "styled-components";

export const DateContainer = styled.div`
  display: flex;
  width: 33px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: ${({ $isClick, theme }) =>
    $isClick ? theme.colors.green400 : "rgba(87, 100, 58, 0.5)"};
  cursor: pointer;
`;
export const DateNum = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.SUITEB1};
  color: ${({ $isClick, theme }) =>
    $isClick ? theme.colors.green400 : "rgba(87, 100, 58, 0.5)"};
`;
export const Date = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.SUITEM3};
  color: ${({ $isClick, theme }) =>
    $isClick ? theme.colors.green400 : "rgba(87, 100, 58, 0.5)"};
`;
