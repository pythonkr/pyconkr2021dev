import Header from '../../components/Header';
import PyconLogo from '../../components/PyconLogo';
import Footer from '../../components/Footer';
import AboutSponsors from '../../components/support/AboutSponsors';


export default function support() {
    return (
        <>
            <Header />
            <PyconLogo />
            <ContentBackgroundBlock>
                <SupportBlock>
                    <h1>후원 혜택 안내</h1>
                    <h3>파이콘 2021 한국과 함께 하는 파트너스</h3>
                    <AboutSupportBenefitsBlock></AboutSupportBenefitsBlock>
                </SupportBlock>
            </ContentBackgroundBlock>
            <AboutSponsors />
            <Footer />
        </>
    )
}
