import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,

} from '@chakra-ui/react'
import JbyrdIcon from './icon'
import { FaDesktop } from 'react-icons/fa'
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import {  BsGithub } from 'react-icons/bs'
import ResumeButton from './resumebutton'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('red.500', 'messenger.500')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        borderRadius={'lg'}
        p={2}
        _dark={{
          bg: active ? 'messenger.500' : undefined,
          color: active ? '#202023' : inactiveColor ,
        }}
        bg={active ? 'red.500' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5} bg={useColorModeValue('red.500', 'messenger.500')} p={1} borderRadius={'xl'} cursor={"pointer"}>
        <JbyrdIcon/> 
         
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contacts 
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/judahsullivan"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ResumeButton/>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                bgColor={useColorModeValue('red.500', 'messenger.500')}
              />
              <MenuList>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link} icon={<FaDesktop/>}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref >
                  <MenuItem as={Link} icon={<PhoneIcon/>}>Contact</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  target={'_blank'}
                  href="https://github.com/judahsullivan/devjbyrd-portfolio"
                 icon={<BsGithub/>} 
                >
                 GitHub 
                </MenuItem>
                
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
