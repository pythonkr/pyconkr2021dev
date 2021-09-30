import React from 'react';
import { Session } from '../../types/session';
import styled from '@emotion/styled';
import { DifficultyLabel } from '../../types/enums';

const Styles = styled.div`
    margin: 3rem;

    table {
        border-spacing: 0;
        border: 0;
        border-top: 3px solid #fff;
        width: 100%;
        table-layout: fixed;

        tr {
            :last-child {
                td {
                    border-bottom: 1px solid #fff;
                }
            }
        }

        th {
            height: 3rem;
            font-size: 1.5rem;
            padding: 0.5rem;
            :first-of-type {
                width: 120px;
            }
        }
        tbody {
            width: 100%;
        }
        td {
            margin: 0;
            padding: 2rem 1rem;
            text-align: center;
            font-size: 1.4rem;
            border-top: 1px solid #fff;
            :last-child {
                border-right: 0;
            }
        }
    }
`;
const ProgramItem = styled.div`
    width: 80%;
    line-height: 1.6;
    margin: 0 auto;
    word-break: keep-all;
`;

const Title = styled.div`
    font-size: 1.4rem;
`;
const SessionLink = styled.a`
    &:hover {
        text-decoration: underline;
    }
`;

const Speaker = styled.div`
    margin-top: 1.3rem;
    font-size: 1.3rem;
`;

const Difficulty = styled.span<{ level: string }>`
    display: inline-block;
    vertical-align: top;
    padding: 0.3em 0.5em;
    font-size: 0.9rem;
    border-radius: 4px;
    line-height: 1;
    margin-left: 0.7rem;
    margin-top: 0.4rem;
    ${({ level }) => {
        if (level === 'B') {
            return `
        background-color: #139d2b;
      `;
        } else if (level === 'I') {
            return `
        background-color: #ff7f00;
      `;
        } else if (level === 'E') {
            return `
        background-color: #cf3535;
      `;
        }
        return `
      display: none;
    `;
    }}
`;

interface SessionTableProps {
    day: string;
    headers: string[];
    sessionList: Session[];
}

interface SessionItemProps {
    session: Session;
}

const SessionItem: React.FC<SessionItemProps> = ({ session }) => {
    return (
        <ProgramItem>
            <Title>
                <SessionLink href={`/session/${session.id}`}>
                    {session.title}
                </SessionLink>
                {session.title !== '-' && (
                    <Difficulty level={session.difficulty}>
                        {
                            DifficultyLabel[
                                session.difficulty as keyof typeof DifficultyLabel
                            ]
                        }
                    </Difficulty>
                )}
            </Title>
            <Speaker>{session.user_name}</Speaker>
        </ProgramItem>
    );
};

const SessionTable: React.FC<SessionTableProps> = ({
    day,
    headers,
    sessionList
}) => {
    const programListLength = sessionList.length;

    return (
        <Styles>
            <table>
                <thead>
                    <tr>
                        <th>
                            시간
                            <br />
                            (KST)
                        </th>
                        {headers.map((header: string) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {day === 'day1' && (
                        <tr>
                            <td colSpan={3}>
                                <ProgramItem>오프닝</ProgramItem>
                            </td>
                        </tr>
                    )}
                    {sessionList.map(
                        (session: Session, index: number, elements) => {
                            const time = session.video_open_at.slice(-5);
                            if (index < programListLength - 1) {
                                const sameTimeProgram = elements[index + 1];
                                return (
                                    <tr key={index}>
                                        {index % 2 === 0 && (
                                            <>
                                                <td>{time}</td>
                                                <td>
                                                    <SessionItem
                                                        session={session}
                                                    />
                                                </td>
                                                <td>
                                                    <SessionItem
                                                        session={
                                                            sameTimeProgram
                                                        }
                                                    />
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                );
                            }
                        }
                    )}
                    {day === 'day2' && (
                        <tr>
                            <td colSpan={3}>
                                <ProgramItem>클로징</ProgramItem>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Styles>
    );
};

export default SessionTable;
