import Image from 'next/image';
import Header from '../components/Header';
import MainView from '../components/main/MainView';
import AboutContext from '../components/about/AboutContext';
import PyconLogo from '../components/PyconLogo';
import { ContentBackgroundBlock } from '../components/ContentBackground';
import MainNotice from '../components/main/MainNotice';

export default function Home({ notice_data, data_sponsor }: any) {
  return (
    <>
      <MainView />
      <ContentBackgroundBlock>
        <MainNotice noticeData={notice_data} />
      </ContentBackgroundBlock>
      <AboutContext />
    </>
  );
}

export async function getStaticProps() {
  let url =
    process.env.ENV == 'DEV'
      ? 'https://dev.2021.api.pycon.kr/api/v1'
      : 'https://2021.api.pycon.kr/api/v1';

  if (process.env.ENV == 'LOCAL') {
    url = 'http://127.0.0.1:8000/api/v1';
  }

  const res = await fetch(url + '/article');
  const data = await res.json();

  const res_sponsor = await fetch(url + '/sponsors');
  const data_sponsor = await res_sponsor.json();

  if (!data || !data_sponsor) {
    return {
      notFound: true,
    };
  }

  return {
    props: { notice_data: data, data_sponsor: data_sponsor }, // will be passed to the page component as props
  };
}
