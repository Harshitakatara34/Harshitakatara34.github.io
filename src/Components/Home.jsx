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
import { TbPhone } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
// import { TbPhone } from "react-icons/tb";
// import { MdOutlineMailOutline } from "react-icons/md";
import Typewriter from "typewriter-effect"
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import photo from "../Image/Harshita_katara_img.png"
import { ReactElement } from "react";
import { BiDownload } from "react-icons/bi";
// import Resume from "./Harshita-Katara-Resume.pdf";
import Lottie from "lottie-react";
import animationData from "../utils/lottie.json"
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
  // function handleResume() {
  //   return window.open("https://drive.google.com/file/d/1laXdjw9Qyg-jQRMjw8sVn6J1FBRwSOtj/view?usp=sharing")
  // }
  return (
    <>

      <Container id="home"
        // border="5px solid red"
        maxW={{ base: "95%", sm: "90%" }}
        m="auto"
        mt={{ lg: "7rem", base: "3.2rem" }}
        mb={{ base: "-50px", sm: "0px" }}
      >
        <Flex
          justifyContent="space-between"
          direction={{ base: "column-reverse", lg: "row" }}
        // direction={{ base: "column-reverse", lg: "row" }}
        // spacing={10}
        // border="4px solid yellow"
        >
          <Stack
            w={{ base: "100%", lg: '"50%"' }}
            spacing={4}
            justifyContent="center"
          >
            <Text
              fontWeight={600}
              p={0}
              color={useColorModeValue("gray.600","white")}
              fontSize={"20px"}
              alignSelf={"flex-start"}
              rounded={"md"}
              mt={{ base: "20px", lg: '"0px"' }}
            >
              Hi, I am
            </Text>
            <Box
              w="100%"
              bgClip="text"
              bgGradient="linear(to-l, #81e6d9, #28628b)"
            >
              <Heading id="user-detail-name">Harshita Katara</Heading>
            </Box>
            <Heading id="user-detail-name" display="inline-block" fontSize={{ base: "40px", md: "38px" }}  color={useColorModeValue("gray.600","white")}>
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
            </Heading>
            {/* <Text fontSize={"lg"}>
              Analytical and detail-oriented Full Stack Developer in MERN stack.
              Adaptable to learning new technologies, accountable team player,
              and highly productive. Aims to create world-class web applications
              while facilitating organizations in achieving ambitious goals.
            </Text> */}
            <Stack>
              <Stack
                h="14"
                mt={{ lg: "2rem", base: "0.5rem" }}
                spacing={{ lg: "4", base: "1" }}
                direction={"row"}
                alignItems={"center"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
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

                <Button id="resume-button-2" variant="solid"
                  className="animatedButton"

                // onClick={handleResume}

                >
                  <span>
                    <a
                      id="resume-link-2"
                      // href={Resume}
                      download="Harshita-Katara-Resume.pdf"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      Resume
                    </a>
                  </span>

                </Button>

                <Flex alignItems="center" w="100%" gap={{ lg: "1.5rem", base: "1.2rem" }}>
                  <Link
                    m="5px"
                    _hover={{
                      animation: "4s ease infinite",
                      transform: "scale(1.06)",
                    }}
                    id="contact-github"
                    href="https://github.com/Harshitakatara34"
                    target="_blank"
                  >
                    <svg
                      fill={useColorModeValue("#4B5563", "white")}
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
                      animation: "4s ease infinite",
                      transform: "scale(1.06)",
                    }}
                  >
                    <svg
                      fill={useColorModeValue("#4B5563", "white")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </Link>
                  <a href="mailto:khushikatara041@gmail.com">
                    <Box bgColor={useColorModeValue("gray.600", "white")} borderRadius="100%" p={2} _hover={{
                      animation: "4s ease infinite",
                      transform: "scale(1.06)",
                    }}>

                      {/* <Box boxSize={{ base: "10", md: "25px" }}></Box> */}
                      <MdOutlineMailOutline size={25} color={useColorModeValue("white", "rgba(0, 0, 0, 0.7)")} />
                    </Box>

                  </a>
                  <a href="tel:7817032067">
                    <Box bgColor={useColorModeValue("gray.600", "white")} borderRadius="100%" p={2} _hover={{
                      animation: "4s ease infinite",
                      transform: "scale(1.06)",
                    }}>
                      <TbPhone size={25} color={useColorModeValue("white", "rgba(0, 0, 0, 0.7)")} />
                    </Box>

                  </a>

                </Flex>

              </Stack>
              <Stack>
              </Stack>
            </Stack>
          </Stack>
          <Box 
            w={{ base: "80%", sm: "60%", md: "50%", lg: "50%" }}
            maxW="650px"
            mx={{ base: "auto", lg: 0 }}
            mt={{ base: 4, lg: 0 }}
          >
            <Lottie
              animationData={animationData}
              loop={true}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Flex>
      </Container>
    </>
  );
}