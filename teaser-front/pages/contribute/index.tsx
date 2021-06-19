import FundingPyconkit from '../../components/contribute/FundingPyconkit';
import GotoContribute from '../../components/contribute/GotoContribute';
import Header from '../../components/Header';
import PyconLogo from '../../components/PyconLogo';

export default function contribute() {
    return (
        <>
            <Header />
            <PyconLogo />
            <GotoContribute />
            <FundingPyconkit />
        </>
    )
}