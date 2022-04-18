import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'
// import Footer from './footer'

interface AppProps {
    
}
export default function Layout({ children }: React.PropsWithChildren<AppProps>) {
  return (
    <>
      <Head>
        <title>Zorrep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}