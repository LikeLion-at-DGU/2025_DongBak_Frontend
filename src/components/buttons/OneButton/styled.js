import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.fonts.SUITEB2};
  width: 90%;
  border-radius: 1550px;
  background-color: ${({ theme }) => theme.colors.green200};
  position: absolute;
  bottom: 20px;
  padding: 18px 152px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;