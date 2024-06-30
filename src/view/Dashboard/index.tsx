import React from 'react';
import NextLink from "next/link";

import Text from 'components/Text'

import { useLanguage } from 'modules/language/hooks'

import ViewTemplate from 'template/viewTemplate'

import * as S from './styles';

const Home: React.FC = () => {
  const { messages } = useLanguage()

  return (
    <ViewTemplate>
      <S.Container>
        <Text type='title'>
          {messages.presentationTitle}
        </Text>
        <S.TextWrapper>
          <Text type='underTitle'>
            {messages.presentationSubtitle}
          </Text>          
          <Text border type='underTitle'>
            <NextLink href='/skills'><a>{messages.presentationLink}</a></NextLink>
          </Text>
        </S.TextWrapper>
        <Text type='body'>
          {messages.presentationText}
        </Text>
      </S.Container>
    </ViewTemplate>
  );
}

export default Home;