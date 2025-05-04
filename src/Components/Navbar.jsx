import { React, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";
import DrawerExample from "./SideBar";
// import Resume from "./Harshita-Katara-Resume.pdf";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" }, // Experience shares same section as Skills
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState("")
  useEffect(() => {
    toggleColorMode("dark");
  }, []);

  const handleClickScroll = (value) => {
    setActiveTab(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function handleResume() {
    return window.open("https://drive.google.com/file/d/1laXdjw9Qyg-jQRMjw8sVn6J1FBRwSOtj/view?usp=sharing");
  }

  return (
    <Box
      as="header"
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      position="fixed"
      w="100%"
      zIndex={"1000"}
      top={"0px"}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        m="auto"
        width={"94%"}
      >
        <Box w={{ base: "50%", sm: "100%" }} fontSize={{ lg: "20px", base: "16px" }} >
          <Text as='em'   color={useColorModeValue("gray.600", "white")}>{"<Harshita Katara/>"}</Text>
        </Box>

        {/* Desktop Menu */}
        <Flex
          w="70%"
          display={{ base: "none", lg: "block" }}
          alignItems={"center"}
          justifyContent="end"
        >
          <Flex
            id="nav-menu"
            w="100%"
            gap="0.6rem"
            // border="2px solid red"
            justifyContent={"space-between"}
            direction={"row"}
            fontSize="16px"
            alignItems={"center"}
          >
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleClickScroll(item.id)}
                colorScheme="gray"
                variant="ghost"
                fontSize="12px"
                size="sm"
              >
                <Link className={`nav-link ${item.id.toLowerCase()}`}>{item.label}</Link>
              </Button>
            ))}

            <Button
              id="resume-button-1"
              className="animatedButton"

              size="sm"
              variant="solid"

              onClick={handleResume}
            >
              <span>
                <a
                  id="resume-link-1"
                  // href={Resume}
                  download="Harshita-katara-Resume.pdf"
                  style={{ textDecoration: "none" }}
                >
                  Resume
                </a>
              </span>

            </Button>
            <Button onClick={toggleColorMode} size="sm" >
              <span>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </span>

            </Button>
          </Flex>
        </Flex>

        <Box display={{ base: "block", lg: "none" }}>
          <Flex
            w="100%"
            justifyContent={"space-between"}
            direction={"column"}
            fontSize="18px"
            alignItems={"center"}
          >
            <DrawerExample
              handleClickScroll={handleClickScroll}
              activeTab={activeTab}
              handleResume={handleResume}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
