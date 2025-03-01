import * as S from "./styled";

import { useParams } from "react-router-dom";
import { BoothInfo } from "../../components/BoothDetailBox/BoothInfo";
import { LikeLionInfo } from "../../components/LikeLionInfo/LikeLionInfo";
import { RecruitInfo } from "../../components/LikeLionInfo/RecruitInfo";
import { useSlider } from "../../hooks/useSlider";
import { BoothDetailInfo } from "../../constants/Booth/data";
import { COPY_SUCCESS_MESSAGE } from "../../constants/BoothDetail/data";
import { useBoothSelection } from "../../hooks/useBoothSelect";
import useCustomNavigate from "../../hooks/useCustomNavigate";

import ExBoothD from "../../../public/images/ExBoothD.svg";
import shareIcon from "../../../public/images/shareIcon.svg";
import backIcon from "../../../public/images/backIcon.svg";

const defaultImages = [ExBoothD];

export const BoothDetailPage = () => {
  const { goBack } = useCustomNavigate();
  const { id } = useParams();
  const { boothData } = useBoothSelection();

  const booth = boothData.find((b) => b.id === Number(id));
  console.log(booth);
  const boothDetail = BoothDetailInfo.find((b) => b.id === Number(id));
  console.log("boothDetail", boothDetail);
  const images = boothDetail?.images?.length
    ? boothDetail.images
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
        {booth && boothDetail ? (
          <>
            <BoothInfo
              Club={boothDetail.club}
              BoothTitle={boothDetail.BoothTitle}
              Description={boothDetail.description}
            />
            <S.BoothLine />
            <LikeLionInfo />
            <S.BoothLine />
            <RecruitInfo />
          </>
        ) : (
          <div>해당 부스를 찾을 수 없습니다.</div>
        )}
      </S.InfoContainer>
    </S.BoothContainer>
  );
};
