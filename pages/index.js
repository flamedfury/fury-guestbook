import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Guestbook = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>guestbook 📖 :: flamedfury</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
        <link
          rel="stylesheet"
          href="https://flamedfury.com/css/styles.css"></link>
      </Head>


        <Header />
        <Hero />
        <Footer />

    </>
  )
}

export default Guestbook
