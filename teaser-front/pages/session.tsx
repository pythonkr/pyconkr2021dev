import React, { useState } from 'react';
import SessionTable from '../components/session/SessionTable';
import { Program } from '../types/program';
import Layout  from '../components/Layout';
import axios from 'axios'
import SessionToggleButton from '../components/session/SessionToggleButton';

interface SessionProps {
  day1: Program[],
  day2: Program[]
}

export default function Session(data: SessionProps) {
  const [selectedDay, setSelectedDay] = useState<string>('day1')

  const updateSelectedDay = (day: string): void => {
    setSelectedDay(day)
  }

  return (
      <Layout>
        <SessionToggleButton handleClick={updateSelectedDay} />
        {selectedDay === 'day1'
          ? <SessionTable headers={['101', '102']} programList={data.day1} />
          : <SessionTable headers={['103', '104']} programList={data.day2} />
        }
      </Layout>
  )
}

export async function getStaticProps() {
    let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1'

    if (process.env.ENV == 'LOCAL') {
      url = 'http://127.0.0.1:8000/api/v1'
    }

    try {
      const day1Response = await axios.get(url + '/program?day=2')
      const day2Response = await axios.get(url + '/program?day=3')

      return {
        props: {
          day1: day1Response.data,
          day2: day2Response.data
        }
      }
    } catch (error) {
      return {
        notFound: true,
      }
    }
  }
