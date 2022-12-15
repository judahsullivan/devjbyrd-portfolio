import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
  Divider,
  Container,
  
} from '@chakra-ui/react'
import {FaGraduationCap} from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { PageSlideFade,StaggerChildren,CardTransition} from '../lib/transitions'
import { MotionBox } from '../lib/motion'
import {companies, institutes} from '../lib/data'
import { Meta } from './work'


const Card = ({ title, role, skills, period, logo, colorMode, alt, desc }) => {
    
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: 'lg' }}
        bg={useColorModeValue('white', 'gray.800')}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={'/assets/images/placeholder.png'}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Text flex={'shrink'} display={['none', 'inline-block']} fontFamily={'1ROUNDED C PLUS'} fontWeight={'hairline'}>{desc}</Text>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={['none', 'none', 'flex', 'flex']}
              >
               
             
              </Stack>
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          display={['flex', 'flex', 'none', 'none']}
        >
          <Meta>{skills}</Meta>
        </Stack>
      </Box>
    </CardTransition>
  )
}

const Journey = ({ }) => {
  const { colorMode } = useColorMode()

  return (
    <Container>
      <PageSlideFade>
        <StaggerChildren>
          <MotionBox width={"100%"} align={'center'}>
            <Heading>
              <Flex align="center" >
                <Heading textDecoration={'underline'}>
                  Career
                </Heading>
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size="25px" />
                </Stack>
              </Flex>
            </Heading>
          </MotionBox>
          
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {companies.map((company, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  desc={company.desc}
                  period={company.period}
                  logo={company.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
          <Divider m={8}/>
              <Heading>
            <Flex alignItems="center">
              <Heading textDecoration={'underline'} mt={0} mb={0}>
                Education
              </Heading>
              <Stack pl={3}>
                <Box as={FaGraduationCap} size="25px" />
              </Stack>
            </Flex>
          </Heading>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {institutes.map((institute, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  desc={institute.desc}
                  logo={institute.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
      </Container>
  )
}



export default Journey