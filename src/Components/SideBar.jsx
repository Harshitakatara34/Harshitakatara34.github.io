import { React, useRef } from "react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Text,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import Resume from "./Harshita-Katara-Resume.pdf";

const navTabs = [
  { label: "Home", id: "home", className: "nav-link home" },
  { label: "About", id: "about", className: "nav-link about" },
  { label: "Skills", id: "skills", className: "nav-link skills" },
  { label: "Projects", id: "projects", className: "nav-link projects" },
  { label: "Contact", id: "contact", className: "nav-link contact" },
];

export default function DrawerExample({ handleClickScroll, handleResume,activeTab }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} className="animatedButton">
        <span>
        <HamburgerIcon />
        </span>
      
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
            <Flex w="70%" justifyContent={"flex-start"} gap="0.5rem">
              <Button onClick={toggleColorMode} size="sm">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button
              size="sm"
                className="animatedButton"
                variant="solid"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1laXdjw9Qyg-jQRMjw8sVn6J1FBRwSOtj/view?usp=sharing"
                  )
                }
              >
                <span>
                  <a
                    href={Resume}
                    download="Harshita-katara-Resume.pdf"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Resume
                  </a>
                </span>
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              w="100%"
              justifyContent="space-between"
              direction="column"
              fontSize="18px"
              alignItems="center"
            >
              {navTabs.map((tab) => (
                <Flex
                  key={tab.id}
                  w="100%"
                  onClick={() => handleClickScroll(tab.id)}
                  className={tab.className}
                  colorScheme="gray"
                  variant="ghost"
                  align="center"
                  p="3"
                  mx="4"
                  bgGradient={
                    activeTab === tab.id
                      ? "linear(to-l, #81e6d9, #28628b)"
                      : "none"
                  }
                  fontSize="16px"
                  borderRadius="lg"
                  role="group"
                  cursor="pointer"
                  _hover={{ background:"(to-l, #81e6d9, #28628b)", color: "white" }}
                >
                  {tab.label}
                </Flex>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
