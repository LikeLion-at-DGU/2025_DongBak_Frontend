import * as S from "./styled";

import { Header } from "../../components/Header/Header";
import { BoothDetailBox } from "../../components/BoothDetailBox/BoothDetailBox";
import { Btn } from "../../components/Btn/Btn";
import { Date } from "../../components/Date/Date";

import MAP1 from "../../../public/images/map1.svg";
import SlideBar from "../../../public/images/SlideBar.svg";
export const BoothPage = () => {
  return (
    <S.BoothContainer>
      <S.HeaderBox>
        <Header Title={"부스안내"} isTrue={true} />
        <S.HeaderWrapper>
          <S.DateWrapper>
            <Date DateNum={"5"} Date={"WED"} isclick={true} />
            <Date DateNum={"6"} Date={"THR"} isclick={false} />
          </S.DateWrapper>
          <S.BtnWrapper>
            <Btn place={"팔정도"} isClick={true} />
            <Btn place={"만해광장"} isClick={false} />
          </S.BtnWrapper>
        </S.HeaderWrapper>
      </S.HeaderBox>
      <S.MapBox>
        <S.MAP src={MAP1} />
        <img src={SlideBar} />
        <S.BoothLine />
      </S.MapBox>
      <S.BoothDBox>
        <S.BtnWrapper style={{ justifyContent: "flex-start" }}>
          <Btn place={"부스"} isClick={true} />
          <Btn place={"푸드트럭"} isClick={false} />
        </S.BtnWrapper>
        <S.BoothDWrapper>
          <BoothDetailBox />
        </S.BoothDWrapper>
      </S.BoothDBox>
    </S.BoothContainer>
  );
};
