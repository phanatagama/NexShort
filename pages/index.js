import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from 'components/Layout.js'
import InputBar from 'components/InputBar.js'
import TodoState from 'components/context/TodoState.js'

export default function Home() {
  
  return (
    <TodoState>
      <div className="text-white bg-gray-800 h-screen">
        <Layout>
          <div className="flex flex-col items-center justify-center">
            <InputBar/>
          </div>
        </Layout>
      </div>
    </TodoState>
  )
}
