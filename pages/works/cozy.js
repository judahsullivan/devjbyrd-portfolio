import React from 'react'
import P from '../../components/paragraph'
import { Title,Meta,WorkImage  } from '../../components/work'
import {useColorModeValue, Container,List, ListItem,Badge,Link, Button  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title={'Cozy'}>
    <Container>
      <Title>
        The Cozy Tea-House <Badge>2022</Badge>
      </Title>
      <P>
        An App I Built as Project given to me by the Code Academy. The Purpose of the project was to try to copy the site as close as possible while displaying my understaning with html and css. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link :</Meta>
          <Link href="https://cozy-teahouse.netlify.app/">
            https://cozy-teahouse.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem >
          <Meta>PlatForm :</Meta>
        <span>Windows</span>
        
        </ListItem>
        <ListItem> 
        <Meta>Stack :</Meta>
          <span>Html, Css</span>
         
        </ListItem>
       
      </List>

      <WorkImage src={'/assets/images/Projects/cozy-teahouse/main-cth.png'} alt="Cozy" />
      <WorkImage src={'/assets/images/Projects/cozy-teahouse/screen2.png'} alt="Cozy" />
      <WorkImage src={'/assets/images/Projects/cozy-teahouse/screen3.png'} alt="Cozy" />
      <NextLink href={'/works'}>
        <Button colorScheme={useColorModeValue('red','blue')}>Back to Projects</Button>
      </NextLink>
    </Container>
        

    </Layout>
  )
}

export default Work
export {getServerSideProps} from '../../components/chakra'