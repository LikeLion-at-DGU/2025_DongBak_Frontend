import styled from "styled-components";
import { transparentize } from "polished";
import {
  LIKE_LION,
  LOCATION,
  BOTTOM_INFORMATION,
  COPY_RIGHT,
} from "@constants/common";
import useCustomNavigate from "@hooks/useCustomNavigate";

const Wrapper = styled.div`
  width: 100%;
  padding: 1.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const MainText = styled.h1`
  ${({ theme }) => theme.fonts.SUITE03}
  margin-bottom: 0.625rem;
`;

const SubText = styled.p`
  ${({ theme }) => theme.fonts.SUITES5}
  color: ${({ theme }) => transparentize(0.3, theme.colors.black)};
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const IconTitle = styled.p`
  ${({ theme }) => theme.fonts.SUITES5}
  margin-left: 0.4rem;
  margin-right: 0.75rem;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const Divider = styled.div`
  width: 1px;
  height: 0.5rem;
  background-color: ${({ theme }) => transparentize(0.8, theme.colors.black)};
`;

const CopyRightText = styled.p`
  ${({ theme }) => theme.fonts.SUITES5}
  color: ${({ theme }) => transparentize(0.8, theme.colors.black)};
`;

export const Footer = () => {
  const { goToPage } = useCustomNavigate();

  const handleNavigate = (url) => {
    if (url.startsWith("/")) {
      goToPage(url);
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <Wrapper>
      <MainText>{LIKE_LION}</MainText>
      <SubText>{LOCATION}</SubText>
      <IconWrapper>
        {BOTTOM_INFORMATION.map((data, index) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            key={index}
            onClick={() => handleNavigate(data.url)}
          >
            <Icon src={data.image} alt="icon" />
            <IconTitle>{data.title}</IconTitle>
            {index !== BOTTOM_INFORMATION.length - 1 && <Divider />}
          </div>
        ))}
      </IconWrapper>
      <CopyRightText>{COPY_RIGHT}</CopyRightText>
    </Wrapper>
  );
};
