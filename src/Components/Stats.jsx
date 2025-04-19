import { Box, Center, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import {motion} from "framer-motion"
const Stats = () => {
  return (
    <Box marginTop={"130px"} textAlign="center">
      <Heading>GitHub Stats</Heading>
      <Stack>
           <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
        <Center 
          className="react-activity-calendar"
          margin="auto"
          // m={"auto"}
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
          // border={"3px solid white"}
        >
          <Link
            // border={"3px solid white"}
            w={{ base: "100%", md: "33%" }}
            mt={{ base: "10px", md: "0px" }}
            href="https://github.com/Harshitakatara34"
            target="_blank"
          >
            <Flex justifyContent={"center"}>
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
            <Flex justifyContent={"center"}>
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
            <Flex justifyContent={"center"}>
              <Image
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=harshitakatara34&show_icons=true&locale=en"
              ></Image>
            </Flex>
          </Link>
        </Flex>
        </motion.div>
      </Stack>
    
    </Box>
  );
};

export default Stats;
