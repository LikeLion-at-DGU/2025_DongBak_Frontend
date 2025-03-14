import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  ${({ theme }) => theme.fonts.SUITEB0};
  color: ${({ theme }) => theme.colors.green400};
`;

export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const FirstImgBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 22px;
`;
export const SecondImgBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  margin-right: 22px;
  margin-left: auto;
`;

export const Image = styled.img``;

export const HamburgerBox = styled(motion.div)`
  z-index: 20;
  position: relative;
`;
