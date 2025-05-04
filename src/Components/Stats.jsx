import { Box, Center, Flex, Heading, Image, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Stats = () => {
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
    <Box mt="15rem" textAlign="center">
      <Heading data-aos="fade-down" color={useColorModeValue("gray.600","white")}>GitHub Stats</Heading>
      <Stack    w="85%" margin="auto">
          
        <Center 
          className="react-activity-calendar"
          margin="auto"
          // m={"auto"}
       
           data-aos="fade-up"
          mt="50px"
          mb={"20px"}
        >
          <Link href="https://github.com/Harshitakatara34" target="_blank">
            <GitHubCalendar username="harshitakatara34" />
          </Link>
        </Center>
        <Flex
          w={"100%"}
          m="auto"
          justifyContent={{ base: "center", md: "space-around" }}
          marginTop="30px"
          direction={{ base: "column", md: "row" }}
           data-aos="fade-up"
          // border={"3px solid white"}
        >
          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "33%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/Harshitakatara34"
            target="_blank"
          >
            <Flex justifyContent={"center"}  data-aos="fade-right">
              <Image
                id="github-streak-stats"
                src={
                  "https://github-readme-streak-stats.herokuapp.com/?user=harshitakatara34&"
                }
              ></Image>
            </Flex>
          </Link>

          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "30%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/Harshitakatara34"
            target="_blank"
          >
            <Flex justifyContent={"center"}  data-aos="fade-up">
              <Image
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=harshitakatara34&show_icons=true&locale=en&layout=compact"
              ></Image>
            </Flex>
          </Link>

          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "31%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/Harshitakatara34"
            target="_blank"
          >
            <Flex justifyContent={"center"} data-aos="fade-left">
              <Image
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=harshitakatara34&show_icons=true&locale=en"
              ></Image>
            </Flex>
          </Link>
        </Flex>
   
      </Stack>
    
    </Box>
  );
};

export default Stats;
