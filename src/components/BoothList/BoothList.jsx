import * as S from "./styled";
import { useEffect } from "react";
import { BoothDetailBox } from "@components/BoothDetailBox/BoothDetailBox";
export const BoothList = ({
  list,
  type,
  isSelectedFromMap,
  selectedBoothNum,
  hasSearchResults,
  onSelectBoothFromList,
  setActiveBoothNums,
}) => {
  const filteredList =
    isSelectedFromMap && selectedBoothNum
      ? list.filter((item) => item.booth_num === selectedBoothNum)
      : list;

  useEffect(() => {
    if (hasSearchResults) {
      setActiveBoothNums(list.map((item) => item.booth_num));
    }
  }, [hasSearchResults, list, setActiveBoothNums]);

  return (
    <S.BoothDWrapper>
      {filteredList.map((item) => (
        <BoothDetailBox
          key={item.id}
          booth={item}
          type={type}
          isSelected={hasSearchResults || selectedBoothNum === item.booth_num}
          onSelect={() => onSelectBoothFromList(item.booth_num)}
        />
      ))}
    </S.BoothDWrapper>
  );
};
