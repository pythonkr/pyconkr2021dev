import styled from '@emotion/styled';
import Image from 'next/image';
import { Slogan } from './main/MainView';
import { ContentBackgroundBlock } from './ContentBackground';

function Footer() {
    return (
        <ContentBackgroundBlock>
            <Image src="https://pyconkr-2021.s3.ap-northeast-2.amazonaws.com/img/dot1.png" width={500} height={100} alt="dot1" layout="responsive" />
            <Slogan />
            <Image src="https://pyconkr-2021.s3.ap-northeast-2.amazonaws.com/img/dot2.png" width={500} height={100} alt="dot1" layout="responsive" />
        </ContentBackgroundBlock>
    )
}

export default Footer;