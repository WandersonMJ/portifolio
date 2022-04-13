import React from 'react';

import Text from 'components/Text'

import { useLanguage } from 'modules/language/hooks'

import Template from 'template'

import * as S from './styles';

const Home: React.FC = () => {
  const { messages } = useLanguage()

  return (
    <Template>
      <S.Container>
          <Text type='title'>
            {messages.presentationTitle}
          </Text>
          <Text type='underTitle'>
            {messages.presentationSubtitle}
          </Text>
          <Text type='body'>
            {messages.presentationText}
          </Text>
      </S.Container>
    </Template>
  );
}

export default Home;