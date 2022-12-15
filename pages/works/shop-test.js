import React from 'react'
import P from '../../components/paragraph'
import { Title,Meta,WorkImage  } from '../../components/work'
import { Container, Button,List, useColorModeValue, ListItem,Badge,Link  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'


const Work = () => {
  return (
    <Layout title={'ShopEasy'}>
    <Container>
      <Title>
        ShopEasy-TestApp <Badge>2022</Badge>
      </Title>
      <P>
        One of my first apps that I built to help me understand Front-End Design and Eccommerence building. This was also my second attempt at using ReactJs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://shopeasytest.netlify.app">
            https://shopeasytest.netlify.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <span >PlatForm</span>
        <Meta>Windows,Mac,  </Meta>
          
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Sass, Sanity </span>
        </ListItem>
       
      </List>

      <WorkImage src="/assets/images/projects/shop-test/main.png" alt="ShopEasy" />
      <WorkImage src="/assets/images/projects/shop-test/second.png" alt="ShopEasy" />
      <WorkImage src="/assets/images/projects/shop-test/third.png" alt="ShopEasy" />



<NextLink href={'/projects'}>
        <Button colorScheme={useColorModeValue('red','blue')}>Back to Projects</Button>
      </NextLink>
    </Container>

    </Layout>
  )
}

export default Work
export {getServerSideProps} from '../../components/chakra'