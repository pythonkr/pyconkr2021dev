import React from 'react';
import { SpeechToTextUrl } from '../../types/enums';
import styled from '@emotion/styled';
import StyledLink from '../StyledLink';

const Styles = styled.div`
    table {
        border-spacing: 0;
        border: 0;
        border-top: 3px solid grey;
        width: 100%;
        table-layout: fixed;

        tr {
            :last-child {
                td {
                    border-bottom: 1px solid grey;
                }
            }
        }
        th {
            height: 3rem;
            font-size: 1.5rem;
            padding: 0.5rem;
            :nth-of-type(1) {
                width: 35%;
            }
            :nth-of-type(2) {
                width: 20%;
            }
        }
        td {
            margin: 0;
            padding: 1.6rem;
            font-size: 1.4rem;
            text-align: center;
            border: 1px solid grey;
            :first-child {
                border-left: 0;
            }
            :last-child {
                text-align: left;
                border-right: 0;
            }
            @media (max-width: 768px) {
                font-size: 1.6rem;
            }
        }
    }
`;
const SubText = styled.div`
    margin: 4rem 0 2rem;
    strong {
        color: #ff4141;
    }
`;

const SpeechToTextTable: React.FC = () => {
    return (
        <Styles>
            <SubText>
                비밀번호: <strong>1234</strong>
            </SubText>
            <table>
                <thead>
                    <tr>
                        <th>요일</th>
                        <th>트랙</th>
                        <th>쉐어타이핑 접속 정보</th>
                    </tr>
                </thead>
                <tbody>
                    {SpeechToTextUrl.map((item, index) => {
                        return (
                            <tr key={index}>
                                {index % 2 === 0 && <td rowSpan={2}>{item.date}</td>}
                                <td>{item.track}</td>
                                <td>
                                    {item.urlInfo.map((url, index) => (
                                        <div key={index}>
                                            {url.time} <StyledLink url={url.videoUrl}>{url.videoUrl}</StyledLink>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Styles>
    );
};

export default SpeechToTextTable;
