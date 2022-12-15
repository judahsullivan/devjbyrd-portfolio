import {
  Container,
  Heading,
  Box,
  Image,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Journey from '../components/journey'


const Home = () => (
  <Layout>
    <Container>
    <Box
      align={'center'}
      as='div'
      mb={6}
      p={3}
      css={{ backdropFilter: 'blur(20px)' }}
      backdropBlur={'2xl'}
      borderRadius={'md'}
      bg={'red.500'}
      _dark={{
        bg: 'messenger.500',
      }}

      
      >
    <Heading fontFamily={'M PLUS Rounded 1c'} letterSpacing={'widest'} fontWeight={'light'}>Judah Sullivan</Heading>

      
      <Image 
      alt={'MAIN-PIC'}
      src={'https://i.ibb.co/34Js7cw/78000-F6-E-B49-B-498-D-BDD9-98501-B517-C97.png'}
      borderRadius={'md'}
      width={400}
      height={375}
      />
      <Heading 
      fontFamily={'heading'} 
      fontSize={16}
      fontWeight={500}
      letterSpacing={3}
      mt={4}
      >Web Designer / Graphic Artist</Heading> 
      </Box> 

      <Section delay={0.1}>
       
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
      <Paragraph>
        I am a Front-End Developer based out of Grand Rapids. My goal is to push my abilities to solve complex problems with a passion design.
        Want to get in contact?  
      </Paragraph> 
      </Section>
        
      <Section delay={0.3}>
        <Journey/>
       </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
