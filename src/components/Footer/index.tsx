import Link from "../Link";

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiFacebook, FiInstagram } from 'react-icons/fi'

import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.FooterStyle>
      <S.WrapLinks>
        <Link href="https://github.com/WandersonMJ" text="Github" icon />
        <AiFillGithub />
      </S.WrapLinks>
      <S.WrapLinks>
        <Link href="https://www.linkedin.com/in/wanderson-marques-junior-3637a6186/" text="Linkedin" icon />
        <AiFillLinkedin />
      </S.WrapLinks>
      <S.WrapLinks>
        <Link href="https://www.facebook.com/profile.php?id=100070510027713" text="Facebook" icon />
        <FiFacebook />
      </S.WrapLinks>
      <S.WrapLinks>
        <Link href="https://www.instagram.com/wanderson.mj/" text="Instagram" icon />
        <FiInstagram />
      </S.WrapLinks>
    </S.FooterStyle>
  );
};

export default Footer;
