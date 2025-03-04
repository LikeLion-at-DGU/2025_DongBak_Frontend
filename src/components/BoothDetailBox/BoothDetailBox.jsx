import * as S from "./styled";
import { useState } from "react";
import pin from "/images/pin.svg";
import clock from "/images/clock.svg";
// import defaultImg from "/images/defaultImg.svg";
import defaultImg from "/images/defaultImage.png";

import useCustomNavigate from "@hooks/useCustomNavigate";
import { NO_DATA_MSG } from "@constants/common";
import { CATEGORYNAME } from "@constants/Booth/data";

export const BoothDetailBox = ({
  booth = {},
  type,
  isSelected = false,
  onSelect,
}) => {
  const { goToPage } = useCustomNavigate();

  const onSelectBoothDetail = () => {
    if (onSelect) {
      onSelect(booth.booth_num);
    }
  };
  const isFood = !booth.booth_name && booth.food_truck_num;

  return (
    <S.BoothDContainer $isVisible={isSelected} onClick={onSelectBoothDetail}>
      <S.DetailBtn
        $isVisible={isSelected}
        onClick={(e) => {
          e.stopPropagation();
          goToPage(`/${type}/${booth.id}`);
        }}
      >
        자세히보기
      </S.DetailBtn>
      <S.BoothDImg
        src={
          isFood
            ? booth?.food_truck_image?.image
            : booth?.booth_image?.image || defaultImg
        }
      />

      <S.TextContainer>
        <S.TextBox>
          <S.MainText>
            {isFood ? CATEGORYNAME.FOODTRUCK : booth.club_name || NO_DATA_MSG}
          </S.MainText>
          <S.SubText>
            {isFood ? booth.food_truck_name : booth.booth_name || NO_DATA_MSG}
          </S.SubText>
        </S.TextBox>
        <S.TextDetailBox>
          <S.TextDetail>
            <img src={pin} />
            <S.TextInfo>
              {booth?.day?.map((d) => `(${d.name})`).join(", ") || NO_DATA_MSG}
              {booth.start_time}~{booth.end_time}
            </S.TextInfo>
          </S.TextDetail>
          <S.TextDetail>
            <img src={clock} />
            <S.TextInfo>
              {booth.location}
              {isFood ? booth.food_truck_num : booth.booth_num}번 부스
            </S.TextInfo>
          </S.TextDetail>
        </S.TextDetailBox>
      </S.TextContainer>
    </S.BoothDContainer>
  );
};
