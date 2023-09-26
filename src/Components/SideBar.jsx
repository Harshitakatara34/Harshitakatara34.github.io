import { React, ReactNode, useEffect, useRef } from "react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Flex,
  Link,
  Text,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import Resume from "./Harshita-Katara-Resume.pdf";
export default function DrawerExample({ handleClickScroll, handleResume }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex w="70%" justifyContent={"flex-start"}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
{/* 
              <Link
                id="resume-link-1"
                href="Harshita_Katara_Resume.pdf"
                download
                onClick={handleResume}
                target="_blank"
              >
                <Button
                  id="resume-button-1"
                  class="nav-link resume"
                  colorScheme="blue"
                  size="md"
                  ml="20px"
                  variant="solid"
                >
                  <Flex ml="10px" alignItems={"center"}>
                    <Button>
                      <Text mr={"4px"}>Resume</Text> <BiDownload />
                    </Button>
                  </Flex>
                </Button>
              </Link> */}
              
              <Button colorScheme="teal" variant="solid"
                      style={{
                       
                        fontWeight: "bold",
                        fontSize: "15px",
                        cursor: "pointer",
                        padding: "8px 15px",
                        borderRadius: "15px",
                        marginLeft:"6px"
                        // border: "3px solid rgba(11,12,16,0.4)",
                      }}
                      onClick={()=> window.open("https://drive.google.com/file/d/1laXdjw9Qyg-jQRMjw8sVn6J1FBRwSOtj/view?usp=sharing")}
                    >
                      <a 
                     
                        href={Resume}
                        download="Harshita-katara-Resume.pdf"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        Resume
                      </a>
                    </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <Flex
                w="100%"
                onClick={() => {
                  handleClickScroll("home");
                }}
                class="nav-link home"
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Home
              </Flex>

              <Flex
                w="100%"
                class="nav-link about"
                colorScheme="gray"
                onClick={() => {
                  handleClickScroll("about");
                }}
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                About
              </Flex>

              <Flex
                w="100%"
                class="nav-link skills"
                onClick={() => {
                  handleClickScroll("skills");
                }}
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Skills
              </Flex>

              <Flex
                w="100%"
                textAlign={"left"}
                class="nav-link projects"
                onClick={() => {
                  handleClickScroll("projects");
                }}
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Projects
              </Flex>

              <Flex
                w="100%"
                onClick={() => {
                  handleClickScroll("contact");
                }}
                class="nav-link contact"
                colorScheme="gray"
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                Contact
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
