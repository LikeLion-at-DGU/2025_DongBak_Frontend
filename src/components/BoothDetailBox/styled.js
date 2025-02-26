import styled from "styled-components";
export const BoothDContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 120px;
  padding: 9px 14px;
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
  padding: 0px 87px 3px 0px;
  align-items: flex-start;
  flex-direction: column;
`;

export const MainText = styled.div`
  ${({ theme }) => theme.fonts.SUITEB1};
  color: ${({ theme }) => theme.colors.black};
`;

export const SubText = styled.div`
  ${({ theme }) => theme.fonts.SUITEM3};
  color: ${({ theme }) => theme.colors.gray};
`;
export const TextContainer = styled.div`
  display: flex;
  padding: 0px 87px 3px 0px;
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
  align-self: stretch;
`;

export const TextInfo = styled.div`
  ${({ theme }) => theme.fonts.SUITEM3};
  color: ${({ theme }) => theme.colors.black};
`;
