import styled from "styled-components";

export const ButtonComp = styled.div`
  display: flex;
  width: 53px;
  height: 26px;
  justify-content: center;
  align-items: center;
  gap: 10.4px;
  border-radius: 52px;
  border: 1.04px solid
    ${({ $isClick, theme }) =>
      $isClick ? theme.colors.green400 : "rgba(87, 100, 58, 0.5)"};
  background: ${({ $isClick }) =>
    $isClick ? "rgba(200, 214, 176, 0.5)" : "#fbfbee"};
  color: ${({ $isClick, theme }) =>
    $isClick ? theme.colors.green400 : "rgba(87, 100, 58, 0.5)"};
  cursor: pointer;
`;
