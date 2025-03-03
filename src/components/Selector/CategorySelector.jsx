import * as S from "./styled";
import { Btn } from "@components/Btn/Btn";
import { CATEGORYNAME } from "@constants/Booth/data";
export const CategorySelector = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <S.BtnWrapper style={{ justifyContent: "flex-start" }}>
      {[CATEGORYNAME.BOOTH, CATEGORYNAME.FOODTRUCK].map((category) => (
        <Btn
          key={category}
          place={category}
          isClick={selectedCategory === category}
          onClick={() => setSelectedCategory(category)}
        />
      ))}
    </S.BtnWrapper>
  );
};
