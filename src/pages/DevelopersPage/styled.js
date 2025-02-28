import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 540px;
  gap: 100px;
  background: linear-gradient(180deg, #FFFFF9 11.97%, rgba(232, 237, 221, 0.40) 46.45%, rgba(238, 241, 229, 0.40) 62.41%, #FFFFF9 87.77%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const SloganImage = styled.div`
  width: 80%;
  max-width: 540px;
  background: url("/images/makers-slogan.svg") no-repeat center;
  background-size: cover;
  padding-top: 70%;
`;

export const LinktoMSITE = styled.div`
  ${({ theme }) => theme.fonts.SUITEO4};
  color: ${({ theme }) => theme.colors.black};
  width: 80%;
  display: flex;
  margin-top: 1rem;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

export const Icon13 = styled.img`
  width: 13px;
  height: 13px;
`;

export const CategoryTitle = styled.img`
  scale: 1.5;
  margin-bottom: 2rem;
`;

export const AboutUsText = styled.div`
  ${({ theme }) => theme.fonts.SUITEB3};
  color: ${({ theme }) => theme.colors.black};
`;

export const CardWrap = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;