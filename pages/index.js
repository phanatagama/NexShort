import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import InputBar from '../components/InputBar'
import TodoState from '../components/context/TodoState'

export default function Home() {
  
  return (
    <TodoState>
      <div className="text-center">
        <Layout>
          <div className="flex flex-col items-center justify-center">
            <InputBar/>
          </div>
        </Layout>
      </div>
    </TodoState>
  )
}
