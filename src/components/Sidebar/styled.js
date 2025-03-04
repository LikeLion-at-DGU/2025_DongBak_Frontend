import styled from "styled-components";
import { motion } from "framer-motion";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  max-width: 540px;
  min-height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

export const Background = styled.div`
  width: 50%;
  max-width: 270px;
  height: 100vh;
  background-color: ${({ theme }) => transparentize(0.6, theme.colors.gray200)};
`;

export const Sidebar = styled(motion.div)`
  width: 50%;
  max-width: 270px;
  height: 100vh;
  z-index: 12;
  background-color: ${({ theme }) => theme.colors.bg200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-bottom: 200px;
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
  position: absolute;
  border-radius: 10px;
  background: rgba(200, 214, 176, 0.5);

  padding: 9px 30px;
  bottom: 30px;
  cursor: pointer;
`;
