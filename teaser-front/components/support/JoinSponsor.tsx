import React from 'react';
import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import { AboutBlock } from '../about/AboutContext';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const AboutSupportBlock = styled(AboutBlock)`
    margin-bottom: 10rem;
    li {
        font-size: 1.75rem;
    }
`;

const SupportEndedMessage = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
    font-size: 24px;
    line-height: 1.43;
    border-radius: 8px;
    background-color: rgba(172,172,172,0.2);
`;

const SupportEndedIcon = styled(ErrorOutlineIcon)`
    font-size: 28px;
    margin-right: 6px;
`


function JoinSponsor() {
    return (
        <ContentBackgroundBlock>
            <AboutSupportBlock>
                <h1>후원사로 참여하기</h1>
                <SupportEndedMessage>
                    <SupportEndedIcon />현재 후원사 모집은 종료되었습니다.
                </SupportEndedMessage>
                <br />
                <h3>선정 절차</h3>
                <p>후원사 신청 이후 선정 절차는 아래와 같으며, 관련 안내는 파이콘 홈페이지 또는 이메일로 진행됩니다.</p>
                <ol>
                    <li><p>후원사에서 파이콘 한국 홈페이지를 통해 후원사 신청을 합니다.</p></li>
                    <li><p>파이콘 한국 준비위원회에서 접수해주신 신청서에 대해 필수 정보 중 빠지거나 잘못 기입된 정보가 있는지 확인합니다.</p></li>
                    <ul>
                        <li><p>빠지거나 잘못 기입된 정보가 있는 경우에는 추가적인 정보나 수정을 요청할 수 있습니다.</p></li>
                    </ul>
                    <li><p>후원사 신청서에 대한 검토가 끝나면 후원 금액을 입금할 계좌를 안내해드립니다.</p></li>
                    <ul>
                        <li><p>표기된 후원 금액은 <strong>부가세가 포함되지 않은 금액</strong>입니다.</p></li>
                        <li><p>후원금을 입금하실 때에는 <strong>부가세 10%를 가산</strong>하여 입금해주셔야 합니다.</p></li>
                    </ul>
                    <li><p>후원 금액이 정상적으로 입금된 것을 준비위원회에서 확인하면 후원사로 확정됩니다.</p></li>
                    <li><p>전자세금계산서가 우선적으로 필요하신 경우 전자세금계산서 발행용 이메일 주소를 기록하여 계산서 발행을 요청해주시기 바랍니다.</p></li>
                </ol>
            </AboutSupportBlock>
        </ContentBackgroundBlock>
    )
}

export default JoinSponsor;
