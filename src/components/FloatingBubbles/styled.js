import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0% {
    transform: translateY(10vh) scale(1);
    opacity: 0;
  }
  30% {
    transform: translateY(-40vh) scale(1.1);
    opacity: 0.8;
  }
  70% {
    transform: translateY(-80vh) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-110vh) scale(1);
    opacity: 0;
  }
`;

export const BubbleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
`;

export const Bubble = styled.div`
  position: absolute;
  bottom: -10vh;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid white;
  background: rgba(186, 191, 243, 0.3);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: ${floatAnimation} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  opacity: ${({ opacity }) => opacity};
  filter: blur(3px);
`;
