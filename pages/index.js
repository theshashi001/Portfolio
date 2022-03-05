import Head from 'next/head'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Joshua Brigati - Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='full-page' id='content'>
        <LandingPage />
        <About />
        <Projects />
      </main>
      <div orientation="right" className="email-container">
        <div className="email-display">
          <a href="mailto:brigati.joshua@gmail.com">brigati.joshua@gmail.com</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
