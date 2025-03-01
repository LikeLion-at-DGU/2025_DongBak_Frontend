import * as S from "./styled";
import { useEffect } from "react";
import { BoothInfo } from "../../components/BoothDetailBox/BoothInfo";
import { ClubInfo } from "../../components/ClubInfo/ClubInfo";
import { RecruitInfo } from "../../components/ClubInfo/RecruitInfo";
import { useSlider } from "../../hooks/useSlider";
import { BoothData } from "../../constants/Booth/data";
import { COPY_SUCCESS_MESSAGE } from "../../constants/BoothDetail/data";
import { useBoothDetail } from "../../hooks/useBoothDetail";
import useCustomNavigate from "../../hooks/useCustomNavigate";

import shareIcon from "../../../public/images/shareIcon.svg";
import backIcon from "../../../public/images/backIcon.svg";
import defaultImg from "../../../public/images/defaultImg.svg";
import { useParams } from "react-router-dom";
const defaultImages = [defaultImg];

export const BoothDetailPage = () => {
  const { goBack } = useCustomNavigate();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //const { boothData } = useBoothDetail();
  const booth = BoothData?.find((b) => b.id === Number(id));
  console.log("booth", booth);

  const images = booth?.booth_image?.length
    ? booth.booth_image.map((img) => img.image)
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
        {booth ? (
          <>
            <BoothInfo booth={booth} />
            <S.BoothLine />
            <ClubInfo booth={booth} />
            <S.BoothLine />
            <RecruitInfo booth={booth} />
          </>
        ) : (
          <div>해당 부스를 찾을 수 없습니다.</div>
        )}
      </S.InfoContainer>
    </S.BoothContainer>
  );
};
