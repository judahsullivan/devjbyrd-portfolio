import { IconButton } from "@chakra-ui/button";
import { BsFolder2 } from "react-icons/bs";
import {Link, useColorModeValue} from '@chakra-ui/react'



const ResumeButton = ( ) => {
    return (
    <Link 
    href={'https://docs.google.com/document/d/1cHhQ1lKeSYGpwRtkfMwvMjybETEHDtiE/edit?usp=sharing&ouid=107633428279776073174&rtpof=true&sd=true'}
    target={'_blank'}
        >
       <IconButton
       size={'md'}
       icon={<BsFolder2/>}
       target={'_blank'}
       mr={2}
       colorScheme={useColorModeValue('yellow','blue')}
       />
       </Link>
    )
}

export default ResumeButton;