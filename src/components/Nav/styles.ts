import { TextStyle } from "components/Text/styles";
import styled, { css } from "styled-components";
import Text from "../Text";

export const TextLink = styled(Text)``;

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 27px 44px;
  position: relative; /* Adicionado para posicionamento do toast */

  span {
    font-weight: 600;
  }
`;

export const WrapSvg = styled.div`
  width: fit-content;
`;

export const WrapLinks = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 65px;
    width: fit-content;
    position: relative;

    ${TextStyle} {
      display: inline;
    }

    @media ${theme.mediaQueries.sm} {
      display: none;
      flex-direction: column;
      gap: 0px;
      width: 100%;

      &.open {
        display: flex;
        position: absolute;
        border-radius: 15px;
        border: 1px solid ${theme.colors.white};
        top: 30px;
        right: 40px;
        background-color: ${theme.colors.black};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 16px;
        width: 200px;
        z-index: 10;
        padding-top: 50px;
      }
    }
  `}
`;

export const Burger = styled.div`
  ${({ theme }) => css`
    display: none;
    cursor: pointer;

    @media ${theme.mediaQueries.sm} {
      display: block;
      span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px;
        background: ${theme.colors.white};
        transition: 0.4s;
      }
    }
  `}
`;

export const WraperClose = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
`
