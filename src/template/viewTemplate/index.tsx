import React from 'react';

import Nav from 'components/Nav'
import Footer from 'components/Footer'

import * as S from './styles';

const ViewTemplate: React.FC<any> = ({ children }) => {
  return (
    <S.Container>
      <Nav />
      <S.WrapperContent>
        {children}
      </S.WrapperContent>
      <Footer />
    </S.Container>
  );
}

export default ViewTemplate;