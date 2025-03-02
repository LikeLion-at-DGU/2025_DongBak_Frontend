import styled from "styled-components";

const Wrapper = styled.article`
  width: 100%;
  height: 100px;
  background-color: white;
  border-radius: 1.5rem;
  padding: 0.5rem 0.625rem;
`;

const PreviewCardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const CardImage = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1px white solid;
`;

const CardTitle = styled.div`
  ${({ theme }) => theme.fonts.SUITEO4};
  flex: 1;
`;

export const ArrowImage = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-left: auto;
`;

export const PerformanceCard = ({ title, time }) => {
  return (
    <Wrapper>
      <PreviewCardSection>
        <CardImage src="/images/makers-slogan.svg" />
        <CardTitle>{title}</CardTitle>
        <ArrowImage src="/images/arrow-down.svg" />
      </PreviewCardSection>
    </Wrapper>
  );
};
