import Link from "../Link";

import { useLanguage } from 'modules/language/hooks'

import * as S from "./styles";

const Nav: React.FC = () => {
  const { messages } = useLanguage()

  return (
    <S.HeaderStyle>
      <S.WrapSvg>
        <Link href="/" text="W" />
      </S.WrapSvg>

      <S.WrapLinks>
        <Link href="" text="language" />
        <Link href="/curriculum" text={messages.headers.Curriculum} />
        <Link href="/experiences" text={messages.headers.Experiences} />
        <Link href="/about" text={messages.headers.About} />
      </S.WrapLinks>
    </S.HeaderStyle>
  );
};

export default Nav;
