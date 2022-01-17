import Head from 'next/head'
// import { Navbar, Footer, Sleep } from './components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sleep from './components/Sleep'

export default function Home() {
	return (
    <div>
      <Head>
        <title>Jeremy | Status</title>
        <meta name="description" content="Jeremy Status 🩸" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen overflow-x-hidden">
        <Navbar />
        <Sleep />
        <Footer />
      </div>
    </div>
  )
}
