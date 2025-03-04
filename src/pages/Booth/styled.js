import styled from "styled-components";

export const BoothContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg300};
  min-height: 100vh;
  min-width: 375px;
  max-width: 100vw;
  width: 100%;
  /* padding-bottom: 25px; */
`;
export const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 28px;
`;
export const FixedHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.bg300};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 414px;
  height: 60px;
  z-index: 20;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 7px;
`;

export const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 25px;
`;

export const MAP = styled.div`
  min-width: 375px;
  width: 100%;
  max-width: 100%;
  height: ${({ $bgImage }) => ($bgImage.includes("MAP1") ? "242px" : "309px")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ $bgImage }) => `url(${$bgImage})`};
  background-size: ${({ $bgImage }) =>
    $bgImage.includes("map1") ? "cover" : "contain"};
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;
export const GridContainer = styled.div`
  min-width: 375px;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

export const GridArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const GridItem = styled.img`
  cursor: pointer;
  justify-self: center;
  align-self: center;
`;

export const BoothLine = styled.div`
  display: flex;
  width: 90%;
  height: 1px;
  background: rgba(146, 165, 110, 0.5);
`;
export const BoothDBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 25px;
  gap: 20px;
  padding-bottom: 1.5rem;
`;
export const BoothDWrapper = styled.div`
  display: flex;
  max-height: 300px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

//detail

export const BoothDHeader = styled.div`
  display: flex;
  width: 341px;
  padding-top: 1rem;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.fonts.SUITEB0};
  color: ${({ theme }) => theme.colors.green400};
`;

export const Indicators = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 17px;
`;
export const Dot = styled.div`
  width: ${({ $active }) => ($active ? "25px" : "6px")};
  height: 6px;
  border-radius: 8px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.green300 : " rgba(182, 201, 155, 0.5)"};
  transition: all 0.3s ease;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 27px;
  gap: 25px;
`;
///

export const SliderContainer = styled.div`
  margin-top: 21px;
  position: relative;
  width: 100%;
  max-width: 500px;
  min-height: 300px;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-out;
  will-change: transform;
`;

export const SlideContent = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
`;
export const ErrorBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
