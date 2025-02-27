import styled from "styled-components";

export const BoothContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbee;
  min-height: 100vh;
  min-width: 375px;
  max-width: 100%;
  width: 100%;
`;
export const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 28px;
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
  height: ${({ bgImage }) => (bgImage.includes("MAP1") ? "242px" : "309px")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: ${({ bgImage }) =>
    bgImage.includes("map1") ? "cover" : "contain"};
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
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 25px;
  gap: 20px;
`;
export const BoothDWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
