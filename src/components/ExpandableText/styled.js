import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  cursor: ${({ $isExpanded }) => ($isExpanded ? "default" : "pointer")};
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  /* ✅ isOneSentence가 true이면 한 줄만 표시 (말줄임표 적용) */
  -webkit-line-clamp: ${({ $isExpanded, $isOneSentence }) =>
    $isExpanded ? "unset" : $isOneSentence ? 1 : 3};

  white-space: normal;
  text-overflow: ellipsis; /* ✅ 넘칠 경우 말줄임표 추가 */
  overflow: hidden;
  max-height: ${({ $isExpanded, $isOneSentence }) =>
    $isExpanded
      ? "none"
      : $isOneSentence
      ? "1.4em"
      : "4.2em"}; /* ✅ 한 줄 높이 조정 */
`;
