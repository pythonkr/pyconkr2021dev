import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import Shortcut from './Shortcut';

const MainViewBlock = styled.div`
    text-align: center;
    padding-top: 2rem;
    margin-top: 4rem;
    color: #939597;
    align-items: center;
    @media (max-width: 768px) {
        padding-top: 0;
        margin-top: 0;
    }
`;

const SloganBlock = styled.h1`
    font-size: 8rem;
    text-align: center;
    color: #f5df4d;

    @media (max-width: 768px) {
        font-size: 4.5rem;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 6rem;
    }
    @media (min-width: 1200px) and (max-width: 1399px) {
        font-size: 6.7rem;
    }
`;

const ScheduleBlock = styled.div`
    color: #939597;
    font-size: 2.5rem;
    margin-top: 7rem;
    margin-bottom: 7rem;

    @media (max-width: 768px) {
        font-size: 1.75rem;
        margin: 5rem 0;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 2.25rem;
    }
`;

export const RegisterLink = styled.a`
    display: inline-block;
    background-color: #f5df4d;
    color: black;
    border-radius: 4rem;
    font-size: 3rem;
    font-weight: 700;
    padding: 1.4rem 17rem;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
        padding: 1rem 5rem;
        font-size: 1.5rem;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        padding: 1rem 10rem;
        font-size: 2rem;
    }
`;

export function Slogan() {
    return (
        <SloganBlock>
            Stay Home, <br />
            Stay Connected
        </SloganBlock>
    );
}

const GuideButtonBlock = styled.div`
    font-size: 1.5rem;
`;

function MainView() {
    return (
        <ContentBackgroundBlock>
            <MainViewBlock>
                <Slogan />
                <ScheduleBlock>온라인 컨퍼런스 10/2(토)~10/3(일)</ScheduleBlock>
                <Shortcut />
            </MainViewBlock>
        </ContentBackgroundBlock>
    );
}

export default MainView;
