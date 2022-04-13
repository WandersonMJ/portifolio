import NextLink from "next/link";

import { useLanguage } from 'modules/language/hooks';
import { cheatSheetLang } from 'modules/language/store';

import { WrapLink, TextLink } from "./styles";

interface ILink {
  href: string;
  text?: string;
  children?: any;
  icon?: boolean
}

const Link: React.FC<ILink> = ({ text, href, children, icon }) => {
  const { toggleChangeLanguage, language } = useLanguage()

  if(icon) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <TextLink bold>{text}</TextLink>
      </a>
    )
  }

  if(text === 'language') {
    return (
      <WrapLink onClick={() => toggleChangeLanguage()}>
        <TextLink>{cheatSheetLang[language].toUpperCase()}</TextLink>
      </WrapLink>
    )
  }

  return (
  <WrapLink>
    <NextLink href={href} passHref>
      <a>{children || <TextLink bold>{text}</TextLink>}</a>
    </NextLink>
  </WrapLink>
)};

export default Link;
