import * as S from "./styled";
import { BoothDetailBox } from "@components/BoothDetailBox/BoothDetailBox";
export const BoothList = ({
  list,
  type,
  isSelectedFromMap,
  selectedBoothNum,

  onSelectBoothFromList,
}) => {
  const filteredList =
    isSelectedFromMap && selectedBoothNum
      ? list.filter((item) => item.booth_num === selectedBoothNum)
      : list;

  return (
    <S.BoothDWrapper>
      {filteredList.map((item) => (
        <BoothDetailBox
          key={item.id}
          booth={item}
          type={type}
          isSelected={selectedBoothNum === item.booth_num}
          onSelect={() => onSelectBoothFromList(item.booth_num)}
        />
      ))}
    </S.BoothDWrapper>
  );
};
