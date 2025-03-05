import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  cursor: ${({ $isExpanded }) => ($isExpanded ? "default" : "pointer")};
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $isExpanded, $isOneSentence }) =>
    $isExpanded ? "unset" : $isOneSentence ? 1 : 3};

  white-space: normal;
  text-overflow: ellipsis;
  max-height: ${({ $isExpanded, $isOneSentence }) =>
    $isExpanded ? "none" : $isOneSentence ? "1.4em" : "4.2em"};

  position: relative;
`;
