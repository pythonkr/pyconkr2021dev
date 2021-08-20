import Header from '../../components/Header';
import FundingPyconkit from '../../components/contribute/FundingPyconkit';
import GotoContribute from '../../components/contribute/GotoContribute';
import PyconLogo from '../../components/PyconLogo';
import Footer from '../../components/Footer';
import MakePyCon from '../../components/contribute/MakePyCon';

export default function contribute() {
    return (
        <div>
            <Header />
            <PyconLogo />
            <GotoContribute />
            <FundingPyconkit />
            <MakePyCon />
            <Footer />
        </div>
    )
}