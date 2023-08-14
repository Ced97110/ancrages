import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '@components'
import Brand from '../components/sections/Brand'
import Services from '../components/sections/services'
import Featured from '../components/sections/Featured'





export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     <Hero/>
     <Brand/>
     <Services/>
     <Featured/>

    </>
  )
}