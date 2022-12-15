import React, { useState } from 'react';
import {
    Container,
    SlideFade,
    Box,
    FormControl,
    FormLabel,
    Flex,
    Button,
    Input,
    Heading,
    Textarea,
    Text,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import ErrorMessage from '../components/errormessage';
import {init} from '@emailjs/browser'
import emailjs from '@emailjs/browser'
import Layout from '../components/layouts/article'


const Contact = () => {

    
    init("Rty6hmah3NpTvN0s5");

    const toast = useToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error ] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const clearInput = () => {
        setName('');
        setEmail('');
        setMessage('');
        setIsLoading(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        emailjs.send("service_5udo2ff", "template_5gy3rca", {
            from_name: name,
            from_email: email,
            message: message,
        }).then(() => {
            clearInput();

            toast({
                title: 'Email sent.',
                description: 'You had successfully sent the email. I will reply your email ASAP. Thank you!',
                status: 'success',
                duration: 9000,
                isClosable: true
            });

        }, (error) => {
            clearInput();

            toast({
                title: 'Email not sent.',
                description: error.text,
                status: 'error',
                duration: 9000,
                isClosable: true
            })
        });
    }

    return (
        <Layout title={'Contact'}>
                <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
                    <SlideFade in offsetX={80}>
                        <Flex width="full" align="center" justifyContent="center">
                            <Box
                                p={8}
                                maxWidth="container.lg"
                                borderWidth={1}
                                borderRadius={8}
                                boxShadow="lg"
                            >
                                <Heading size={'lg'}>Send me a email!</Heading>
                                <Text fontSize={'lg'} my={2}>Promise to answer as swiftly as possible!</Text>
                                <Box my={4} textAlign="left">
                                    <form onSubmit={handleSubmit}>
                                        {error && <ErrorMessage message={error} />}
                                        <FormControl isRequired>
                                            <FormLabel key={'name'}>Name</FormLabel>
                                            <Input
                                                id='name'
                                                type={'text'}
                                                value={name}
                                                placeholder="Your Name"
                                                size="lg"
                                                onChange={event => setName(event.currentTarget.value)}
                                                bg={useColorModeValue('gray.100', 'gray.900')}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel key={'email'}>Email</FormLabel>
                                            <Input
                                                id='email'
                                                type={'email'}
                                                value={email}
                                                placeholder='Email'
                                                size="lg"
                                                onChange={event => setEmail(event.currentTarget.value)}
                                                bg={useColorModeValue('gray.100', 'gray.900')}
                                            />
                                        </FormControl>
                                        <FormControl isRequired mt={6}>
                                            <FormLabel key={'message'}>Message</FormLabel>
                                            <Textarea
                                                id='message'
                                                value={message}
                                                placeholder="Type your message..."
                                                size="lg"
                                                onChange={event => setMessage(event.currentTarget.value)}
                                                bg={useColorModeValue('gray.100', 'gray.900')}
                                            />
                                        </FormControl>
                                        <Button
                                            variant="solid"
                                            type="submit"
                                            width="full"
                                            // bg={useColorModeValue('gray.200', 'gray.900')}
                                            mt={4}
                                            isLoading={isLoading}
                                            loadingText='Submitting'
                                            colorScheme={'blue'}
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </Box>

                            </Box>
                        </Flex>
                    </SlideFade>
                </Container>
            
        </Layout>
    )
}

export default Contact;
export {getServerSideProps} from '../components/chakra'