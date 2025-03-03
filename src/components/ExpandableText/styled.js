import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  cursor: ${({ $isExpanded }) => ($isExpanded ? "default" : "pointer")};
  overflow: hidden;
  word-wrap: break-word;
  display: ${({ $isExpanded }) => ($isExpanded ? "block" : "-webkit-box")};
  -webkit-line-clamp: ${({ $isExpanded }) => ($isExpanded ? "unset" : 3)};
  -webkit-box-orient: vertical;
  white-space: normal;
`;
