import * as S from "./styled";

import {useReloadPage} from "../../../hooks/useReloadPage";

export const OneButton = ({ value }) => {
  const realoadPage = useReloadPage();
  return (
    <S.Wrapper onClick={realoadPage}>
      {value}
    </S.Wrapper>
  )
}