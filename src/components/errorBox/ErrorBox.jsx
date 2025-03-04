import { useLocation } from 'react-router-dom';

import { OneButton } from '../buttons/OneButton/OneButton';

import * as S from './styled';
import {
  NOTFOUND_CONSTANT,
  SEARCH_CONSTANT,
  NOFOODTRUCK_CONSTANT,
} from '@constants/errorConstant';

export const ErrorBox = () => {
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';
  const isBoothPage = location.pathname === '/booth';

  const CONSTANT = isSearchPage
    ? SEARCH_CONSTANT
    : isBoothPage
    ? NOFOODTRUCK_CONSTANT
    : NOTFOUND_CONSTANT;
  return (
    <S.Wrapper $isSearchPage={isSearchPage} $isBoothPage={isBoothPage}>
      <S.Emoji src={CONSTANT.EMOJI} />
      <S.WarningTextContainer>
        {CONSTANT.WARNING_TEXT.map((text, index) => (
          <S.WarningText key={index}>{text}</S.WarningText>
        ))}
      </S.WarningTextContainer>
      <S.SubWarningText>
        {CONSTANT.SUBWARNING_TEXT.map((text, index) => (
          <span key={index}>
            {text}
            {index !== CONSTANT.SUBWARNING_TEXT.length - 1 && <br />}
          </span>
        ))}
      </S.SubWarningText>
      {!isSearchPage && !isBoothPage && (
        <OneButton value={NOTFOUND_CONSTANT.value} />
      )}
    </S.Wrapper>
  );
};
