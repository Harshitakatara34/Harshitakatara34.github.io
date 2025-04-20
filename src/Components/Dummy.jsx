import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  Flex,
  Divider,
  Image,
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from "../Image/Harshita_katara_img.png";

const About = () => {
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
    <Container
      maxW={{ base: "97%", lg: "90%" }}
      id="about"
      className="about section"
      p={{ base: "2", sm: "12" }}
      textAlign="center"
    >
      <Heading mb={"10"} as="h1" data-aos="fade-down">
        About
      </Heading>
      <Flex
        w={"100%"}
        m="auto"
        direction={{ base: "column", lg: "row" }}
        bg="white"
        borderRadius="20px"
        p="20px"
        py="30px"
        textAlign={"left"}
        boxShadow={"rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"}
        marginTop={{ base: "5", sm: "5" }}
        justifyContent={{ base: "space-between", lg: "space-between" }}
        data-aos="fade-up"
      >
        <Box data-aos="fade-right">
          <Flex
            width={{ base: "60%", md: "40%", lg: "85%" }}
            justifyContent={"center"}
            textAlign={"center"}
            m="auto"
            zIndex="2"
            border="4px solid whiteAlpha"
          >
            <Image
              class="home-img"
              src={photo}
              h="280px"
              w="320px"
              alt="Harshita Katara"
              data-aos="zoom-in"
            />
          </Flex>
        </Box>
        <Flex
          w={{ base: "60%", lg: "67%" }}
          mt={{ base: "40px", lg: "0px" }}
          flexDirection="column"
          justifyContent="center"
          data-aos="fade-left"
        >
          <VStack>
            <Text 
              fontSize="lg" 
              lineHeight="tall" 
              color="gray.700"
              data-aos="fade-up"
            >
              Hello! My name is Harshita Katara, and I am a skilled full stack web developer...
            </Text>
          </VStack>
        </Flex>
      </Flex>
      <Divider marginTop="20" />
    </Container>
  );
};

export default About;