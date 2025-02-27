import * as S from "./styled";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoothInfo } from "../../components/BoothDetailBox/BoothInfo";
import { LikeLionInfo } from "../../components/LikeLionInfo/LikeLionInfo";
import { RecruitInfo } from "../../components/LikeLionInfo/RecruitInfo";
import { images } from "../../constants/BoothDetail/data";
import shareIcon from "../../../public/images/shareIcon.svg";
import backIcon from "../../../public/images/backIcon.svg";

export const BoothDetailPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [translateX, setTranslateX] = useState(0);
  const sliderContainerRef = useRef(null);
  // const slideWidth = 375; // 각 슬라이드 아이템 크기(px)
  //  const touchStartX = useRef(0);
  //  const touchEndX = useRef(0);

  useEffect(() => {
    updateTranslateX(); // 초기 마운트 시 중앙 배치
    window.addEventListener("resize", updateTranslateX);
    return () => window.removeEventListener("resize", updateTranslateX);
  }, [currentIndex]);

  const updateTranslateX = () => {
    if (sliderContainerRef.current) {
      const containerWidth = sliderContainerRef.current.offsetWidth;
      setTranslateX(-currentIndex * containerWidth);
    }
  };

  const handleTouchStart = (e) => {
    sliderContainerRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX =
      e.changedTouches[0].clientX - sliderContainerRef.current.startX;
    if (deltaX < -50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (deltaX > 50) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };
  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <S.BoothContainer>
      <S.BoothDHeader>
        <img src={backIcon} onClick={handleBackPage} />
        <div>부스안내</div>
        <img src={shareIcon} />
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
