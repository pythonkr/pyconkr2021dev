import Header from '../../components/Header';
import PyconLogo from '../../components/PyconLogo';
import AboutContext from '../../components/about/AboutContext';
import Footer from '../../components/Footer';


export default function about() {
    return (
        <div>
            <Header />
            <PyconLogo />
            <AboutContext />
            <Footer />
        </div>
    )
}