import * as S from "./styled";
import { useEffect } from "react";
import { BoothInfo } from "../../components/BoothDetailBox/BoothInfo";
import { useSlider } from "../../hooks/useSlider";
import { COPY_SUCCESS_MESSAGE } from "../../constants/BoothDetail/data";
import { useFoodDetail } from "../../hooks/Booth/useFoodDetail";

import useCustomNavigate from "../../hooks/useCustomNavigate";

import shareIcon from "../../../public/images/shareIcon.svg";
import backIcon from "../../../public/images/backIcon.svg";
import defaultImg from "../../../public/images/defaultImg.svg";
import { useParams } from "react-router-dom";
const defaultImages = [defaultImg];

export const FoodDetailPage = () => {
  const { goBack } = useCustomNavigate();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { foodDetail } = useFoodDetail(id);
  const foodInfo = foodDetail[0]?.["만해광장"];
  const food = foodInfo?.find((b) => b.id === Number(id));
  console.log("food", food);

  const images = food?.food_truck_image?.length
    ? food.food_truck_image.map((img) => img.image)
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
        {food ? (
          <>
            <BoothInfo booth={food} />
          </>
        ) : (
          <div>해당 부스를 찾을 수 없습니다.</div>
        )}
      </S.InfoContainer>
    </S.BoothContainer>
  );
};
