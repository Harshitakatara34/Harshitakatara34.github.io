import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';

const Form1 = () => {
  const [state, handleSubmit] = useForm("mzbqarby");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Get In Touch With Me
      </Heading>
      <form  onSubmit={handleSubmit}>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" name='firstname'/>
        </FormControl>
        <ValidationError 
        prefix="FirstName" 
        field="firstname"
        errors={state.errors}
      />
        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" name='lastname' />
        </FormControl>
        <ValidationError 
        prefix="lastName" 
        field="lastname"
        errors={state.errors}
      />
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" name='' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <FormControl>
        <FormLabel htmlFor="textarea" fontWeight={'normal'} mt="2%">
          Write your Message
        </FormLabel>
        <InputGroup size="md">
          <Textarea
            pr="4.5rem"
            type={'textarea'}
            placeholder="Enter Your Message"
          />
        </InputGroup>
      </FormControl>
  
      </form>
        </>
  );
};



export default function ContactForm() {
  const toast = useToast();
  
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        
        <Form1 />
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            
            
          <Button
                w="7rem"    
                isDisabled={step === 3}
            
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="gray"
                variant="outline">
                Next
              </Button>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}