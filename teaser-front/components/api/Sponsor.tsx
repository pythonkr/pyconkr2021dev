import styled from '@emotion/styled';
import { AboutBlock } from '../about/AboutContext';
import Image from 'next/image'
import { ContentBackgroundBlock } from '../ContentBackground';

const AboutSupportBlock = styled(AboutBlock)`
margin-bottom: 10rem;
li {
    font-size: 1.75rem;
}
`;

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
    font-size: 3rem;

    span {
        text-decoration: underline 10px;
    }
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

const BlankImgBlock = styled.div`
width: 8rem;
height: 8rem;
border-radius: 4rem;
margin: 1rem;
background-color: #939597;
`;

const PersonImgBlock = styled(BlankImgBlock)`

background-color: transparent;

Img {
    border-radius: 4rem;
}
`;

function Sponsor({ data_sponsor } : any) {
    console.log('sponsors.data: ', data_sponsor)

    return (
            <ContentBackgroundBlock>
                <AboutBlock>
                    <h1>후원사</h1>
                    <p>파이콘 한국 2021은 아래의 후원사와 함께합니다</p>
                    {
                        data_sponsor.map((d:any, idx:number) => {
                            
                            return (
                                <>
                                    <h3>{d.name}</h3>
                                
                                    {
                                        d.sponsors.map( (s:any) => (
                                            <>
                                            <PyconPersonBlock key={s.name}>
                                            {s.logo_image ? <PersonImgBlock><Image src={s.logo_image} width={100} height={100} alt={s.name} layout="responsive"/></PersonImgBlock> : <BlankImgBlock />}
                                            
                                            <PersonIntroBlock>
                                                <p>{s.name}</p>

                                            </PersonIntroBlock>
                                            </PyconPersonBlock>
                                            </>
                                        ))
                                    }

                                </>
                            )
                        })
                    }
                </AboutBlock>
            </ContentBackgroundBlock>

    )
}

export default Sponsor;
