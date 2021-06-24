import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import { GuideContributeBlock } from './GotoContribute';
import Image from 'next/image';

type pyconpersonType = {
    name: string;
    img: string;
    introduce: string;
    newlineintro?: string;
}

type pyconpersonsType = pyconpersonType[]

const pyconPersons:pyconpersonsType = [
    {
        name: '강지우',
        img: `/img/personimg/jiwoo.jpg`,
        introduce: 'https://constmoon.github.io'
    },
    {
        name: '강윤수',
        img: ``,
        introduce: ''
    },
    {
        name: '강종연',
        img: `/img/personimg/jongyeon.jpg`,
        introduce: '다양한 곳에서 활동하고 있는 액티브한 개발자입니다.'
    },
    {
        name: '권혁민',
        img: `/img/personimg/khm.jpg`,
        introduce: 'ie, Remidomine... Dona eis requiem!'
    },
    {
        name: '김순태',
        img: ``,
        introduce: ''
    },
    {
        name: '류현지',
        img: ``,
        introduce: ''
    },
    {
        name: '박성흠',
        img: ``,
        introduce: 'Heroes never die.'
    },
    {
        name: '배권한',
        img: `/img/personimg/KwonHan.jpg`,
        introduce: 'What do you mean? An African or European swallow?'
    },
    {
        name: '오시영',
        img: `/img/personimg/siyoung.jpg`,
        introduce: 'Errors should never pass silently. Unless explicitly silenced. 세상을 디버깅하고 싶어 civic hacking 하고 있습니다.'
        
    },
    {
        name: '오세인',
        img: ``,
        introduce: ''
    },
    {
        name: '오주영',
        img: `/img/personimg/JuYoung.jpg`,
        introduce: '💛 DevRel in Finance 💛',
        newlineintro: '같지만 다르게, 파이콘 한국에 기여하고 있습니다'
    },
    {
        name: '이재경',
        img: `/img/personimg/jaegyeong.jpg`,
        introduce: '#플라스크 #백엔드 #코틀린 #안드로이드 #개발'
    },
    {
        name: '이현호',
        img: `/img/personimg/hyunho.jpg`,
        introduce: '노래하는 개발자 입니다. 사람을 좋아하고 이야기를 잘 듣습니다!'
    },
    {
        name: '장지창',
        img: ``,
        introduce: ''
    },
    {
        name: '전병우',
        img: ``,
        introduce: ''
    },
    {
        name: '추교영',
        img: `/img/personimg/ChuKY.jpg`,
        introduce: '파이콘 한국 3년이면 파이썬을 쓸 일이 생긴다(?!)'
    },
    {
        name: '한연희',
        img: `/img/personimg/yhhan.jpg`,
        introduce: '파이썬 뉴비입니다! WomenTechMakers Korea Ambassador로도 활동 중입니다 +ㅁ+'
    },
    {
        name: '홍연의',
        img: `/img/personimg/alicehong.jpg`,
        introduce: `Developer Relations & Tech Communicator. IT 업계에서 개발자 커뮤니티를 위해 일하고 있어요.`,
        newlineintro: '인생의 원동력은 일과 사람, 그리고 사랑 ♥︎'    
    }
]


const PyconPersonBlock = styled.div`
    display: flex;
    align-items: center;
    
    h3 {
        color: white;
    }

    & + & {
        margin-top: 2rem;
    }
`;

const PyconPersonsBlock = styled.div`

    h2 {
        color: #F5DF4D;
        text-decoration: underline 10px;
        font-size: 3rem;
    }
    
`;

const PersonImgBlock = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    margin: 1rem;
    background-color: #939597;

    Img {
        border-radius: 4rem;
    }

    
`;



const PersonIntroBlock = styled.div`
    align-items: center;
    padding-bottom: 1rem;
    padding-left: 1rem;
    width: 80%;
`;

export const TextBlock = styled.p`
    font-size: 1.5em;
    font-weight: 500;
`;

function MakePyCon() {
    return (
        <ContentBackgroundBlock>
            <GuideContributeBlock>
                <h1>파이콘 한국 2021을 만드는 사람들</h1>
                <TextBlock>파이콘 한국 준비위원회는 2014년 조직되어, 올해 여덟 번째 한국에서의 파이콘 행사를 준비하고 있습니다.<br />
                    준비위원회는 매년 신규 멤버를 모집하는 파이콘을 사랑하는 사람들의 열린 모임입니다.</TextBlock>
                <PyconPersonsBlock>
                    <h2>준비위원회 명단 {'('}가나다 순{')'} </h2>
                    <div>
                        {pyconPersons.map(person => (
                            <PyconPersonBlock key={person.name}>
                                <PersonImgBlock>
                                    {person.img && <Image src={person.img} width={100} height={100} alt={person.name} layout="responsive"/>}
                                </PersonImgBlock>
                                <PersonIntroBlock>
                                    <h3>{person.name}</h3>
                                    <TextBlock>
                                        {person.introduce || ''} 
                                        {person.newlineintro && <br />}
                                        {person.newlineintro || ''}
                                    </TextBlock>
                                </PersonIntroBlock>
                            </PyconPersonBlock>
                        ))}
                    </div>
                </PyconPersonsBlock>
                <PyconPersonsBlock>
                    <h2>환영하는 분위기를 만들어 주세요</h2>
                    <TextBlock>“파이콘 한국은 커뮤니티 주관으로 이뤄지는 비영리 행사입니다. 파이콘 한국 준비위원회는 건강한 국내 파이썬 생태계에 지속적인 보탬이 되고자, 커뮤니티 멤버들의 자발적인 봉사로 운영되고 있습니다. 발표자, 준비위원회, 참가자 등 모든 인원이 금전적 이득 없이 순수히 오픈소스 프로그래밍 언어인 파이썬의 저변 확대와 커뮤니티 활성화를 위해 진행하는 행사입니다.<br />
                        파이콘 한국 행사 진행과정을 포함하여 모든 의사소통 과정에서 CoC를 준수하고, 파이콘 한국 준비위원회 가이드를 따라주세요. 파이콘 한국 준비위원회는 전원 자원봉사로 이루어진 커뮤니티이기에 모든 요청에 실시간으로 대응하기 어렵습니다.”</TextBlock>

                    <TextBlock>“PyCon Korea is a non-profitable, developer-oriented event organized by community members, and has different characteristics from conferences organized companies or organizations. All attendees, including speakers, tutorial hosts, voluntary workers, and organizers, participate in PyCon Korea without any profitable purpose, and only to broaden the usage of Python, an open source programming language, and activate its community.”</TextBlock>
                </PyconPersonsBlock>
            </GuideContributeBlock>
        </ContentBackgroundBlock>
        
    )
}

export default MakePyCon;