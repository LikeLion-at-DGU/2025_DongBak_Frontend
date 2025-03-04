import * as S from './styled';
import { useState } from 'react';
import search from '/images/search-normal.svg';
import Menubar from '/images/Menubars.svg';
import { ROUTE_PATHS } from '@constants/routeConstants';
import useCustomNavigate from '@hooks/useCustomNavigate';
import { Fade as Hamburger } from 'hamburger-react';
import { Sidebar } from '@components/Sidebar/Sidebar';

export const Header = ({ title, isTrue = false }) => {
  const { goToPage } = useCustomNavigate();
  const [isOpen, setOpen] = useState(false);

  return (
    <S.TitleContainer>
      <S.Title>{title}</S.Title>
      <S.ImgBox>
        {isTrue && (
          <S.Image src={search} onClick={() => goToPage(ROUTE_PATHS.SEARCH)} />
        )}
        <S.HamburgerBox>
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </S.HamburgerBox>
      </S.ImgBox>

      {isOpen && <Sidebar />}
    </S.TitleContainer>
  );
};
