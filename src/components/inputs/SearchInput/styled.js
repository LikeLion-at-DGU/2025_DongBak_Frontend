import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100%);
  padding: 6px 18px;
  border-radius: 30px;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg100};

  position: relative;
`;

export const Icon = styled.img`

`;

export const Input = styled.input`
  width: calc(100% - 50px);
  padding: 6px 18px;
  background-color: ${({ theme }) => theme.colors.bg100};

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    ${({ theme }) => theme.fonts.SUITEM3};
    color: ${({ theme }) => theme.colors.green300};
  }
`;

export const IconRight = styled.img`
  position: absolute;
  right: 18px;
`;
