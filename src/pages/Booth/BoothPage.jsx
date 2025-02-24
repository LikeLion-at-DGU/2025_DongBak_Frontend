import * as S from "./styled";
import { BoothDetailBox } from "../../components/BoothDetailBox/BoothDetailBox";
import { Btn } from "../../components/Btn/Btn";
export const BoothPage = () => {
  return (
    <S.BoothContainer>
      <BoothDetailBox />
      <Btn place={"팔정도"} isClick={false} />
    </S.BoothContainer>
  );
};
