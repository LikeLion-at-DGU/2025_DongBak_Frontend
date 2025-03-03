import styled from "styled-components";
import { transparentize } from "polished";

const Wrapper = styled.article`
  width: 100%;
  background-color: ${({ $isNow, theme }) =>
    $isNow ? transparentize(0.5, theme.colors.green200) : theme.colors.white};
  border-radius: 1.5rem;
  padding: 0.5rem 0;
`;

const PreviewCardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 0 0.625rem;
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

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

const DescriptionText = styled.p`
  color: ${({ $isBlack, theme }) =>
    $isBlack ? theme.colors.black : transparentize(0.3, theme.colors.black)};
  ${({ theme }) => theme.fonts.SUITE10};
  word-break: break-word;
  white-space: pre-wrap;
  flex: 1;
`;

const ArrowImage = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-left: auto;
`;

const DetailDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Icon = styled.img`
  margin-top: 2px;
  width: 0.75rem;
  height: 0.75rem;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) =>
    transparentize(0.7, theme.colors.green200)};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const DetailCardSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 0.25rem;
`;

export const PerformanceCard = ({
  title,
  time = "12:00 ~ 12:30",
  isOpen = false,
  isNow = false,
  setStatus,
}) => {
  return (
    <Wrapper $isNow={isNow}>
      <PreviewCardSection>
        <CardImage src="/images/makers-slogan.svg" />
        <div>
          <CardTitle>{title}</CardTitle>
          <TimeWrapper>
            <img src="/images/clock1.svg" alt="시계" />
            <DescriptionText $isBlack={false}>{time}</DescriptionText>
          </TimeWrapper>
        </div>
        <ArrowImage
          src={isOpen ? "/images/arrow-up.svg" : "/images/arrow-down.svg"}
          onClick={setStatus}
        />
      </PreviewCardSection>
      {isOpen && (
        <>
          <Separator />
          <DetailCardSection>
            <DetailDescriptionWrapper>
              <Icon src="/images/record.svg" />
              <DescriptionText $isBlack={true}>
                testsdfsdfdsfdsfdsfdsfdsfdsfsdfdsfdsfdsfdsfs
              </DescriptionText>
            </DetailDescriptionWrapper>
            <DetailDescriptionWrapper>
              <Icon src="/images/user.svg" />
              <DescriptionText $isBlack={true}>test</DescriptionText>
            </DetailDescriptionWrapper>
            <DetailDescriptionWrapper>
              <Icon src="/images/instaIcon.svg" />
              <DescriptionText $isBlack={true}>test</DescriptionText>
            </DetailDescriptionWrapper>
          </DetailCardSection>
        </>
      )}
    </Wrapper>
  );
};
