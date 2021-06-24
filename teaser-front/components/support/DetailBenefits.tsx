import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import { AboutBlock } from '../about/AboutContext';
import Image from 'next/image';
// import gateherImg from '../../public/img/gathertown.png';

export const TitleSponsorBlock = styled.h1`
    color: #F5DF4D;
    font-size: 4rem;

    @media (max-width: 768px) {
        font-size: 3.75rem;
    }
`;

const AboutbenefitsBlock = styled(AboutBlock)`

    @media (max-width: 768px) {
        h1 {
            font-size: 3.5rem;
        }

        h3 {
            font-size: 1.8rem;

        }
    }
    @media (min-width: 768px) and (max-width: 1199px) {

        h3 {
            font-size: 1.5rem;
        }
    }
`;

const DetailBenefitsBlock = styled(ContentBackgroundBlock)`
    line-height: 3rem;
`;

const AboutdetailLogoBlock = styled.div`
    margin-top:6rem;
`;

function DetailBenefits() {
    return (
        <DetailBenefitsBlock>
            <TitleSponsorBlock>구체적인 후원사 혜택 상세</TitleSponsorBlock>
            <AboutbenefitsBlock>
                <h1>키스톤 인터뷰</h1>
                <h3>* 대상 후원 등급: 키스톤</h3>
                <p>키스톤 등급 후원사의 단독 혜택으로, 10분 이내의 인터뷰를 파이콘 준비위원회와 함께 진행할 수 있습니다. 회사에 대한 소개와 앞으로의 목표를 듣고, 파이콘 한국 2021 행사를 후원하는 이유와 회사 내에서 파이썬을 어떤 곳에 사용하는지 등 회사의 여러가지 이야기를 들려주실 수 있습니다. 해당 인터뷰는 사전 녹화를 통해 컨퍼런스 당일 유튜브로 1일 1회씩 총 2번 송출됩니다.</p>
            </AboutbenefitsBlock>
            <AboutbenefitsBlock>
                <h1>후원사 세션</h1>
                <h3>* 대상 후원 등급: 키스톤, 다이아몬드, 플래티넘, 스타트업, 커뮤니티</h3>
                <p>파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해 이야기할 수 있습니다.</p><br />
                <p>파이콘 한국 준비위원회에서 제공하는 슬라이드 테마를 사용해야 하는 일반발표세션과는 달리 후원사 발표 세션은 후원사의 아이덴티티를 반영한 슬라이드 테마를 사용하실 수 있습니다. 따라서 일반 발표보다 후원사의 개성을 드러낼 수 있고, 보다 적극적으로 후원사를 홍보를 하실 수 있습니다.</p><br />
                <p>하지만 파이콘 한국에서의 발표이기 때문에 과도한 자사 솔루션에 대한 홍보는 지양해주시기 바랍니다. </p><br/>
                <ul>
                    <li><p>발표 주제는 조금이라도 개발자 커뮤니티나, 파이썬 등에 관련이 되어야 합니다.</p></li>
                    <li><p>후원사 세션의 발표자는 별도의 발표자 선정 과정을 거치지 않습니다.</p></li>
                    <li><p>후원사 세션의 발표자는 일반 세션의 발표자와 마찬가지로 발표 가이드라인 및 CoC를 지켜야 합니다.</p></li>
                    <li><p>후원사 세션의 경우, 홈페이지 및 기타 안내에 {`'`}후원사 세션{`'`} 문구가 별도로 표기됩니다.</p></li>
                </ul>
            </AboutbenefitsBlock>
            <AboutbenefitsBlock>
                <h1>3.10 토크</h1>
                <h3>* 대상 후원 등급: 키스톤, 다이아몬드, 골드, 스타트업</h3>
                <p>제한된 3분 10초라는 시간 동안 파이썬에 관한 여러분의 이야기를 자유롭게 들려주실 수 있는 기회입니다. 회사에 대한 소개, 앞으로의 비전, 우리 회사/단체의 자랑 또는 채용 등 어떤 내용이라도 좋습니다. 3.10 토크는 3분 10초라는 시간 제한이 있으니 꼭 지켜주시길 바랍니다.</p><br/>
                <p>보내주신 영상은 행사가 진행되는 이틀 동안 발표 세션 중간에 후원 등급별 노출 횟수에 따라 송출될 예정입니다. 총 노출 횟수가 1회를 초과하는 후원 등급의 후원사의 경우 다수의 영상 송출도 가능합니다. 예를 들어, 총 노출 횟수가 4회인 키스톤 후원사는 4개의 영상을 한 번씩 송출하거나, 2개의 영상을 두 번씩 송출하는 방식 모두 가능합니다.</p><br />
                <p>영상의 이름은 ‘3.10 토크 - [여기에 제목을 입력]’ 형태로 알려주시면 좋습니다. 제목은 간단하게 회사 이름만 적는 것도 가능하며, 파이콘을 보다 재미있게 만들어주는 제목 또한 환영합니다! <br />
                    다만, 파이콘 한국의 행동강령에 위배되는 내용은 삭제될 수도 있으니 꼭 명심해주시기 바랍니다.</p>
            </AboutbenefitsBlock>
            <AboutbenefitsBlock>
                <h1>버추얼 부스 in 게더타운</h1>
                <h3>* 대상 후원 등급: 모든 후원사 (등급별 부스 개수 상이)</h3>
                <p>올해 파이콘도 온라인으로 진행됨에 따라 행사장 부스에서 하시던 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등의 다양한 행사를 온라인으로 진행할 수 있도록 버추얼 부스를 준비했습니다.</p><br />
                <p>하지만 작년과는 달리 올해 버추얼 부스는 오프라인의 느낌을 최대한 살릴 수 있는 게더타운에서 진행됩니다. 버추얼부스는 하나의 행사장에 후원사마다 각각 부스 공간이 배분되며, 부스 개수는 후원사 등급마다 차등 제공됩니다. 또한 부스 구성은 배너와 색상만 정해주시면 파이콘 한국 준비위원회에서 준비해 드릴 예정입니다. 부스 예시는 아래의 사진과 같습니다.</p>
                <Image src="/img/gathertown.png" width={457} height={250} alt="gathertown" layout="responsive" />
                <p>[출처] ICLR 2021 ML in Korea (LG AI연구원, ICLR 2021 ML in Korea 참가 : 네이버 포스트 (naver.com))</p>
            </AboutbenefitsBlock>
            <AboutbenefitsBlock>
                <h1>소셜미디어 홍보 (카드뉴스)</h1>
                <h3>* 대상 후원 등급: 모든 후원사 </h3>
                <p>파이콘 한국에서 운영하고 있는 페이스북, 트위터에 후원사들의 이야기를 소개해드립니다.<br /> 참가자분들께 보다 쉽게 다가갈 수 있도록 짤막하게 여러분들에 대해 소개해주세요. 제공해주신 내용을 바탕으로 다양한 형태로 파이콘 한국이 열리는 기간과 비슷한 기간에 후원사와 후원사에서 진행하는 프로그램에 대한 홍보를 진행할 예정입니다.</p><br />
                <p>후원사의 로고와 간략한 소개글, 카드 뉴스 형식으로 제작한 후원사별 진행 프로그램에 대한 홍보글 등을 작성 예정이며, 이전의 형식은 파이콘 한국의 페이스북과 트위터에서 확인하실 수 있습니다.</p>
            </AboutbenefitsBlock>
            <AboutbenefitsBlock>
                <h1>로고 노출 상세</h1>
                <AboutdetailLogoBlock>
                    <h2>1{')'} 발표 영상</h2>
                    <h3>* 대상 후원 등급: 키스톤, 다이아몬드, 플래티넘, 골드, 스타트업, 출판사/미디어/기술후원</h3>
                    <p>이전과 비슷한 모양새로 파이콘 한국 2020의 모든 발표 영상에 후원사의 로고를 넣을 예정입니다. 해당 영상은 파이콘 한국 2020 행사 기간 뿐만 아니라, 영상이 유튜브에 게시되기 때문에 지속적인 로고 노출 및 홍보 효과를 가져올 예정입니다.</p>
                    <ul>
                        <li><p>후원 등급에 따라 노출되는 로고의 크기가 다릅니다. 크기에 맞춰 로고를 제공해주시기 바랍니다.</p></li>
                        <li><p>후원사에서 로고를 제공해주지 않은 경우에는 파이콘 한국 준비위원회에서 임의로 로고 및 내용을 사용합니다.</p></li>
                    </ul>
                </AboutdetailLogoBlock>
                <AboutdetailLogoBlock>
                    <h2>2{')'} 홈페이지</h2>
                    <h3>* 대상 후원 등급: 모든 등급</h3>
                    <p>파이콘 한국 홈페이지는 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다. 파이콘 한국 홈페이지는 개발자들이 지난 세션 자료를 찾기 위해서 지속적으로 방문하는 웹사이트라는 점을 다시 한 번 강조드립니다.</p>
                </AboutdetailLogoBlock>
            </AboutbenefitsBlock>
        </DetailBenefitsBlock>
    )
}

export default DetailBenefits;