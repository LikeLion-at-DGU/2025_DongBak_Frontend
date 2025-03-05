import styled from "styled-components";
import { motion } from "framer-motion";
import { transparentize } from "polished";

export const Wrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  max-width: 540px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  top: ${({ $top }) => $top}px; /* ✅ 스크롤 위치 반영 */
`;

export const Background = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: -10vh;
  max-width: 540px;
  height: 120vh;
  background-color: ${({ theme }) => transparentize(0.6, theme.colors.gray200)};
`;

export const Sidebar = styled(motion.div)`
  width: 50%;
  position: absolute;
  right: 0;
  max-width: 270px;
  height: 120vh;
  top: -10vh;
  z-index: 12;
  background-color: ${({ theme }) => theme.colors.bg200};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: calc(8rem + 10vh);
`;

export const Image = styled.img`
  width: 50%;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(146, 165, 110, 0.5);
`;

export const HeaderContent = styled.div`
  ${({ theme }) => theme.fonts.SUITEB0};
  color: ${({ theme }) => theme.colors.green400};
  cursor: pointer;
`;

export const AboutUs = styled.div`
  ${({ theme }) => theme.fonts.SUITEB0};
  color: ${({ theme }) => theme.colors.green400};
  border-radius: 10px;
  background: rgba(200, 214, 176, 0.5);

  padding: 9px 30px;
  cursor: pointer;

  margin-top: 5rem;
`;
