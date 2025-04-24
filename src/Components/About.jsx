import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from "../Image/Harshita_katara_img.png"
import { motion } from 'framer-motion';
console.log(photo)
const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

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
      mt="8rem"
      className="about section"
      // p={{ base: "2", sm: "12" }}
      textAlign="center"
    > 
      <Heading mb={"10"} as="h1" data-aos="fade-down">
        About
      </Heading>
      <Flex
        w={"100%"}
        data-aos="fade-up"
        m="auto"
        direction={{ base: "column", lg: "row" }}
        bg={useColorModeValue("white", "gray.800")}
        borderRadius="20px"
        p="20px"
        py="30px"
        textAlign={"left"}
        boxShadow={"rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"}
        marginTop={{ base: "5", sm: "5" }}
        justifyContent={{ base: "space-between", lg: "space-between" }}
      >
        <Box data-aos="fade-right">
          <Flex
            // border={"5px solid red"}
            width={{ base: "60%", md: "40%", lg: "85%" }}
            justifyContent={"center"}
            textAlign={"center"}
            m="auto"
            zIndex="2"
            border="4px solid whiteAlpha"

          >
            <Image
              textAlign={"center"}
              class="home-img"
              // borderRadius="100%"
              src={photo}
              h="280px"
              w="320px"
              alt="some good alt text"
            // objectFit="cover"
            />
          </Flex>
        </Box>
        <Flex
          w={{ base: "100%", lg: "67%" }}
          mt={{ base: "40px", lg: "0px" }}
          flexDirection="column"
          justifyContent="center"
          data-aos="fade-left"
        >


          <VStack>


            <Text fontSize="16px" lineHeight="tall" color={useColorModeValue("gray.700", "gray.300")}>
              Hello! My name is Harshita Katara, and I am a skilled full stack web developer with a expertise in Mern Stack. My efficiency spans both front-end and back-end development, allowing me to build seamless user-friendly web applications from the ground up and to tackle complex development challenges. I am passionate about creating innovative solutions that enhance user experiences and drive business success. With a commitment to continuous learning and a strong foundation in software development, I am excited to contribute to dynamic projects and collaborate with forward-thinking teams.
            </Text>


          </VStack>
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Flex>
      </Flex>
      <Divider marginTop="20" />
    </Container>



  );
};

export default About;
