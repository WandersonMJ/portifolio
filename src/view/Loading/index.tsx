import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { themeColors } from 'styles/theme'

import * as S from './styles';

const Loading: React.FC = () => {
    return (
    <S.Container>
        <AiOutlineLoading3Quarters size={60} color={themeColors.white} />
    </S.Container>
    );
}

export default Loading;