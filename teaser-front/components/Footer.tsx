import styled from '@emotion/styled';
import dot1 from '../public/img/dot1.png';
import dot2 from '../public/img/dot2.png';
import Image from 'next/image';
import { Slogan } from './main/MainView';
import { ContentBackgroundBlock } from './ContentBackground';

function Footer() {
    return (
        <ContentBackgroundBlock>
            <Image src={dot1} alt="dot1" layout="responsive" />
            <Slogan />
            <Image src={dot2} alt="dot1" layout="responsive" />
        </ContentBackgroundBlock>
    )
}

export default Footer;