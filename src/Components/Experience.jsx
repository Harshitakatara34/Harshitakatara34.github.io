import React from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const ExperienceTimeline = () => {
    const experiences = [
        {
          company: "TechNova Solutions",
          url: "https://technovasolutions.com",
          position: "Frontend Developer - Freelance",
          duration: "Feb, 2025 - Present",
          description: "Developed QuickBite, a 60-minute food delivery platform for urban areas"
        },
        {
          company: "Digital Horizon Inc.",
          url: "https://digitalhorizon.com",
          position: "Full Stack Developer - Full Time",
          duration: "Mar, 2024 - Jan, 2025",
          description: "Created ERP system, Order Management Dashboard, implemented OAuth 2.0, resolved performance issues in legacy systems"
        },
        {
          company: "CloudMatrix Technologies",
          url: "https://cloudmatrix.tech",
          position: "React Developer - Internship",
          duration: "Nov, 2023 - Feb, 2024",
          description: "Developed social media analytics dashboard to track engagement metrics across multiple platforms"
        },
        {
          company: "ReadEasy",
          url: "https://www.readeasy.app",
          position: "Web Developer - Freelance",
          duration: "Jul, 2023 - Oct, 2023",
          description: "Built an ebook subscription platform with admin panel and integrated PayPal payment system"
        }
    ];
  const headingFont = "__Livvic_1d926c, __Livvic_Fallback_1d926c";
  return (
    <Box 
      position="relative"
      maxW="1200px"
      mx="auto"
      px={4}
      py={10}
      data-aos="zoom-out-up"
      mt="8rem"
    >
      <Flex 
        direction={{ base: "column", lg: "row" }}
        align="flex-start"
        gap={8}
      >
        {/* Vertical Title (LEFT SIDE) */}
        <Box 
        //   position={{ base: "static", lg: "sticky" }}
          top="50%"
          transform={{ lg: "translateY(-50%)" }}
          alignSelf="center"
          mr={{ lg: 8 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -90 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              transformOrigin: "center center"
            }}
          >
           <Box
            bgClip="text"
            bgGradient="linear(to-l, #81e6d9, #28628b)"
          >
            <Heading
              as="h1"
              fontFamily={headingFont}
              fontSize="80px"
              lineHeight="1.2"
              display={{ base: "block", lg: "inline-block" }}
              whiteSpace="nowrap"
            >
              Professional <br /> Experiences
            </Heading>
          </Box>
          </motion.div>
        </Box>

        {/* Experiences list (RIGHT SIDE) */}
        <Box 
          flex={1}
          pl={{ lg: "60px" }}
          position="relative"
        >
          {/* Timeline line (LEFT of cards) */}
          <Box 
            position="absolute"
            left="84px"
            top="0"
            bottom="0"
            width="2px"
            bgGradient="linear(to-l, #81e6d9, #28628b)"
            data-aos="zoom-out-up"
          />
          
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              company={exp.company}
              url={exp.url}
              position={exp.position}
              duration={exp.duration}
              description={exp.description}
            />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

const ExperienceCard = ({ company, url, position, duration, description }) => {
  return (
    <Box 
      position="relative"
      mb={8}
      pl="60px" // Make space for timeline
      data-aos="zoom-out-up"
    >
      {/* Timeline circle (LEFT of card) */}
      <Box
        position="absolute"
        left="16px"
        top="0"
        width="16px"
        height="16px"
        borderRadius="full"
        bg="#81e6d9"
        
        border="4px solid"
        borderColor="white"
        zIndex={1}
        boxShadow="0 0 0 4px rgba(49, 130, 206, 0.2)"
      />
      
      {/* Card content */}
      <Box   
                p={6}
                bg="gray.900"
                borderRadius="lg"
                position="relative"
                ml={{ base: "20px", lg: "40px" }}
                _hover={{ 
                  transform: "translateY(-5px)" 
                }}
                transition="all 0.3s ease"
                boxShadow="0 4px 20px -5px rgba(129, 230, 217, 0.4), 0 4px 25px -5px rgba(40, 98, 139, 0.3)"
              >
                <Link href={url} isExternal _hover={{ textDecoration: "none" }}>
                  <Heading as="h3" fontSize="xl" mb={2} color="#81e6d9">
                    {company}
                  </Heading>
                </Link>
                <Text fontWeight="semibold" color="gray.400" mb={1}>
                  {position}
                </Text>
                <Text color="gray.500" fontSize="sm" mb={3}>
                  {duration}
                </Text>
                <Text color="gray.300">{description}</Text>
              </Box>
    </Box>
  );
};

export default ExperienceTimeline;