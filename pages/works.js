import { Container, Heading, SimpleGrid  } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import CozyTea from '../public/assets/images/Projects/cozy-teahouse/main-cth.png'
import HuluClone from '../public/assets/images/Projects/hulu-clone/main-hulu.png'
import Portfolio from '../public/assets/images/Projects/portfolio/fourth.png'
import ShopEasy from '../public/assets/images/Projects/shop-test/main.png'
import MotionCard from '../components/motioncard'

const Works = () => (
  <Layout title="Works">
    <Container align={'center'}>
      <Heading as="h3" fontSize={20} mb={4} variant={'section-title'}>
      Projects
      </Heading>
      

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <MotionCard delay={0.2}>
          <WorkGridItem id="/cozy"  title="The Cozy-TeaHouse" thumbnail={CozyTea} 
          />
        </MotionCard>
        <MotionCard delay={0.2}>
          <WorkGridItem
            id="/hulu-clone"           
            title="Hulu-Clone"
            thumbnail={HuluClone}
         />
        </MotionCard>

        <MotionCard delay={0.2}>
          <WorkGridItem
            id="/portfolio"
            title="My Developer Portfolio"
            thumbnail={Portfolio}
          />
        </MotionCard>
      <MotionCard delay={0.2}>
          <WorkGridItem
            id="/shop-test"
            title="ShopEasy-Ecommerence"
            thumbnail={ShopEasy}
        />
         
        </MotionCard> 
      

      
   </SimpleGrid>      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
