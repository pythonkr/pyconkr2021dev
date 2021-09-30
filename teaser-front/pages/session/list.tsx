import React from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { Session } from '../../types/session';
import SessionList from '../../components/session/SessionList';
import styled from '@emotion/styled';

interface SessionListIndexProps {
    sessionList: Session[];
}

const SessionTitle = styled.h2`
    font-size: 3rem;
    color: #f5df4d;
    @media (max-width: 768px) {
        font-size: 4rem;
    }
`;
const SessionListContainer = styled.div`
    margin: 6rem 8rem;
    font-size: 1.75rem;
    line-height: 1.5;
    @media (max-width: 768px) {
        margin: 0;
        padding: 2rem;
    }
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

const SessionListIndex = (data: SessionListIndexProps) => {
    return (
        <Layout>
            <SessionListContainer>
                <SessionTitle>발표 목록</SessionTitle>
                <SessionList sessionList={data.sessionList} />
            </SessionListContainer>
        </Layout>
    );
};

export async function getStaticProps() {
    let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1';

    if (process.env.ENV == 'LOCAL') {
        url = 'http://127.0.0.1:8000/api/v1';
    }

    try {
        const res = await axios.get(`${url}/program`);
        return {
            props: {
                sessionList: res.data
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}

export default SessionListIndex;
