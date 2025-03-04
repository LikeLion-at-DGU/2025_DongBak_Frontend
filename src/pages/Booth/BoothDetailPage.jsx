import * as S from "./styled";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { BoothInfo } from "@components/BoothDetailBox/BoothInfo";
import { ClubInfo } from "@components/ClubInfo/ClubInfo";
import { RecruitInfo } from "@components/ClubInfo/RecruitInfo";
import { COPY_SUCCESS_MESSAGE } from "@constants/BoothDetail/data";

import { useSlider } from "@hooks/useSlider";
import { useBoothDetail } from "@hooks/Booth/useBoothDetail";
import useCustomNavigate from "@hooks/useCustomNavigate";

import shareIcon from "/images/shareIcon.svg";
import backIcon from "/images/backIcon.svg";
import defaultImg from "/images/defaultImg.svg";
import { Footer } from "@components/footer/Footer";
const defaultImages = [defaultImg];

export const BoothDetailPage = () => {
  const { goBack } = useCustomNavigate();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { boothData } = useBoothDetail(id);
  console.log("boothData", boothData);

  const images = boothData?.booth_image?.length
    ? boothData.booth_image.map((img) => img.image)
    : defaultImages;
  const {
    currentIndex,
    translateX,
    sliderContainerRef,
    handleTouchStart,
    handleTouchEnd,
  } = useSlider(images);

  const handleCopyLink = () => {
    const pageUrl = window.location.href;
    navigator.clipboard
      .writeText(pageUrl)
      .then(() => alert(COPY_SUCCESS_MESSAGE))
      .catch((err) => console.error("링크 복사 실패:", err));
  };

  return (
    <S.BoothContainer>
      <S.BoothDHeader>
        <img src={backIcon} onClick={goBack} />
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
        {boothData ? (
          <>
            <BoothInfo booths={boothData} />
            <S.BoothLine />
            <ClubInfo booth={boothData} />
            <S.BoothLine />
            <RecruitInfo booth={boothData} />
          </>
        ) : (
          <div>해당 부스를 찾을 수 없습니다.</div>
        )}
      </S.InfoContainer>
    </S.BoothContainer>
  );
};
