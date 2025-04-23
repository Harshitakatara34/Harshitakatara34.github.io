// import {
//   Container,
//   SimpleGrid,
//   Image,
//   Link,
//   Flex,
//   Heading,
//   Text,
//   Stack,
//   StackDivider,
//   Icon,
//   useColorModeValue,
//   Box,
//   Button,
//   useColorMode,
// } from "@chakra-ui/react";
// import 'aos/dist/aos.css';
// import AOS from 'aos';


// import Typewriter from "typewriter-effect"
// import { keyframes } from "@chakra-ui/react";
// import myGif from "../Image/Homegif.gif";
// import {
//   IoAnalyticsSharp,
//   IoLogoBitcoin,
//   IoSearchSharp,
// } from "react-icons/io5";
// import photo from "../Image/Harshita_katara_img.png"
// import { ReactElement, useEffect } from "react";
// import { BiDownload } from "react-icons/bi";
// import Resume from "./Harshita-Katara-Resume.pdf";
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';
// import { motion } from 'framer-motion';
// import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
// import { ImMail4 } from "react-icons/im";
// const Feature = ({ text, icon, iconBg }) => {
//   return (
//     <Stack direction={"row"} align={"center"}>
//       <Flex
//         w={8}
//         h={8}
//         align={"center"}
//         justify={"center"}
//         rounded={"full"}
//         bg={iconBg}
//       >
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   );
// };

// export default function Home() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   function handleResume() {
//     return window.open("https://drive.google.com/file/d/1laXdjw9Qyg-jQRMjw8sVn6J1FBRwSOtj/view?usp=sharing")
//   }
//  useEffect(() => {
//     // Initialize AOS
//     AOS.init({
//       duration: 800,
//       once: false, // Whether animation should happen only once
//       easing: 'ease-in-out',
//     });

//     // Refresh AOS after components are mounted
//     const timer = setTimeout(() => {
//       AOS.refresh();
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);
//   const gradientBorder = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

//   const pulseScale = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.02); }
//   100% { transform: scale(1); }
// `;
//   // useEffect(() => {
//   //   AOS.init({
//   //     duration: 600, // Animation duration in milliseconds
//   //     easing: 'ease-in-sine', // Easing function
//   //     delay: 100, // Delay in milliseconds
//   //   });
//   // }, []);
//   return (
//     <>
//       <Container id="home"
//         maxW={{ base: "95%", sm: "80%", xl: "100%" }}
//         m="auto"
//         textAlign="center"
//         mb={{ base: "-50px", sm: "0px" }}
//       >
//         {/* <Flex
//           justifyContent="space-between"
//           direction={{ base: "column-reverse", lg: "row" }}
//           spacing={10}
//         > */} 
//         <Stack
//           w={{ base: "80%", lg: '"50%"', sm: "90%" }}
//           spacing={4}
//           justifyContent="center"
//           margin="auto"
//           mt="5rem" data-aos="flip-left" data-aos-delay="100"

//         >

//           <Box data-aos="fade-down" display="flex" alignItems="center" gap="12px" justifyContent="center" mt="15rem" flexWrap="wrap" >
//             <Text
//               fontWeight={600}
//               p={0}
//               fontSize={"52px"}
//               textAlign="center"
//               rounded={"md"}
//               color="white"
//             >
//               Hi, I am
//             </Text>
//             <Box
//               bgClip="text"
//               bgGradient="linear(to-l, #81e6d9, #28628b)"
//             >
//               <Heading id="user-detail-name" display="inline-block" fontSize={{ base: "52px", md: "52px" }} >

//                 Harshita Katara
//               </Heading>
//             </Box>
//           </Box>
//           <Heading color="white" id="user-detail-name" display="inline-block" fontSize={{ base: "52px", md: "52px" }} ><Heading color="white" id="user-detail-name" display="inline-block" fontSize={{ base: "40px", md: "52px" }}>
//             <Typewriter
//               options={{
//                 strings: [
//                   " Passionate Full Stack Developer",
//                   " Problem Solver",
//                   "Tech Enthusiast",
//                   "Coding Freak 🔥",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//                 deleteSpeed: 30,
//                 cursor: "|", // Optional: Adds a blinking cursor
//               }}
//             />
//           </Heading></Heading>

//           {/* <Text fontSize={"21px"}>Full Stack Web Developer</Text>
//             <Text fontSize={"lg"}>
//               Analytical and detail-oriented Full Stack Developer in MERN stack.
//               Adaptable to learning new technologies, accountable team player,
//               and highly productive. Aims to create world-class web applications
//               while facilitating organizations in achieving ambitious goals.
//             </Text> */}
//           <Stack

