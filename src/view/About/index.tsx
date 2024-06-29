import React from 'react';

import Text from 'components/Text'

import { useLanguage } from 'modules/language/hooks'

import Template from 'template'

import * as S from './styles';

const About: React.FC = () => {
  const { messages } = useLanguage()

  return (
    <Template>
    <S.Container>
        <S.Image src="/assets/me.jpg" alt="Minha foto" />
        <S.WrapperText>
          <Text type='underTitle'>
            {messages.aboutTitle}
          </Text>
          <Text type="body">
            {messages.aboutText}
          </Text>
        </S.WrapperText>
    </S.Container>
  </Template>
  );
}

export default About;