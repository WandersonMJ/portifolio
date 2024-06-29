import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { useLanguage } from 'modules/language/hooks';
import Link from 'components/Link';
import { themeColors } from 'styles/theme'
import * as S from './styles';

const Nav: React.FC = () => {
  const { messages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.HeaderStyle>
      <S.WrapSvg>
        <Link href="/" text="W" />
      </S.WrapSvg>

      <S.Burger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </S.Burger>

      <S.WrapLinks className={isOpen ? 'open' : ''}>
        {isOpen && (
          <S.WraperClose onClick={() => toggleMenu()}>
            <CgClose size={20} color={themeColors.white} />
          </S.WraperClose>
        )}
        <Link text="language" href="" callback={toggleMenu} />
        <Link text={messages.headers.Curriculum} href="/curriculum" callback={toggleMenu} />
        <Link text={messages.headers.Experiences} href="/experiences" callback={toggleMenu} />
        <Link text={messages.headers.About} href="/about" callback={toggleMenu} />
        <Link text={messages.headers.Skills} href="/skills" callback={toggleMenu} />
      </S.WrapLinks>
    </S.HeaderStyle>
  );
};

export default Nav;
