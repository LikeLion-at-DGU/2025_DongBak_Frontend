import styled from "styled-components";
export const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 25px;
`;
export const MAP = styled.div`
  width: 100vw;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ $bgImage }) => `url(${$bgImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  aspect-ratio: ${({ $bgImage }) =>
    $bgImage.includes("MAP1") ? "375 / 242" : "375 / 309"}; //원본비율 유지 !
`;

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(12, 1fr);
  z-index: 10;
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
  max-width: 25px;
  max-height: 25px;
`;

export const BoothLine = styled.div`
  display: flex;
  width: 90%;
  height: 1px;
  background: rgba(146, 165, 110, 0.5);
`;
