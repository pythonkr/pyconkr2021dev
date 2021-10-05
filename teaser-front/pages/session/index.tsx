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
                    파이콘 한국 2021의 라이브 영상은 행사 직후 삭제되며, 발표 영상은 행사 종료 후 편집을 거쳐 파이콘
                    한국 유튜브에 업로드될 예정입니다.{' '}
                </SessionInfoItem>
            </SessionInfo>
            <SessionToggleButton handleClick={updateSelectedDay} />
            {selectedDay === 'day1' ? (
                <SessionTable day="day1" headers={['트랙1(101)', '트랙2(102)']} sessionList={data.day1} />
            ) : (
                <SessionTable day="day2" headers={['트랙1(103)', '트랙2(104)']} sessionList={data.day2} />
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
