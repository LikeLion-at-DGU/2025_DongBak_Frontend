import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 540px;
  height: 100vh; /* 화면 높이에 맞춰 변경 */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.375rem;
`;

export const Emoji = styled.img`
  margin-bottom: 1rem;
`;

export const WarningText = styled.div`
  ${({ theme }) => theme.fonts.SUITEB2};
`;

export const SubWarningText = styled.div`
  ${({ theme }) => theme.fonts.SUITEM3};
  text-align: center;
`;