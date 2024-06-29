import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const WrapperContent = styled.div`
  ${({theme}) => css`
    padding: 20px;
    height: 70%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media ${theme.mediaQueries.sm} {
      /* height: 60%; */
      height: fit-content;
    }
  `} 
`