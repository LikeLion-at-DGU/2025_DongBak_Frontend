import * as S from "./styled";

export const DeveloperCard = ({ name, major, role, image}) => {
  return (
    <S.Wrapper>
      <S.ProfileImage src={image}/>
      <S.ProfileName>{name}</S.ProfileName>
      <S.ProfileMajor>{major}</S.ProfileMajor>
      <S.RoleContainer>
        {role.map((r, index) => (
          <S.Profilerole 
            key={index}
            $role={r}
          >{r}</S.Profilerole>
        ))}
      </S.RoleContainer>
    </S.Wrapper>
  )
}