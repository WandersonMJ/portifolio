import React from 'react';

import Text from 'components/Text'

import { useLanguage } from 'modules/language/hooks'

import Template from 'template'

import * as S from './styles';

const Curriculum: React.FC = () => {
  const { messages, language } = useLanguage()

  const filePath = {
    'pt': 'portuguese_resume.pdf',
    'en': 'english_resume.pdf'
  }

  return (
    <Template>
    <S.Container>
        <Text type="title">
          {messages.curriculum}
        </Text>
        <a href={`/assets/${filePath[language]}`} download={`${messages.headers.Curriculum}-Wanderson_Marques`} target='_blank' rel="noreferrer">
          <button type="button" className='button-27'>
            <Text type="headline1">
              Download
            </Text>
          </button>
        </a>
    </S.Container>
  </Template>
  );
}

export default Curriculum;