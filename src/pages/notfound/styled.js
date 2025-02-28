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
  background-color: ${({ theme }) => theme.colors.bg200};
  gap: 1.375rem;
`;
