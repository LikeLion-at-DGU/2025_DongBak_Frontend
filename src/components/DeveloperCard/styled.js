import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 110px;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 1.5px solid rgba(146, 165, 110, 0.3);
  background: ${({ theme }) => theme.colors.white};
`;

export const ProfileImage = styled.img``;

export const ProfileName = styled.div`
  ${({ theme }) => theme.fonts.SUITES4};
  color: ${({ theme }) => theme.colors.black};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileMajor = styled.div`
  ${({ theme }) => theme.fonts.SUITES5};
  color: rgba(71, 71, 71, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5px;
`;

export const RoleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Profilerole = styled.div`
  ${({ theme }) => theme.fonts.SUITES1};
  font-size: 0.55rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 4px 7px;
  border-radius: 3px;
  background-color: ${({ $role, theme }) => {
    switch ($role) {
      case 'PM':
        return theme.colors.green200;
      case 'DS':
        return theme.colors.green200;
      case 'FE':
        return theme.colors.orange;
      case 'BE':
        return theme.colors.pink200;
      case '총괄':
        return theme.colors.gray200;
      case '대외협력':
        return theme.colors.blue;
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;
