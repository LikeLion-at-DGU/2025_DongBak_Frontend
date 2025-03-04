import * as S from "./styled";

import { useState } from "react";

export const ExpandableText = ({
  text,
  maxLength = 250,
  isOneSentence = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedText = Array.isArray(text) ? text.join("\n") : text;

  const shouldTruncate = text?.length > maxLength;
  const displayText =
    shouldTruncate && !isExpanded
      ? formattedText.slice(0, maxLength) + "..."
      : formattedText;

  return (
    <S.TextContainer
      $isOneSentence={isOneSentence}
      $isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {displayText?.split("\n").map((line, index) => (
        <p key={index} style={{ marginBottom: "4px" }}>
          {line}
        </p>
      ))}
    </S.TextContainer>
  );
};
