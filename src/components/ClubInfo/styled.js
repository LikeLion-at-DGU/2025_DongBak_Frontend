import styled from "styled-components";
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  gap: 20px;
`;
export const Title = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.SUITEB2};
`;
export const LionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`;
export const LionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;

export const MainInfo = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.SUITEB5};
`;
export const SubInfo = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.SUITEM4};
`;

export const LionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px;
  justify-content: flex-start;
  gap: 13px;
  border-radius: 5px;
  background-color: rgba(200, 214, 176, 0.3);
`;
export const ClubImg = styled.img`
  width: 75px;
  height: 75px;
  object-fit: contain;
`;
//recruit
export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;
export const TextInfo = styled.div`
  ${({ theme }) => theme.fonts.SUITEM3};
  color: ${({ theme }) => theme.colors.black};
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;
export const FirstText = styled.div`
  ${({ theme }) => theme.fonts.SUITEM3};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  min-width: 20%;
`;
