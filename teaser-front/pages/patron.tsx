import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../components/ContentBackground';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PyconLogo from '../components/PyconLogo';
import {
    PersonIntroBlock,
    PersonNameBlock,
    PersonText,
    PyconPersonBlock
} from '../components/contribute/MakePyCon';

const PatronTitle = styled.h1`
    font-size: 4rem;
    color: #f5df4d;
    @media (max-width: 768px) {
        font-size: 3.5rem;
    }
`;
const PatronIntroBlock = styled(PersonIntroBlock)`
    font-size: 1.75rem;
    line-height: 1.5;
`;
const PatronsIntro = styled.div`
    font-size: 1.75rem;
    line-height: 1.5;
`;
const PatronsBlock = styled.div`
    margin-top: 6rem;
`;

const Ellipse = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    margin: 1rem 0;
`;

const YellowEllipse = styled(Ellipse)`
    background-color: #f5df4d;
`;

const GreyEllipse = styled(Ellipse)`
    background-color: #939597;
`;

export default function Patron({ data_patron }: any) {
    return (
        <>
            <Header />
            <PyconLogo />
            <ContentBackgroundBlock>
                <PatronTitle>개인 후원자 목록</PatronTitle>
                <PatronsIntro>
                    파이콘 한국 2021을 후원해주신 개인 후원자 분들의 명단입니다.
                    후원해주셔서 감사합니다.
                </PatronsIntro>
                <PatronsBlock>
                    {data_patron.map((d: any, index: number) => {
                        return (
                            <PyconPersonBlock key={d.user_name}>
                                {index % 2 === 0 ? (
                                    <YellowEllipse />
                                ) : (
                                    <GreyEllipse />
                                )}
                                <PatronIntroBlock>
                                    <PersonNameBlock>
                                        {d.user_name}
                                    </PersonNameBlock>
                                    <PersonText>{d.desc}</PersonText>
                                </PatronIntroBlock>
                            </PyconPersonBlock>
                        );
                    })}
                </PatronsBlock>
            </ContentBackgroundBlock>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    let url =
        process.env.ENV == 'DEV'
            ? 'https://dev.2021.api.pycon.kr/api/v1'
            : 'https://2021.api.pycon.kr/api/v1';

    if (process.env.ENV == 'LOCAL') {
        url = 'http://127.0.0.1:8000/api/v1';
    }

    const res = await fetch(url + '/patron/');
    const data_patron = await res.json();

    if (!data_patron) {
        return {
            notFound: true
        };
    }

    return {
        props: { data_patron: data_patron } // will be passed to the page component as props
    };
}
