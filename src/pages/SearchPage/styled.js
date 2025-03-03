import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 540px;
  height: 100vh; /* 화면 높이에 맞춰 변경 */
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg200};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoothContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transform: ${({ $isNothing }) => $isNothing ? "translateY(-40px)" : "none"}; 
`;