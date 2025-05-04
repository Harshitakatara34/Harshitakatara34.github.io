
import React, { useEffect } from "react";
import { FaGithub, FaGratipay, FaLinkedin } from "react-icons/fa";
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
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactgif from "../Image/contactgif.svg";
const Contact = () => {
  const formWidth = useBreakpointValue({ base: "100%", md: "90%", lg: "70%",xl:"50%" });
  const isMobile = useBreakpointValue({ base: true, md: false });
  const flexDirection = useBreakpointValue({ base: "column", lg: "row" });
  const imageSize = useBreakpointValue({ base: "90%", lg: "60%" });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Box id="contact" textAlign="center" pt={{ base: "80px", md: "130px" }} px={4} pb={10}  bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.600","white")}>
      <Box maxW="90%" mx="auto">
        <Heading mb={4} fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} data-aos="fade-down">
          Let's Connect
        </Heading>
        <Text 
          mb={8} 
          fontSize={{ base: "md", md: "lg" }} 
          color={useColorModeValue("gray.500","gray.300")}
          px={{ base: 2, md: 0 }}
          data-aos="fade-down"
          w={{xl:"50%",base:"100%"}}
          justifyContent="center"
          display="flex"
          alignItems="center"
          margin="auto"
        >
          Have a project in mind or want to discuss potential opportunities? 
          I'm currently open to new collaborations and would love to hear from you.
          Fill out the form or reach out directly through any of the channels below.
        </Text>

        <Flex
          direction={flexDirection}
          justifyContent="space-between"
          alignItems="center"
          w="full"
          maxW={{xl:"80%",lg:"100%"}}
          margin="auto"
          mt={{ base: "3rem", lg: "5rem" }}
          gap={{ base: 8, lg: 12 }}
        >
          {!isMobile && (
            <Box
              data-aos="fade-right"
              w={imageSize}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={contactgif}
                alt="Contact Illustration"
                borderRadius="md"
                w="100%"
                maxW="500px"
                className="floatUpDown"
              />
            </Box>
          )}
          
          <Box
            as="form"
            action="https://getform.io/f/28236467-0f44-496b-80a3-8b3034c09c92"
            method="POST"
            w={formWidth}
            bg={useColorModeValue("white", "gray.700")}
            p={{ base: 4, md: 6 }}
            borderRadius="md"
            boxShadow="xl"
            data-aos="fade-left"
          >
            <VStack spacing={5}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
                <FormControl isRequired>
                  <FormLabel>Your Name</FormLabel>
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="John Doe" 
                    bg={useColorModeValue("white", "gray.600")}
                    color={useColorModeValue("gray.500","gray.300")}
                   
                    _placeholder={{ color: "gray.400" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    bg={useColorModeValue("white", "gray.600")}
                    color={useColorModeValue("black", "white")}
                    _placeholder={{ color: "gray.400" }}
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input 
                  type="tel" 
                  name="number" 
                  placeholder="+1 (123) 456-7890" 
                  bg={useColorModeValue("white", "gray.600")}
                  color={useColorModeValue("black", "white")}
                  _placeholder={{ color: "gray.400" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Your Message</FormLabel>
                <Textarea 
                  name="message" 
                  placeholder="Tell me about your project or inquiry..." 
                  rows={5} 
                  bg={useColorModeValue("white", "gray.600")}
                  color={useColorModeValue("black", "white")}
                  _placeholder={{ color: "gray.400" }}
                />
                <FormHelperText color={useColorModeValue("gray.500","gray.300")} mt={2}>
                  Your information is secure and will never be shared with third parties.
                </FormHelperText>
              </FormControl>

              <Button
                type="submit"
                className="animatedButton"
                bgGradient="linear(to-l, #81e6d9, #28628b)"
                color="white"
                _hover={{ 
                  bgGradient: "linear(to-l, #28628b, #81e6d9)",
                  transform: "translateY(-2px)",
                }}
                _active={{ transform: "translateY(0)" }}
                w="full"
                size="lg"
                mt={4}
                transition="all 0.2s"
              >
                <span style={{fontSize:"18px"}}>
                Send Message
                </span>

              </Button>
            </VStack>
          </Box>
        </Flex>

        <Box mt={{ base: 10, md: 16 }} data-aos="fade-up">
          <Text mb={4} fontSize="lg" color={useColorModeValue("gray.500","gray.300")}>
            Or connect with me directly through:
          </Text>
          <Stack 
            direction="row" 
            spacing={{ base: 4, md: 6 }} 
            justify="center" 
            align="center" 
            flexWrap="wrap"
          >
            <a href="tel:7817032067" target="_blank" rel="noreferrer">
              <IconButton
                icon={<HiOutlinePhone size={24} />}
                aria-label="Phone"
                variant="ghost"
                color={useColorModeValue("gray.600", "white")}
                _hover={{ bg: useColorModeValue("gray.200", "gray.600"), transform: "scale(1.1)" }}
                isRound
                size="lg"
              />
            </a>
            <a href="mailto:khushikatara041@gmail.com" target="_blank" rel="noreferrer">
              <IconButton
                icon={<HiOutlineMail size={24} />}
                aria-label="Mail"
                variant="ghost"
                color={useColorModeValue("gray.600", "white")}
                _hover={{ bg: useColorModeValue("gray.200", "gray.600"), transform: "scale(1.1)" }}
                isRound
                size="lg"
              />
            </a>
            <a href="https://www.linkedin.com/in/harshita-katara-09904b246/" target="_blank" rel="noreferrer">
              <IconButton
                icon={<FaLinkedin size={24} />}
                aria-label="LinkedIn"
                variant="ghost"
                color={useColorModeValue("gray.600", "white")}
                _hover={{ bg: useColorModeValue("gray.200", "gray.600"), transform: "scale(1.1)" }}

                isRound
                size="lg"
              />
            </a>
            <a href="https://github.com/harshitakatara34" target="_blank" rel="noreferrer">
              <IconButton
                icon={<FaGithub size={24} />}
                aria-label="GitHub"
                variant="ghost"
                color={useColorModeValue("gray.600", "white")}
                _hover={{ bg: useColorModeValue("gray.200", "gray.600"), transform: "scale(1.1)" }}

                isRound
                size="lg"
              />
            </a>
          </Stack>
        </Box>

        <Text mt={10} fontSize="sm" color={useColorModeValue("gray.500","gray.300")}>
          © {new Date().getFullYear()} Harshita Katara. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};
export default Contact;