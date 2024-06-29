import NextLink from "next/link";
import { useLanguage } from 'modules/language/hooks';
import { cheatSheetLang } from 'modules/language/store';
import { WrapLink, TextLink } from "./styles";

interface ILink {
  href: string;
  text?: string;
  callback?: () => void;
  children?: any;
  icon?: boolean;
}

const Link: React.FC<ILink> = ({ text, href, callback, children, icon }) => {
  const { toggleChangeLanguage, language } = useLanguage();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (callback) {
      callback();
    }
  };

  if (icon) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <TextLink bold>{text}</TextLink>
      </a>
    );
  }

  if (text === 'language') {
    return (
      <WrapLink onClick={() => { toggleChangeLanguage(); if (callback) callback(); }}>
        <TextLink>{cheatSheetLang[language].toUpperCase()}</TextLink>
      </WrapLink>
    );
  }

  return (
    <WrapLink>
      <NextLink href={href} passHref>
        <a onClick={handleClick}>{children || <TextLink bold>{text}</TextLink>}</a>
      </NextLink>
    </WrapLink>
  );
};

export default Link;
