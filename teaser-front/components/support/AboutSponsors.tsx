import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import TableRow from '@material-ui/core/TableRow';
import { TableCell } from '@material-ui/core';
import TableBody from 'material-ui/Table/TableBody';
import TableHeader from 'material-ui/Table/TableHeader';
import TableSponsor from './TableSponsor';

const SupportBlock = styled.div`
    h1 {
        font-size: 4rem;
        color: #F5DF4D;
    }
    h3 {
        font-size: 2rem;
    }
`;

function AboutSponsors() {
    return (
        <ContentBackgroundBlock>
            <SupportBlock>
                <h1>후원 혜택 안내</h1>
                <h3>2021 파이콘 한국과 함께 하는 파트너스</h3>
                <TableSponsor />
                <p><strong>(표기된 금액은 부가세가 포함되지 않은 금액이며, 부가세는 10% 입니다.)</strong></p>
                <p>후원 가능 여부나 기타 문의사항은 언제든지 sponsor@pycon.kr로 문의 주시기 바랍니다. </p>
                <p>커뮤니티 스폰서십은 비영리 단체에 한해 후원이 가능합니다.</p>
                <p>세부 사항은 행사 전까지 다소 변경될 수 있습니다.</p>
                <p>출판사 후원의 경우, 파이썬 관련 도서 출판 기록이 필요합니다.</p>
                <p>스타트업 스폰서십은 사내에서 파이썬을 사용하고, 설립 2.5년 이하, 사내 인원 15인 이하인 곳에 한합니다.</p>
            </SupportBlock>
        </ContentBackgroundBlock>
    )
}

export default AboutSponsors;
