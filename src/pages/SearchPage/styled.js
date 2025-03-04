import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 540px;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg200};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const BoothContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transform: ${({ $isNothing }) => ($isNothing ? "translateY(-40px)" : "none")};
`;

export const BoothWrap = styled.div`
  width: 100%;
  cursor: pointer;
`;
