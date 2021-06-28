import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';


const MainViewBlock = styled.div`
    text-align: center;
    padding-top: 2rem;
    margin-top: 4rem;
    color: #939597;

    align-items: center;
`;

const SloganBlock = styled.h1`
    font-size: 8rem;
    text-align: center;
    color: #F5DF4D;

    @media (max-width: 768px) {
        font-size: 4.5rem;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 6rem;
    }
    @media (min-width: 1200px) and (max-width: 1399px) {
        font-size: 6.7rem;
    }
`;

const ScheduleBlock = styled.div`
    color: #939597;
    font-size: 2.5rem;
    margin-top: 7rem;
    margin-bottom: 7rem;

    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 2.25rem;
    }
`;

const RegisterButtonBlock = styled.button`
    background-color: #F5DF4D;
    color: black;
    border-radius: 4rem;
    font-size: 3rem;
    font-weight: 700;
    padding: 1rem 17rem;

    @media (max-width: 768px) {
        padding: 1rem 5rem;
        font-size: 1.5rem;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        padding: 1rem 10rem;
        font-size: 2rem;
    }
`;

export function Slogan() {

    return (
        <SloganBlock>
            Stay Home, <br />
            Stay Connected
        </SloganBlock>
    )  
}

const GuideButtonBlock = styled.div`
    font-size: 1.5rem;
`;

function MainView () {
    return (
        <ContentBackgroundBlock>
            <MainViewBlock>
                <Slogan />
                <ScheduleBlock>
                    온라인 컨퍼런스 10/2(토)~10/3(일)
                </ScheduleBlock>
                {/* <RegisterButtonBlock>
                    참가 등록
                </RegisterButtonBlock>
                <GuideButtonBlock>
                    * 참가버튼은 내부 일정이 확정되는대로 활성화 될 예정입니다.
                </GuideButtonBlock> */}
            </MainViewBlock>
        </ContentBackgroundBlock>
        
    )
}

export default MainView;