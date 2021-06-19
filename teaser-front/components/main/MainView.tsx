import styled from '@emotion/styled';


const MainViewBlock = styled.div`
    text-align: center;
    padding-top: 2rem;
    margin-top: 6rem;
    margin-bottom: 8rem;
    
`;

const SloganBlock = styled.h1`
    font-size: 9rem;
    font-weight: 700;
`;

const ScheduleBlock = styled.div`
    color: #939597;
    font-size: 2.75rem;
    margin-top: 7rem;
    margin-bottom: 7rem;
`;

const RegisterButtonBlock = styled.button`
    background-color: #F5DF4D;
    color: black;
    border-radius: 4rem;
    font-size: 3rem;
    font-weight: 700;
    padding: 1rem 20rem;
`;


function MainView () {
    return (
        <MainViewBlock>
            <SloganBlock>
                Stay Home, <br />
                Stay Connected
            </SloganBlock>
            <ScheduleBlock>
                온라인 컨퍼런스 10/2(토)~10/3(일)
            </ScheduleBlock>
            <RegisterButtonBlock>
                참가 등록
            </RegisterButtonBlock>
        </MainViewBlock>
    )
}

export default MainView;