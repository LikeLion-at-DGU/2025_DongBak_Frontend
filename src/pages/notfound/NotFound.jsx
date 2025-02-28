import * as S from "./styled";

import { NOTFOUND_CONSTANT } from "../../constants/notfoundpageConstant";
import { OneButton } from "../../components/buttons/OneButton/OneButton";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Emoji src={NOTFOUND_CONSTANT.EMOJI}/>
      <S.WarningText>{NOTFOUND_CONSTANT.WARNING_TEXT}</S.WarningText>
      <S.SubWarningText>
        {NOTFOUND_CONSTANT.SUBWARNING_TEXT.map((text, index) => (
          <span key={index}>
            {text}
            {index !== NOTFOUND_CONSTANT.SUBWARNING_TEXT.length - 1 && <br />}
          </span>
        ))}
      </S.SubWarningText>
      <OneButton value={NOTFOUND_CONSTANT.value}/>
    </S.Wrapper>
  )
}