import * as S from "./styled";

import { useState } from "react";

export const ExpandableText = ({ text, maxLength = 250 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > maxLength;
  const displayText =
    shouldTruncate && !isExpanded ? text.slice(0, maxLength) + "..." : text;

  return (
    <S.TextContainer
      $isExpanded={isExpanded}
      onClick={() => shouldTruncate && setIsExpanded(!isExpanded)}
    >
      {displayText}
    </S.TextContainer>
  );
};
