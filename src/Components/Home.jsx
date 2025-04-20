import {
  Container,
  SimpleGrid,
  Image,
  Link,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { TbPhone } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";

import Typewriter from "typewriter-effect"
import { keyframes } from "@chakra-ui/react";
import myGif from "../Image/Homegif.gif";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import photo from "../Image/Harshita_katara_img.png"
import { ReactElement, useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import Resume from "./Harshita-Katara-Resume.pdf";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { ImMail4 } from "react-icons/im";
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  function handleResume() {
    return window.open("https://drive.google.com/file/d/1laXdjw9Qyg-jQRMjw8sVn6J1FBRwSOtj/view?usp=sharing")
  }
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
  const gradientBorder = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

  const pulseScale = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;
  // useEffect(() => {
  //   AOS.init({
  //     duration: 600, // Animation duration in milliseconds
  //     easing: 'ease-in-sine', // Easing function
  //     delay: 100, // Delay in milliseconds
  //   });
  // }, []);
  return (
    <>
      <Container id="home"
        maxW={{ base: "95%", sm: "80%", xl: "100%" }}
        m="auto"
        textAlign="center"
        mb={{ base: "-50px", sm: "0px" }}
      >
        {/* <Flex
          justifyContent="space-between"
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={10}
        > */} 
        <Stack
          w={{ base: "80%", lg: '"50%"', sm: "90%" }}
          spacing={4}
          justifyContent="center"
          margin="auto"
          mt="5rem" data-aos="flip-left" data-aos-delay="100"

        >

          <Box data-aos="fade-down" display="flex" alignItems="center" gap="12px" justifyContent="center" mt="15rem" flexWrap="wrap" >
            <Text
              fontWeight={600}
              p={0}
              fontSize={"52px"}
              textAlign="center"
              rounded={"md"}
              color="white"
            >
              Hi, I am
            </Text>
            <Box
              bgClip="text"
              bgGradient="linear(to-l, #81e6d9, #28628b)"
            >
              <Heading id="user-detail-name" display="inline-block" fontSize={{ base: "52px", md: "52px" }} >

                Harshita Katara
              </Heading>
            </Box>
          </Box>
          <Heading color="white" id="user-detail-name" display="inline-block" fontSize={{ base: "52px", md: "52px" }} ><Heading color="white" id="user-detail-name" display="inline-block" fontSize={{ base: "40px", md: "52px" }}>
            <Typewriter
              options={{
                strings: [
                  " Passionate Full Stack Developer",
                  " Problem Solver",
                  "Tech Enthusiast",
                  "Coding Freak 🔥",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                cursor: "|", // Optional: Adds a blinking cursor
              }}
            />
          </Heading></Heading>

          {/* <Text fontSize={"21px"}>Full Stack Web Developer</Text>
            <Text fontSize={"lg"}>
              Analytical and detail-oriented Full Stack Developer in MERN stack.
              Adaptable to learning new technologies, accountable team player,
              and highly productive. Aims to create world-class web applications
              while facilitating organizations in achieving ambitious goals.
            </Text> */}
          <Stack

            h="14"
            w={{ base: "30%", lg: "35%", sm: "90%" }}
            spacing={4}
            direction={"row"}
            alignItems={"center"}
            margin="auto"
            mt="3rem"
            justifyContent="center"
            divider={
              <StackDivider
                borderColor={useColorModeValue("white", "white")}
              />
            }
          >
            {/* <Link
               id="resume-link-2"
                href={Resume}
                className="nav-link resume"
                download
                onClick={handleResume}
                target="_blank"
              >
                <Button
                  className="nav-link resume"
                  id="resume-button-2"
                  colorScheme="teal"
                  size="md"
                >
                  <Text mr={"4px"}>
                    Resume
                    <BiDownload />
                  </Text>
                </Button>
              </Link> */}

            <Button
              id="resume-button-2"
              bgGradient="linear(to-l, #81e6d9, #28628b)"
              backgroundSize="200% 200%"
              animation={`${gradientBorder} 3s ease infinite`}
              color="white"
              fontWeight="bold"
              fontSize="20px"
              p="24px 30px"
              borderRadius="5px"
              rightIcon={<BiDownload />}
              _hover={{
                animation: `${gradientBorder} 1.5s ease infinite`,
                transform: "scale(1.02)",
              }}
              onClick={handleResume}
              as="a"
              href={Resume}
              download="Harshita-Katara-Resume.pdf"
            >
              Resume
            </Button>

            <Flex alignItems="center" w="100%" gap="1.5rem">
              <Link
                // m="5px"
                _hover={{
                  animation: `4s ease infinite`,
                  transform: "scale(1.06)",
                }}
                id="contact-github"
                href="https://github.com/Harshitakatara34"
                target="_blank"
              >
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>

              <Link
                // m="5px"
                id="contact-linkedin"
                href="https://www.linkedin.com/in/harshita-katara-09904b246"
                target="_blank"
                _hover={{
                  animation: `4s ease infinite`,
                  transform: "scale(1.06)",
                }}
              >
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </Link>
              <a href="mailto:khushikatara041@gmail.com">
                <Box bgColor="white" borderRadius="100%" p={2}  _hover={{
                  animation: `4s ease infinite`,
                  transform: "scale(1.06)",
                }}>
                  <MdOutlineMailOutline size={25} color="rgba(0, 0, 0, 0.7)" />
                </Box>

              </a>
              <a href="tel:7817032067">
                <Box bgColor="white" borderRadius="100%" p={2} _hover={{
                  animation: `4s ease infinite`,
                  transform: "scale(1.06)",
                }}>
                  <TbPhone size={25} color="rgba(0, 0, 0, 0.7)" />
                </Box>

              </a>

            </Flex>
          </Stack>
        </Stack>
      
      </Container>
    </>
  );
}
