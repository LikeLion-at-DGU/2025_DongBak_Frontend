import styled from 'styled-components';
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.fonts.SUITEB0};
  color: ${({ theme }) => theme.colors.green400};
  background-color: ${({ theme }) => theme.colors.bg300};
`;

export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const SecondImgBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  margin-right: 22px;
  margin-left: auto;
`;

export const FirstImgBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 22px;


export const Image = styled.img``;

export const HamburgerBox = styled.div`
  z-index: 20;

`;
