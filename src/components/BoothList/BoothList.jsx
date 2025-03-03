import * as S from "./styled";
import { BoothDetailBox } from "@components/BoothDetailBox/BoothDetailBox";
export const BoothList = ({ list, goToPage, type }) => {
  return (
    <S.BoothDWrapper>
      {list.map((item) => (
        <BoothDetailBox
          key={item.id}
          booth={item}
          onClick={() => goToPage(`/${type}/${item.id}`)}
        />
      ))}
    </S.BoothDWrapper>
  );
};
