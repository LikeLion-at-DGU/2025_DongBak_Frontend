import * as S from "./styled";
import { useState } from "react";
import pin from "/images/pin.svg";
import clock from "/images/clock.svg";
import defaultImg from "/images/defaultImg.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";
export const BoothDetailBox = ({ booth, type, isSelected, onSelect }) => {
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
          e.stopPropagation(); //  부모의 onClick이 실행되지 않도록 이벤트 버블링 방지
          goToPage(`/${type}/${booth.id}`);
        }}
      >
        자세히보기
      </S.DetailBtn>
      <S.BoothDImg
        src={
          isFood
            ? booth.food_truck_image?.[0]?.image
            : booth.booth_image?.[0]?.image || defaultImg
        }
      />

      <S.TextContainer>
        <S.TextBox>
          <S.MainText>
            {isFood ? "푸드트럭" : booth.club_name || "정보 없음"}
          </S.MainText>
          <S.SubText>
            {isFood
              ? booth.food_truck_name
              : booth.booth_name || "부스 정보 없음"}
          </S.SubText>
        </S.TextBox>
        <S.TextDetailBox>
          <S.TextDetail>
            <img src={pin} />
            <S.TextInfo>
              {booth?.day?.map((d) => `(${d.name})`).join(", ") ||
                "(요일 정보 없음)"}
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
