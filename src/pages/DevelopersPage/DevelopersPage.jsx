import * as S from './styled';
import { DEVELOPER_CONSTANT } from '../../constants/developerpageConstants';
import { DEVELOPER_CARD_CONSTANT } from '../../constants/developerpageConstants';
import { DeveloperCard } from '../../components/DeveloperCard/DeveloperCard';
import { Header } from '@components/Header/Header';

export const DevelopersPage = () => {
  return (
    <S.Wrapper>
      <Header isDev="True" />
      <S.Container>
        <S.SloganImage />
        <S.LinktoMSITE>
          <S.Icon13 src={DEVELOPER_CONSTANT.SITE_EMOJI} />
          {DEVELOPER_CONSTANT.SITE_TEXT}
        </S.LinktoMSITE>
      </S.Container>

      {Object.keys(DEVELOPER_CARD_CONSTANT).map((category) => {
        const members = DEVELOPER_CARD_CONSTANT[category];

        return (
          <S.Container key={category}>
            <S.CategoryTitle
              src={DEVELOPER_CONSTANT.TITLE[category]}
              alt={category}
            />
            {category === 'ABOUTUS' ? (
              <S.Container>
                {members.map((text, index) => (
                  <S.AboutUsText key={index}>{text}</S.AboutUsText>
                ))}
              </S.Container>
            ) : (
              <S.CardWrap>
                {members.map((member, index) => (
                  <DeveloperCard
                    key={index}
                    name={member.name}
                    major={member.major}
                    role={member.role}
                    image={member.image}
                  />
                ))}
              </S.CardWrap>
            )}
          </S.Container>
        );
      })}
    </S.Wrapper>
  );
};
