import styled from '@emotion/styled';
import Image from 'next/image';
import { Slogan } from './main/MainView';
import { ContentBackgroundBlock } from './ContentBackground';
import { useRouter } from 'next/router';
import PyconLogo from './PyconLogo';

function Footer() {
  const router = useRouter();

  return (
    <ContentBackgroundBlock>
      <Image
        src="https://2021.pycon.kr/img/dot1.png"
        width={500}
        height={100}
        alt="dot1"
        layout="responsive"
      />
      {router.pathname === '/' && <PyconLogo />}
      {router.pathname !== '/' && <Slogan />}
      <Image
        src="https://2021.pycon.kr/img/dot2.png"
        width={500}
        height={100}
        alt="dot2"
        layout="responsive"
      />
    </ContentBackgroundBlock>
  );
}

export default Footer;
