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
            </SupportBlock>
        </ContentBackgroundBlock>
    )
}

export default AboutSponsors;