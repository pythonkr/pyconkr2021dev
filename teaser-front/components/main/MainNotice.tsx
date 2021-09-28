import styled from '@emotion/styled';
import React from 'react';

const NoticeBlock = styled.div`
    padding-top: 2rem;
    padding-bottom: 3rem;
    line-height: 3rem;
`;

const NoticeTitle = styled.h1`
    font-size: 4rem;
    color: #F5DF4D;
`;
const NoticeItem = styled.li`
    font-size: 1.75rem;
`
const NoticeLink = styled.a`
    color: #4cc5f4;
    &:hover {
        text-decoration: underline;
    }
`


interface MainNoticeProps {
    noticeData: {
        title: string;
        link: string;
    }[]
}

const MainNotice: React.FC<MainNoticeProps> = ({ noticeData }) => {
    return (
        <NoticeBlock>
            <NoticeTitle>공지사항</NoticeTitle>
            <ul>
            {noticeData.map((notice : any) => (
                <NoticeItem key={notice.title}>
                    <NoticeLink href={notice.link}>{notice.title}</NoticeLink>
                </NoticeItem>
            ))}
            </ul>
        </NoticeBlock>

    )
}

export default MainNotice;
