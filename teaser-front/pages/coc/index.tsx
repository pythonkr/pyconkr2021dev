import styled from '@emotion/styled';
import Header from '../../components/Header';
import PyconLogo from '../../components/PyconLogo';
import Footer from '../../components/Footer';
import CocContext from '../../components/coc/context';

export default function coc() {
    return (
        <>
            <Header />
            <PyconLogo />
            <CocContext />
            <Footer />
        </>
    )
}

