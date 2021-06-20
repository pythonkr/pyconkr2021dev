import styled from '@emotion/styled';
import dot1 from '../public/img/dot1.png';
import dot2 from '../public/img/dot2.png';
import Image from 'next/image';
import PyconLogo from './PyconLogo';
import { Slogan } from './main/MainView';

function Footer() {
    return (
        <div>
            <Image src={dot1} alt="dot1" layout="responsive" />
            <Slogan />
            <Image src={dot2} alt="dot1" layout="responsive" />
        </div>
    )
}

export default Footer;