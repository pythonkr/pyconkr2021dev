import styled from '@emotion/styled';
import Image from 'next/image';
import { Slogan } from './main/MainView';
import { ContentBackgroundBlock } from './ContentBackground';

function Footer() {
    return (
        <ContentBackgroundBlock>
            <Image src="/img/dot1.png" width={500} height={100} alt="dot1" layout="responsive" />
            <Slogan />
            <Image src="/img/dot2.png" width={500} height={100} alt="dot1" layout="responsive" />
        </ContentBackgroundBlock>
    )
}

export default Footer;