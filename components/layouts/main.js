import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Judah Sullivan" />
        <meta name="author" content="Judah Sullivan" />
        <meta name="author" content="DevJbyrd" />
       <link rel="shortcut icon" href="/assets/images/lion.png" type='images/lion' />

        <meta name="og:title" content="Judah Sullivan" />
        <meta property="og:type" content="website" />
        <title>Dev J-Byrd</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
