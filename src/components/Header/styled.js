import styled from 'styled-components';
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  ${({ theme }) => theme.fonts.SUITEB0};
  color: ${({ theme }) => theme.colors.green400};

  margin-top: ${({ $isDev }) => ($isDev ? '2rem' : '0')};
`;

export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  margin-right: 22px;
  margin-left: auto;
`;

export const Image = styled.img``;

export const HamburgerBox = styled.div`
  z-index: 20;
`;
