import styled from "styled-components";
import { transparentize } from "polished";

export const OuterWrapper = styled.div`
  padding-top: 1rem;
  border-radius: 30px 0 0 30px;
  background-color: ${({ theme }) => transparentize(0.4, theme.colors.bg100)};
`;

export const InnerWrapper = styled.div`
  padding: 28px 24px;
  border-radius: 30px 0 0 30px;
  background-color: ${({ theme }) => theme.colors.bg200};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.SUITEB0}
`;
