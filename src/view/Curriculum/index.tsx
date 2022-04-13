import React from 'react';

import Text from 'components/Text'

import { useLanguage } from 'modules/language/hooks'

import Template from 'template'

import * as S from './styles';

const Curriculum: React.FC = () => {
  const { messages } = useLanguage()

  return (
    <Template>
    <S.Container>
        <Text type="title">
          {messages.curriculum}
        </Text>
        <a href="/assets/Curriculo_pt.pdf" download={`${messages.headers.Curriculum}-Wanderson_Marques`} target='_blank' rel="noreferrer">
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