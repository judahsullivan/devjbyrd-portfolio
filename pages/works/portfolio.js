import React from 'react'
import P from '../../components/paragraph'
import { Title,Meta,WorkImage  } from '../../components/work'
import { Container, List,Button,useColorModeValue ,ListItem,Badge,Link  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title={'ShopEasy'}>
    <Container>
      <Title>
        My Portfolio <Badge>2022</Badge>
      </Title>
      <P>
        One of my first apps that I built to help me understand Front-End Design and Eccommerence building. This was also my second attempt at using ReactJs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="/">
             <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <span >PlatForm</span>
        <Meta>Windows,Mac,Mobile  </Meta>
          
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nextjs, Chakra-Ui, Framer-Motion, EmailJS </span>
        </ListItem>
       
      </List>

      <WorkImage src="/assets/images/projects/portfolio/mobile.png" alt="Portfolio" />
      <WorkImage src="/assets/images/projects/portfolio/third.png" alt="Portfolio" />
      <WorkImage src="/assets/images/projects/portfolio/fourth.png" alt="Portfolio" />
      <WorkImage src="/assets/images/projects/portfolio/fifth.png" alt="Portfolio" />
      <WorkImage src="/assets/images/projects/portfolio/sixth.png" alt="Portfolio" />

    </Container>
    
    
    <NextLink href={'/projects'}>
        <Button colorScheme={useColorModeValue('red','blue')}>Back to Projects</Button>
      </NextLink>

    </Layout>
  )
}

export default Work
export {getServerSideProps} from '../../components/chakra'