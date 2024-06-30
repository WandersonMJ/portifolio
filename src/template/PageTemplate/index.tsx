import React, { Suspense } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { themeColors } from 'styles/theme'

import * as S from './styles'

const Loading: React.FC = () => {
  return (
    <S.SVGWrapper>
        <AiOutlineLoading3Quarters size={60} color={themeColors.white} />
    </S.SVGWrapper>
  );
}

const PageTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
};

export default PageTemplate;
