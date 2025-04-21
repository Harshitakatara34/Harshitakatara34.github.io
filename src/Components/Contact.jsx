import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  VStack,
  Stack,
  IconButton,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import contactgif from "../Image/contactgif.svg"
const MotionBox = motion(Box);

const Contact = () => {
  const formWidth = useBreakpointValue({ base: "100%", md: "60%", lg: "45%" });
  const isMobile = useBreakpointValue({ base: true, md: false });
  useEffect(() => {
      // Initialize AOS
      AOS.init({
        duration: 800,
        once: false, // Whether animation should happen only once
        easing: 'ease-in-out',
      });
      
      // Refresh AOS after components are mounted
      const timer = setTimeout(() => {
        AOS.refresh();
      }, 1000);
      
      return () => clearTimeout(timer);
    }, []);
  return (
    <Box id="contact" textAlign="center" pt="130px" px={4} pb={10} bg="gray.800" color="white">
      <Heading mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
        Contact
      </Heading>
      <Box mb={6} fontSize={{ base: "md", md: "lg" }}>
        Submit the form below to get in touch with me!
      </Box>

      <Flex
        direction={{ base: "column", lg: "row" }}
       justifyContent="space-between"
       w="90%"
       margin="auto"
       mt="5rem"
        // gap={10}
        // px={4}
        // mb={10}

      >
        {/* Contact Form */}
      

        {/* GIF or Animation */}
        {!isMobile && (
          <MotionBox
             data-aos="fade-right"
            w={{ base: "80%", lg: "50%" }}
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Image
              src={contactgif}
              alt="Contact Animation"
              borderRadius="md"
              w="100%"
              maxH="400px"
              objectFit="cover"
            />
          </MotionBox>
        )}
          <MotionBox
          as="form"
          action="https://getform.io/f/28236467-0f44-496b-80a3-8b3034c09c92"
          method="POST"
          w={formWidth}
          bg="gray.700"
          p={6}
          borderRadius="md"
          boxShadow="xl"
          data-aos="fade-left"
        >
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" placeholder="Enter your name" bg="gray.600" color="white" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" placeholder="Enter your email" bg="gray.600" color="white" />
            </FormControl>

            <FormControl>
              <FormLabel>Mobile Number</FormLabel>
              <Input type="tel" name="number" placeholder="Enter your mobile number" bg="gray.600" color="white" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" placeholder="Enter your message" rows={4} bg="gray.600" color="white" />
              <FormHelperText color="gray.300">We'll never share your details.</FormHelperText>
            </FormControl>

            <Button
              type="submit"
              bgGradient="linear(to-l, #81e6d9, #28628b)"
              color="white"
              _hover={{ opacity: 0.85 }}
              w="full"
              mt={2}
            >
              Submit
            </Button>
          </VStack>
        </MotionBox>
      </Flex>

      {/* Social Links */}
      <Stack direction="row" spacing={6} justify="center" align="center" mt={6} flexWrap="wrap">
        <a href="tel:7817032067" target="_blank" rel="noreferrer">
          <IconButton
            icon={<HiOutlinePhone size={30} />}
            aria-label="Phone"
            variant="ghost"
            color="white"
            _hover={{ bg: "gray.600" }}
            isRound
          />
        </a>
        <a href="mailto:khushikatara041@gmail.com" target="_blank" rel="noreferrer">
          <IconButton
            icon={<HiOutlineMail size={30} />}
            aria-label="Mail"
            variant="ghost"
            color="white"
            _hover={{ bg: "gray.600" }}
            isRound
          />
        </a>
        <a href="https://www.linkedin.com/in/harshita-katara-09904b246/" target="_blank" rel="noreferrer">
          <IconButton
            icon={<FaLinkedin size={30} />}
            aria-label="LinkedIn"
            variant="ghost"
            color="white"
            _hover={{ bg: "gray.600" }}
            isRound
          />
        </a>
        <a href="https://github.com/harshitakatara34" target="_blank" rel="noreferrer">
          <IconButton
            icon={<FaGithub size={30} />}
            aria-label="GitHub"
            variant="ghost"
            color="white"
            _hover={{ bg: "gray.600" }}
            isRound
          />
        </a>
      </Stack>

      {/* Copyright */}
      <Text mt={10} fontSize="sm" color="gray.400">
        © Harshita Katara. All rights reserved.
      </Text>
    </Box>
  );
};

export default Contact;