//             h="14"
//             w={{ base: "30%", lg: "35%", sm: "90%" }}
//             spacing={4}
//             direction={"row"}
//             alignItems={"center"}
//             margin="auto"
//             mt="3rem"
//             justifyContent="center"
//             divider={
//               <StackDivider
//                 borderColor={useColorModeValue("white", "white")}
//               />
//             }
//           >
//             {/* <Link
//                id="resume-link-2"
//                 href={Resume}
//                 className="nav-link resume"
//                 download
//                 onClick={handleResume}
//                 target="_blank"
//               >
//                 <Button
//                   className="nav-link resume"
//                   id="resume-button-2"
//                   colorScheme="teal"
//                   size="md"
//                 >
//                   <Text mr={"4px"}>
//                     Resume
//                     <BiDownload />
//                   </Text>
//                 </Button>
//               </Link> */}

//             <Button
//               id="resume-button-2"
//               bgGradient="linear(to-l, #81e6d9, #28628b)"
//               backgroundSize="200% 200%"
//               animation={`${gradientBorder} 3s ease infinite`}
//               color="white"
//               fontWeight="bold"
//               fontSize="20px"
//               p="24px 30px"
//               borderRadius="5px"
//               rightIcon={<BiDownload />}
//               _hover={{
//                 animation: `${gradientBorder} 1.5s ease infinite`,
//                 transform: "scale(1.02)",
//               }}
//               onClick={handleResume}
//               as="a"
//               href={Resume}
//               download="Harshita-Katara-Resume.pdf"
//             >
//               Resume
//             </Button>

//            //           </Stack>
//         </Stack>

//       </Container>
//     </>
//   );
// }
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
import Resume from "./Harshita-Katara-Resume.pdf";
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
  function handleResume() {
    return window.open("https://drive.google.com/file/d/1laXdjw9Qyg-jQRMjw8sVn6J1FBRwSOtj/view?usp=sharing")
  }
  return (
    <>

      <Container id="home"
      border="5px solid red"
        maxW={{ base: "95%", sm: "90%" }}
        m="auto"
        mt={"40px"}
        mb={{ base: "-50px", sm: "0px" }}
      >
        <Flex
          justifyContent="space-between"
          // direction={{ base: "column-reverse", lg: "row" }}
          // spacing={10}
          border="4px solid yellow"
        >
          <Stack
            w={{ base: "100%", lg: '"50%"' }}
            spacing={4}
            justifyContent="center"
          >
            <Text
              fontWeight={600}
              p={0}
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
            <Heading color="white" id="user-detail-name" display="inline-block" fontSize={{ base: "40px", md: "38px" }}>
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
                spacing={4}
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

                <Button id="resume-button-2" colorScheme="teal" variant="solid"
                  className="nav-link resume"
                  style={{

                    fontWeight: "bold",
                    fontSize: "15px",
                    cursor: "pointer",
                    padding: "8px 15px",
                    borderRadius: "15px",
                    // border: "3px solid rgba(11,12,16,0.4)",
                  }}
                  onClick={handleResume}

                >
                  <a
                    id="resume-link-2"
                    href={Resume}
                    download="Harshita-Katara-Resume.pdf"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    Resume
                  </a>
                </Button>

                <Flex alignItems="center" w="100%" gap="1.5rem">
       <Link
                m="5px"
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
                  {/* <MdOutlineMailOutline size={25} color="rgba(0, 0, 0, 0.7)" /> */}
                </Box>

              </a>
              <a href="tel:7817032067">
                <Box bgColor="white" borderRadius="100%" p={2} _hover={{
                  animation: `4s ease infinite`,
                  transform: "scale(1.06)",
                }}>
                  {/* <TbPhone size={25} color="rgba(0, 0, 0, 0.7)" /> */}
                </Box>

              </a>

            </Flex>

              </Stack>
              <Stack>
                <Flex>
                  <svg
                    fill="white"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
                  </svg>
                  <a href="tel:7817032067">
                    <Text id="contact-phone" ml={"5px"}>
                      +91 7817032067
                    </Text>
                  </a>
                </Flex>

                <Flex mt={{ base: "20px", sm: "0px" }}>
                  <svg
                    fill="white"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>

                  <a href="mailto:khushikatara041@gmail.com">      <Text id="contact-email" ml={"10px"}>khushikatara041@gmail.com

                  </Text></a>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
          <Flex
          border="2px solid green"
          w="60%"
            // w={{ base: "100%", lg: '"50%"' }}
            // justifyContent={{ base: "center", lg: "end" }}
            // alignItems={"center"}
            // m="10px"
          >
            <Lottie animationData={animationData} loop={true} border="4px solid red" />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}