import * as S from "./styled";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { BoothInfo } from "@components/BoothDetailBox/BoothInfo";
import { COPY_SUCCESS_MESSAGE } from "@constants/BoothDetail/data";

import { useFoodDetail } from "@hooks/Booth/useFoodDetail";
import { useSlider } from "@hooks/useSlider";
import useCustomNavigate from "@hooks/useCustomNavigate";

import shareIcon from "/images/shareIcon.svg";
import backIcon from "/images/backIcon.svg";
import defaultImg from "/images/defaultImg.svg";
const defaultImages = [defaultImg];

export const FoodDetailPage = () => {
  const { goBack } = useCustomNavigate();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { foodDetail } = useFoodDetail(id);
  console.log("foodDetail", foodDetail);

  const images = foodDetail?.food_truck_image?.length
    ? foodDetail.food_truck_image.map((img) => img.image)
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
        <div>푸드트럭 안내</div>
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
        {foodDetail ? (
          <>
            <BoothInfo booths={foodDetail} />
          </>
        ) : (
          <div>해당 부스를 찾을 수 없습니다.</div>
        )}
      </S.InfoContainer>
    </S.BoothContainer>
  );
};
