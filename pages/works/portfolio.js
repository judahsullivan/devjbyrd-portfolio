import React from 'react'
import P from '../../components/paragraph'
import { Title,Meta,WorkImage  } from '../../components/work'
import { Container, List,Button,useColorModeValue ,ListItem,Badge,Link  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title={'Portfolio'}>
    <Container>
      <Title>
        My Portfolio <Badge>2022</Badge>
      </Title>
      <P>
        This is my portfolio. This Project allowed me to truly show my skills, and understanding of Javascript. The fun part was learning to use Chakra-UI and Framer-Motion. This will be constantly updated.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link :</Meta>
          <Link href="https://devjbyrd-portfolio.vercel.app/">
            https://devjbyrd-portfolio.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <Meta >PlatForm :</Meta>
        <span>Windows,Mac,Mobile  </span>
          
        </ListItem>
        <ListItem>
          <Meta>Stack :</Meta>
          <span>Nextjs, Chakra-Ui, Framer-Motion, EmailJS </span>
        </ListItem>
       
      </List>

      <WorkImage src="/assets/images/Projects/portfolio/mobile.png" alt="Portfolio" />
      <WorkImage src="/assets/images/Projects/portfolio/third.png" alt="Portfolio" />
      <WorkImage src="/assets/images/Projects/portfolio/fourth.png" alt="Portfolio" />
      <WorkImage src="/assets/images/Projects/portfolio/fifth.png" alt="Portfolio" />

    </Container>
    
    
    <NextLink href={'/works'}>
        <Button colorScheme={useColorModeValue('red','blue')}>Back to Projects</Button>
      </NextLink>

    </Layout>
  )
}

export default Work
export {getServerSideProps} from '../../components/chakra'