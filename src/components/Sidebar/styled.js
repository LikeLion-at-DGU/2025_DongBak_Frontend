import styled from 'styled-components';
import { motion } from 'framer-motion';
import { transparentize } from 'polished';

export const Wrapper = styled.div``;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => transparentize(0.6, theme.colors.gray200)};
`;

export const Sidebar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-bottom: 200px;

  position: fixed;
  right: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  z-index: 12;
  background-color: ${({ theme }) => theme.colors.bg200};
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
