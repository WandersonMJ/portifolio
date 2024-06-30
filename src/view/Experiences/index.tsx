import React from 'react';

import Text from 'components/Text'

import { useLanguage } from 'modules/language/hooks'

import ViewTemplate from 'template/viewTemplate'

import * as S from './styles';

const Experiences: React.FC = () => {
  const { messages } = useLanguage()
  
  return (
    <ViewTemplate>
    <S.Container>
        <Text type="title">
          {messages.experiencesTitle}
        </Text>
        {messages.experiences.map((item, index) => (
          <S.CardJob key={index}>
            <Text type="underTitle">
              {item.company}
            </Text>
            <Text type="body2">
              {item.role}
            </Text>
            <Text type="body">
              {item.date} • {item.duration}
            </Text>
          </S.CardJob>
        ))}
    </S.Container>
  </ViewTemplate>
  );
}

export default Experiences;