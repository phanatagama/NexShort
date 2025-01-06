import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from 'components/Layout.js'
import InputBar from 'components/InputBar.js'
import TodoState from 'components/context/TodoState.js'

export default function Home() {

  return (
    <TodoState>
      <Head>
        <title>Shorten URL</title>
        <meta property="og:title" content="A Simple shortener url" key="title" />
      </Head>
      <div className="text-white h-screen bg-[url('/background.jpg')] bg-cover bg-center">
        <Layout className="flex flex-col h-full">

          <InputBar />

        </Layout>
      </div>
    </TodoState>
  )
}
