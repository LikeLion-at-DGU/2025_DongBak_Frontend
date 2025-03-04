import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 540px;

  height: ${({ $isBoothPage }) => ($isBoothPage ? "100%" : "100vh")};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $isBoothPage }) =>
    $isBoothPage ? theme.colors.bg300 : theme.colors.bg200};
  gap: 1.375rem;
`;

export const Emoji = styled.img`
  margin-bottom: 1rem;
`;

export const WarningTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WarningText = styled.div`
  ${({ theme }) => theme.fonts.SUITEB2};
`;

export const SubWarningText = styled.div`
  ${({ theme }) => theme.fonts.SUITEM3};
  color: ${({ theme, $isBoothPage }) =>
    $isBoothPage
      ? transparentize(0.2, theme.colors.black)
      : theme.colors.black};

  text-align: center;
`;
