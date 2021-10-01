import React, { useState } from 'react';
import SessionTable from '../../components/session/SessionTable';
import { Session } from '../../types/session';
import Layout from '../../components/Layout';
import axios from 'axios';
import SessionToggleButton from '../../components/session/SessionToggleButton';
import styled from '@emotion/styled';
import StyledLink from '../../components/StyledLink';

interface SessionProps {
    day1: Session[];
    day2: Session[];
}

export const SessionInfo = styled.div`
    padding: 0 6rem 4rem;
    font-size: 1.4rem;
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 2rem;
        padding: 3rem;
    }
`;

export const SessionTitle = styled.h2`
    font-size: 3rem;
    color: #f5df4d;
    @media (max-width: 768px) {
        font-size: 4rem;
    }
`;

export const SessionInfoItem = styled.div`
    margin-bottom: 1rem;
`;

export default function Index(data: SessionProps) {
    const [selectedDay, setSelectedDay] = useState<string>('day1');

    const updateSelectedDay = (day: string): void => {
        setSelectedDay(day);
    };

    return (
        <Layout>
            <SessionInfo>
                <SessionTitle>발표 시간표</SessionTitle>
                <SessionInfoItem>
                    세션은 <StyledLink url="https://www.youtube.com/c/PyConKRtube">파이콘 한국 유튜브</StyledLink>를
                    통해 시청하실 수 있습니다.
                </SessionInfoItem>
                <SessionInfoItem>
                    파이콘 한국은 올해도 접근성 향상과 다양성을 위하여 문자 통역을 지원합니다. 문자 통역 접속 정보는{' '}
                    <StyledLink url="/session/speech-to-text">문자 통역 안내 페이지</StyledLink>를 참고해주세요.
                </SessionInfoItem>
            </SessionInfo>
            <SessionToggleButton handleClick={updateSelectedDay} />
            {selectedDay === 'day1' ? (
                <SessionTable day="day1" headers={['101', '102']} sessionList={data.day1} />
            ) : (
                <SessionTable day="day2" headers={['103', '104']} sessionList={data.day2} />
            )}
        </Layout>
    );
}

export async function getStaticProps() {
    let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1';

    if (process.env.ENV == 'LOCAL') {
        url = 'http://127.0.0.1:8000/api/v1';
    }

    try {
        const day1Response = await axios.get(url + '/program?day=2');
        const day2Response = await axios.get(url + '/program?day=3');

        return {
            props: {
                day1: day1Response.data,
                day2: day2Response.data
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}
