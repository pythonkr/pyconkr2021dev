import styled from '@emotion/styled';
import TableRow from '@material-ui/core/TableRow';
import { TableCell } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';


type aboutBenefitType = {
    name: string;
    contents: string[];
}

type aboutBenefitsType = aboutBenefitType[];

const aboutBenefits:aboutBenefitsType = [
    {
        name: '금액',
        contents: ['1000만원', '700만원', '500만원', '400만원', '100만원', '1만원', '도서/서비스 제공']
    },
    {
        name: '소셜미디어 홍보',
        contents: ['O', 'O', 'O', 'O', 'O', 'O', 'O']
    },
    {
        name: '발표영상 후원사 로고 노출',
        contents: ['O', 'O', 'O', 'O', 'O', 'X', 'O']
    },
    {
        name: '홈페이지 후원사 로고 노출',
        contents: ['O', 'O', 'O', 'O', 'O', 'O', 'O']
    },
    {
        name: '후원사세션',
        contents: ['2세션', '1세션', '1세션', 'X', '1세션(15분)', '1세션(15분)', 'X']
    },
    {
        name: '게더타운 버츄얼부스',
        contents: ['4', '2', '2', '1', '1', '1(선택)', '1(선택)']
    },
    {
        name: '3.10 토크 노출 횟수',
        contents: ['4회', '2회', 'X', '1회', '1회', 'X', 'X']
    },
    {
        name: '키스톤 인터뷰',
        contents: ['O', 'X', 'X', 'X', 'X', 'X', 'X']
    },
]




function TableSponsor() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{''}</TableCell>
                        <TableCell>키스톤</TableCell>
                        <TableCell>다이아몬드</TableCell>
                        <TableCell>플래티넘</TableCell>
                        <TableCell>골드</TableCell>
                        <TableCell>스타트업</TableCell>
                        <TableCell>커뮤니티</TableCell>
                        <TableCell>출판사/미디어/기술후원</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {aboutBenefits.map(benefit => {
                        return (
                            <TableRow key={benefit.name}>
                                <TableCell>{benefit.name}</TableCell>
                                {benefit.contents.map((sponsor,index) => {
                                    return <TableCell key={index}>{sponsor}</TableCell>
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableSponsor;