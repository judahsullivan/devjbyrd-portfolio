import React from 'react'
import P from '../../components/paragraph'
import { Title,Meta,WorkImage  } from '../../components/work'
import { Container,Button,useColorModeValue,List, ListItem,Badge,Link  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../../components/layouts/article'



const Work = () => {
  return (
    <Layout title={'Hulu-Clone'}>
    <Container>
      <Title>
        Hulu-Clone <Badge>2022</Badge>
      </Title>
      <P>
        One of my first Projects learning nextjs. The project is a completely astetic version of the hulu movie/tv app.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://github.com/judahsullivan/hulu-next-clone">
            https://github.com/judahsullivan/hulu-next-clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <span>PlatForm</span>
        <Meta>Windows</Meta>
          
        </ListItem>
        <ListItem>
            <span>Stack</span>
          <Meta>NextJs, Tailwindcss, TMDBApi,</Meta>
          
        </ListItem>
       
      </List>

      <WorkImage src="/assets/images/projects/hulu-clone/main-hulu.png" alt="HuluClone" />
      <WorkImage src="/assets/images/projects/hulu-clone/screen2-hulu.png" alt="HuluClone" />
      

     <NextLink href={'/projects'}>
        <Button colorScheme={useColorModeValue('red','blue')}>Back to Projects</Button>
      </NextLink>

    </Container>

    </Layout>
  )
}

export default Work
export {getServerSideProps} from '../../components/chakra'