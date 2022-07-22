import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Further region Home" />
      </Head>

      <Banner/>
    </>
  )
}

export default Home
