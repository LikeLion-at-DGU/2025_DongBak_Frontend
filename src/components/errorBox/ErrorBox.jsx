import { useLocation } from "react-router-dom";

import { OneButton } from "../buttons/OneButton/OneButton";

import * as S from "./styled";
import { NOTFOUND_CONSTANT, SEARCH_CONSTANT } from "../../constants/errorConstant";

export const ErrorBox = () => {
  const location = useLocation();
  const isSearchPage = location.pathname === "/search"; // ✅ 현재 페이지가 검색 페이지인지 확인

  return (
    <S.Wrapper>
      <S.Emoji src={isSearchPage ? SEARCH_CONSTANT.EMOJI : NOTFOUND_CONSTANT.EMOJI} />
      <S.WarningText>
        {(isSearchPage ? SEARCH_CONSTANT.WARNING_TEXT : NOTFOUND_CONSTANT.WARNING_TEXT).map(
          (text, index) => (
            <span key={index}>
              {text}
              {index !==
                (isSearchPage ? SEARCH_CONSTANT.WARNING_TEXT.length : NOTFOUND_CONSTANT.WARNING_TEXT.length) - 1 && <br />}
            </span>
          )
        )}
      </S.WarningText>
      <S.SubWarningText>
        {(isSearchPage ? SEARCH_CONSTANT.SUBWARNING_TEXT : NOTFOUND_CONSTANT.SUBWARNING_TEXT).map(
          (text, index) => (
            <span key={index}>
              {text}
              {index !==
                (isSearchPage ? SEARCH_CONSTANT.SUBWARNING_TEXT.length : NOTFOUND_CONSTANT.SUBWARNING_TEXT.length) - 1 && <br />}
            </span>
          )
        )}
      </S.SubWarningText>
      {!isSearchPage && (
        <OneButton value={NOTFOUND_CONSTANT.value} />
      )}
    </S.Wrapper>
  );
};