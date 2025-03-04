import * as S from "./styled";

import { useState } from "react";

export const ExpandableText = ({ text, maxLength = 250 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > maxLength;
  const displayText =
    shouldTruncate && !isExpanded ? text.slice(0, maxLength) + "..." : text;

  console.log("isExpanded", isExpanded);
  return (
    <S.TextContainer
      $isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {displayText}
    </S.TextContainer>
  );
};
