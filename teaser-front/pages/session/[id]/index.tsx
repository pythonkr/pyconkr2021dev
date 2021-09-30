import React from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { Session } from '../../../types/session';
import SessionDetail from '../../../components/session/SessionDetail';
import Layout from '../../../components/Layout';
import axios from 'axios';

const SessionDetailIndex = (session: Session) => {
    return (
        <Layout>
            <SessionDetail session={session} />
        </Layout>
    );
};

export const getStaticPaths = async () => {
    let url =
        process.env.ENV == 'DEV'
            ? 'https://dev.2021.api.pycon.kr/api/v1'
            : 'https://2021.api.pycon.kr/api/v1';
    if (process.env.ENV == 'LOCAL') {
        url = 'http://127.0.0.1:8000/api/v1';
    }

    try {
        const res = await axios.get(`${url}/program`);
        const paths = res.data.map((session: Session) => {
            return {
                params: { id: session.id.toString() }
            };
        });
        return {
            paths,
            fallback: false
        };
    } catch (error) {
        console.log(error);
        return {
            paths: [],
            fallback: false
        };
    }
};

export const getStaticProps: GetStaticProps<{ id: number | string }> = async (
    context: GetStaticPropsContext
) => {
    const id = context.params?.id;

    let url =
        process.env.ENV == 'DEV'
            ? 'https://dev.2021.api.pycon.kr/api/v1'
            : 'https://2021.api.pycon.kr/api/v1';
    if (process.env.ENV == 'LOCAL') {
        url = 'http://127.0.0.1:8000/api/v1';
    }

    try {
        const res = await axios.get(`${url}/program/${id}`);
        return {
            props: res.data
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true
        };
    }
};

export default SessionDetailIndex;
