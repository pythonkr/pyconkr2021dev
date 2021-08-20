import styled from '@emotion/styled';
import { AboutBlock } from '../about/AboutContext';
import { ContentBackgroundBlock } from '../ContentBackground';
import { TitleSponsorBlock } from './DetailBenefits';

function ValueOfSponsor() {
    return (
        <ContentBackgroundBlock>
            <TitleSponsorBlock>파이콘 한국 후원사의 가치</TitleSponsorBlock>
            <AboutBlock>
                <h1>브랜드 이미지</h1>
                <p>파이콘 한국 행사에 후원사로 참여하는 것은 오픈소스 커뮤니티 및 파이썬 사용자에 대한 방향과 태도를 가장 가깝게 나타냅니다. 파이콘 한국 준비위원회는 후원사의 메세지 전달과 홍보 활동에 필요한 지원을 제공합니다.</p>
            </AboutBlock>
            <AboutBlock>
                <h1>제품 마케팅</h1>
                <p>개발자를 대상으로 후원사의 서비스와 제품에 대한 다양한 홍보를 할 수 있는 버추얼 부스 / 세션 / 3.10 토크 등의 채널을 제공합니다.</p>
            </AboutBlock>
            <AboutBlock>
                <h1>개발자 구인</h1>
                <p>세션 또는 라이트닝 토크를 통해서 직/간접적으로 개발자 구인 활동이 가능합니다. 지난 파이콘 한국을 통해 많은 개발자들에게 후원사들이 알려지고, 채용으로 이어졌습니다.</p>
            </AboutBlock>
            <AboutBlock>
                <h1>지속적인 로고 노출</h1>
                <p>파이콘 한국 2021 행사 관련 영상에 후원사 로고가 노출되며, 지난 파이콘 한국의 행사 홈페이지에도 지속적으로 보관 및 유지가 됩니다. 파이콘 한국 홈페이지는 개발자뿐만 아니라 관련 업계 종사자에게도 꾸준히 노출이 되고 있는 채널입니다.</p>
            </AboutBlock>
        </ContentBackgroundBlock>
    )
}
export default ValueOfSponsor;