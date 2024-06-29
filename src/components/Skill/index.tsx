import React from 'react';
import { IconType } from 'react-icons';
import { themeColors } from 'styles/theme'
import Text from 'components/Text'
import * as S from "./styles";

export interface SkillProps {
  text: string;
  icon?: IconType;
}

const Skill: React.FC<SkillProps> = ({ text, icon: Icon }) => {
  return (
    <S.SkillContainer>
      {Icon && (
        <S.IconWrapper>
          <Icon size={60} color={themeColors.white} />
        </S.IconWrapper>
      )}
      <S.TextWrapper>
        <Text color='white' >
          {text}
        </Text>
      </S.TextWrapper>
    </S.SkillContainer>
  );
};

export default Skill;
