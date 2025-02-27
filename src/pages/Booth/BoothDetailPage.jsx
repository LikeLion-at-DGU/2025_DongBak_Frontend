import * as S from "./styled";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoothInfo } from "../../components/BoothDetailBox/BoothInfo";
import { LikeLionInfo } from "../../components/LikeLionInfo/LikeLionInfo";
import { RecruitInfo } from "../../components/LikeLionInfo/RecruitInfo";
import { images } from "../../constants/BoothDetail/data";
import { useSlider } from "../../hooks/useSlider";
import shareIcon from "../../../public/images/shareIcon.svg";
import backIcon from "../../../public/images/backIcon.svg";

export const BoothDetailPage = () => {
  const navigate = useNavigate();
  const {
    currentIndex,
    translateX,
    sliderContainerRef,
    handleTouchStart,
    handleTouchEnd,
  } = useSlider(images);

  const handleBackPage = () => {
    navigate(-1);
  };
  const handleCopyLink = () => {
    const pageUrl = window.location.href;
    navigator.clipboard
      .writeText(pageUrl)
      .then(() => alert("링크가 복사되었습니다!"))
      .catch((err) => console.error("링크 복사 실패:", err));
  };

  return (
    <S.BoothContainer>
      <S.BoothDHeader>
        <img src={backIcon} onClick={handleBackPage} />
        <div>부스안내</div>
        <img src={shareIcon} onClick={handleCopyLink} />
      </S.BoothDHeader>

      <S.SliderContainer
        ref={sliderContainerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <S.Slide
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {images.map((src, index) => (
            <S.SlideContent key={index} $active={index === currentIndex}>
              <S.SlideImage src={src} alt={`slide-${index}`} />
            </S.SlideContent>
          ))}
        </S.Slide>
      </S.SliderContainer>
      <S.Indicators>
        {images.map((_, index) => (
          <S.Dot key={index} $active={index === currentIndex} />
        ))}
      </S.Indicators>

      <S.InfoContainer>
        <BoothInfo
          club={"멋쟁이사자처럼"}
          BoothTitle={"멋-사 문방구"}
          description={"어쩌구저쩌구구"}
        />
        <S.BoothLine />
        <LikeLionInfo />
        <S.BoothLine />
        <RecruitInfo />
      </S.InfoContainer>
    </S.BoothContainer>
  );
};
