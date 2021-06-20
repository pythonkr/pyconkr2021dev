import styled from '@emotion/styled';
import Header from '../../components/Header';
import PyconLogo from '../../components/PyconLogo';
import Footer from '../../components/Footer';
import { ContentBackgroundBlock } from '../../components/ContentBackground';

const SupportBlock = styled.div`


    h1 {
        font-size: 4rem;
    }
    h3 {
        font-size: 2rem;
    }
`;

const AboutSupportBenefitsBlock = styled.div`
    height: 50rem;
    width: 100%;
    background-color: #f5df4d;
    border-radius: 1rem;
    
`;

export default function support() {
    return (
        <>
            <Header />
            <PyconLogo />
            <ContentBackgroundBlock>
                <SupportBlock>
                    <h1>후원 혜택 안내</h1>
                    <h3>2021 파이콘 한국과 함께 하는 파트너스</h3>
                    <AboutSupportBenefitsBlock></AboutSupportBenefitsBlock>
                </SupportBlock>
            </ContentBackgroundBlock>
            <Footer />
        </>
    )
}