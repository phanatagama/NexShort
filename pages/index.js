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
      <div className="relative text-white h-screen bg-[url('/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-transparent opacity-25"></div>
        <Layout className="relative flex flex-col h-full">
          <p className="text-4xl font-bold text-center mt-36 ">
            <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'> Nexshort </span>
            Free Link Shortener</p>
          <p className="text-center font-semibold text-red-500">Shorten your link for free</p>
          <InputBar />
        </Layout>
      </div>
    </TodoState>
  )
}
