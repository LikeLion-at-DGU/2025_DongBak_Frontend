import styled from "styled-components";
export const BoothDContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 103px;
  padding: 10px 14px;
  flex-direction: row;
  gap: 10px;
  border-radius: 10px;
  background: #e4ebd8b2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const BoothDImg = styled.img`
  width: 120px;
  height: 90px;
  border-radius: 7.742px;
`;

export const TextBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
`;

export const MainText = styled.div`
  ${({ theme }) => theme.fonts.SUITEB1};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
`;

export const SubText = styled.div`
  ${({ theme }) => theme.fonts.SUITEM3};
  color: ${({ theme }) => theme.colors.gray};
  width: 100%;
`;
export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

export const TextDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;
export const TextDetail = styled.div`
  display: flex;
  flex-direction: row;
  height: 12px;
  align-items: center;
  gap: 4px;
`;

export const TextInfo = styled.div`
  ${({ theme }) => theme.fonts.SUITEM3};
  color: ${({ theme }) => theme.colors.black};
`;

//info

export const BoothDInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 20px;
`;
export const ClubInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
`;

export const ClubInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;

export const ClubTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.SUITEM3};
`;
export const BoothTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.SUITEB0};
`;

export const BoothInfoBox = styled.div`
  display: flex;
  padding: 13px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(200, 214, 176, 0.3);
`;
export const BoothDInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;
