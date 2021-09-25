import React, { useState } from 'react';
import SessionTable from '../components/session/SessionTable';
import { Program } from '../interfaces/program';
import Layout  from '../components/Layout';
import axios from 'axios'
import SessionToggleButton from '../components/session/SessionToggleButton';


export default function Session(props: any) {
  const [selectedDay, setSelectedDay] = useState<string>('day1')

  const updateSelectedDay = (day: string): void => {
    setSelectedDay(day)
  }

  return (
      <Layout>
        <SessionToggleButton handleClick={updateSelectedDay} />
        {selectedDay === 'day1'
          ? <SessionTable programList={props.day1} />
          : <SessionTable programList={props.day2} />
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
