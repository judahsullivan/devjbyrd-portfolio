import React from "react";
import { MotionImage } from "../lib/motion";
import { Box } from "@chakra-ui/react";
import NextLink from 'next/link'

const JbyrdIcon = () => {
    return(
        <>
          
        <NextLink href={'/'} passHref>            
    <Box display={'flex'} as="h3" size="md" letterSpacing={'tighter'} fontFamily={'M PLUS Rounded 1c", sans-serif'} >            
           <MotionImage 
            src={'/assets/images/lion.png'} 
            w={'20px'}
            objectFit={'contain'}
            whileHover={{
                rotate: -90,
            }}
            />
           
             DevJbyrd
            </Box>
        </NextLink>
    </>
    )
} 


export default JbyrdIcon