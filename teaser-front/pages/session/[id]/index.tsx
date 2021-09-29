import React from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { Session } from '../../../types/session';
import Layout from "../../../components/Layout";

const SessionDetail = (session: Session) => {
    return (
        <Layout>{session.title}</Layout>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            }
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<{id: number | string }> = (context: GetStaticPropsContext) => {
    const slug = context.params?.id

    return {
        props: {
            id: 1,
            title: "기획자가 한 번 추천한 음식은 ‘당분간’ 추천하지 말라고 했다.",
            brief: "<p><span style=\"font-size: 14px;\">기획자가 한 번 추천한 음식은 ‘당분간’ 추천하지 말라고 했다.</span><br></p>",
            desc: "<p><span style=\"font-size: 14px;\">기획자가 한 번 추천한 음식은 ‘당분간’ 추천하지 말라고 했다.</span><br></p>",
            comment: "<p>기획자가 한 번 추천한 음식은 ‘당분간’ 추천하지 말라고 했다.<br></p>",
            difficulty: "B",
            duration: "L",
            language: "K",
            category: "데이터 과학 (Data Science)",
            introduction: "",
            video_url: null,
            slide_url: null,
            video_open_at: "10/02 10:00",
            user_name: "김다현"
        },
    }
}

export default SessionDetail
