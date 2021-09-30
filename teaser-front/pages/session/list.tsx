import React from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { Session } from '../../types/session';
import SessionList from '../../components/session/SessionList';

interface SessionListIndexProps {
    sessionList: Session[];
}

const SessionListIndex = (data: SessionListIndexProps) => {
    return (
        <Layout>
            <SessionList sessionList={data.sessionList} />
        </Layout>
    );
};

export async function getStaticProps() {
    let url =
        process.env.ENV == 'DEV'
            ? 'https://dev.2021.api.pycon.kr/api/v1'
            : 'https://2021.api.pycon.kr/api/v1';

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
