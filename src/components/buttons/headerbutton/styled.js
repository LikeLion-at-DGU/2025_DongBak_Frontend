import styled from "styled-components";

export const Wrapper = styled.div`
  color: #FFF;
  font-size: 18.133px;
  font-style: normal;
  font-weight: 800;
  line-height: 19.267px; /* 106.25% */
  letter-spacing: -0.567px;
  opacity: ${({ $isActive }) => $isActive ? "1" : "0.5"};
  text-decoration: ${({ $isActive }) => $isActive ? "underline" : "none"};
  text-underline-offset: 5.67px; /* 밑줄과 텍스트 사이 간격 조정 */
  text-decoration-thickness: 1.133px; /* 밑줄 두께 조정 */
  text-decoration-color: white; /* 밑줄 색상 */

  cursor: pointer;
`;