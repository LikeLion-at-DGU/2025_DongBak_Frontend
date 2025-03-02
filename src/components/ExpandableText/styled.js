import styled from "styled-components";
export const TextContainer = styled.div`
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  cursor: ${({ $isExpanded }) => ($isExpanded ? "default" : "pointer")};
  display: -webkit-box;
  -webkit-line-clamp: ${({ $isExpanded }) => ($isExpanded ? "none" : 3)};
  -webkit-box-orient: vertical;
  white-space: normal;
`;
