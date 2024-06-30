import { TextStyle } from "components/Text/styles";
import styled, { css } from "styled-components";
import Text from "../Text";

export const TextLink = styled(Text)``;

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 27px 44px;
  position: relative;

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
      display: flex;
      flex-direction: column;
      gap: 0px;
      width: 200px;
      border-left-width: 1px;
      border-left-color: ${theme.colors.Realblack};
      border-left-style: groove;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      background-color: ${theme.colors.black};
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 10;
      padding: 42px 16px 16px;
      gap: 12px;

      &.open {
        transform: translateX(0);
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
  ${({ theme }) => css`
    @media ${theme.mediaQueries.smUp} {
      display: none;
    }

    display: initial;
    position: absolute;
    right: 14px;
    top: 14px;
  `}
`;
