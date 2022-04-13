import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    gap: 28px;
  
    @media ${theme.mediaQueries.sm} {
      flex-direction: column;
      gap: 28px;

      align-items: center;
    }
  `}
`;

export const Image = styled.img`
  ${({theme}) => css`
    width: 300px;
    height: 300px;
    border-radius: 8px;

    @media ${theme.mediaQueries.xs} {
      width: 240px;
      height: 240px;
    }
  `}
`

export const WrapperText = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 30vw;

    @media ${theme.mediaQueries.sm} {
      max-width: 90vw;
    }
  `}
`