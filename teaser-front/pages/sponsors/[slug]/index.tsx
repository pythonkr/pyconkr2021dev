import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import styled from '@emotion/styled'
import axios from "axios";
import {Sponsor, Sponsors} from "../../../types/sponsors";


const SponsorsDetailContainer = styled.div`
  padding: 0 5rem;
`

const SponsorsDetail = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
      <Layout>
        <SponsorsDetailContainer>
          sponsor: {slug}
        </SponsorsDetailContainer>
      </Layout>
  )
}


export const getStaticPaths = async () => {
    let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1'
    if (process.env.ENV == 'LOCAL') {
        url = 'http://127.0.0.1:8000/api/v1'
    }

    try {
        const res = await axios.get(`${url}/sponsors`)
        const concat = res.data.map((level: Sponsors) => {
            return level.sponsors.map((sponsor: Sponsor) => (
                { params: { slug: sponsor.slug } }
            ))
        })
        const paths = concat.reduce((a:any, b:any) => a.concat(b), []);
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
        return {
            paths: [],
            fallback: false
        }
    }
}

export const getStaticProps: GetStaticProps<{slug?: string }> = async (context: GetStaticPropsContext) => {
    const slug = context.params?.slug

    let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1'
    if (process.env.ENV == 'LOCAL') {
        url = 'http://127.0.0.1:8000/api/v1'
    }

    try {
        const res = await axios.get(`${url}/sponsors/${slug}`)
        return {
            props: res.data
        }
    } catch (error) {
        console.log(error)
        return {
            notFound: true
        }
    }
}

export default SponsorsDetail
