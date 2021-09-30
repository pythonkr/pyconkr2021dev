import React from 'react';
import { Session } from '../../types/session';
import styled from '@emotion/styled';
import { DifficultyLabel, LanguageType } from '../../types/enums';

const SessionDetailContainer = styled.div`
    margin: 6rem 8rem;
    font-size: 1.75rem;
    line-height: 1;
    @media (max-width: 768px) {
        margin: 0;
        padding: 0 2rem;
    }
`;

const SessionTitle = styled.h3`
    font-size: 3rem;
    margin: 0;
    display: flex;
    width: 100%;
    align-items: center;
`;
const SessionBasicInfo = styled.div`
    margin-top: 4rem;
    border: 1px solid #fff;
    font-size: 1.5rem;
`;
const SessionBasicItem = styled.div`
    padding: 1.8rem 2rem;
    & + & {
        border-top: 1px solid #fff;
    }
`;

const SessionInfo = styled.div`
    margin-top: 2rem;
`;

interface SessionDetailProps {
    session: Session;
}

const SessionDetail: React.FC<SessionDetailProps> = ({ session }) => {
    const [date, time] = session.video_open_at.split(' ');
    const [month, day] = date.split('/');

    return (
        <SessionDetailContainer>
            <SessionTitle>{session.title}</SessionTitle>
            <SessionBasicInfo>
                <SessionBasicItem>카테고리: {session.category_data.name}</SessionBasicItem>
                <SessionBasicItem>
                    난이도: {DifficultyLabel[session.difficulty as keyof typeof DifficultyLabel]}
                </SessionBasicItem>
                <SessionBasicItem>
                    날짜: 2021년 {month}월 {parseInt(day, 10)}일 {time}
                </SessionBasicItem>
                <SessionBasicItem>언어: {LanguageType[session.language as keyof typeof LanguageType]}</SessionBasicItem>
            </SessionBasicInfo>
        </SessionDetailContainer>
    );
};

export default SessionDetail;
