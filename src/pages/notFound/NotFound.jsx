import * as S from "./styled";

import { ErrorBox } from "../../components/errorBox/ErrorBox";
import { Footer } from "@components/footer/Footer";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <ErrorBox />
    </S.Wrapper>
  );
};
