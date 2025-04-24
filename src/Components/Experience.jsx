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
        // border="2px"
        id="experience" 
            position="relative"
            w={{ base: "90%", md: "90%" }}
            maxW="1200px"
            mx="auto"
            px={{ base: 2, md: 4 }}
            py={{ base: 5, md: 10 }}
            data-aos="zoom-out-up"
            mt={{ base: "4rem", md: "8rem" }}
            // border=
            // "4px solid red"
        >
             <Heading mb={"10"} as="h1" data-aos="fade-down" color="white" textAlign="center"  display={{ base: "block", lg: "none" }}>
                               Professional Experience
                              </Heading>
            <Flex 
                direction={{ base: "column", lg: "row" }}
                align="flex-start"
                gap={{ base: 4, lg: 8 }}
            >
            
                {/* Vertical Title (LEFT SIDE) */}
                <Box 
                    position="relative"
                    alignSelf="center"
                    mr={{ lg: 8 }}
                    mb={{ base: 4, lg: 0 }}
                    w={{ base: "100%", lg: "auto" }}
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -90 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            display: "flex",
                            whiteSpace: "nowrap",
                            transformOrigin: "center center",
                            margin: "0 auto"
                        }}
                    >
                        <Box
                            bgClip="text"
                            bgGradient="linear(to-l, #81e6d9, #28628b)"
                        >
                            <Heading
                                as="h1"
                                fontFamily={headingFont}
                                fontSize={{ base: "48px", sm: "60px", md: "80px" }}
                                lineHeight="1.2"
                                whiteSpace="nowrap"
                                textAlign="center"
                                display={{ base: "none", lg: "block" }}
                            >
                                Professional <br /> Experiences
                            </Heading>
                        </Box>
                         
                    </motion.div>
                </Box>

                {/* Experiences list (RIGHT SIDE) */}
                <Box 
                    flex={1}
                    // pl={{ lg: "60px" }}
                    position="relative"
                    w="100%"
                    // border="2px solid red"
                >
                    {/* Timeline line (LEFT of cards) */}
                    <Box 
                        position="absolute"
                        // left={{ base: "20px", md: "50px" }}
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
            pl={{ base: "20px", md: "10px" }}
            data-aos="zoom-out-up"
        >
            {/* Timeline circle (LEFT of card) */}
            <Box
                position="absolute"
                // left={{ base: "4rem", md: "-16px" }}
                left="-0.42rem"
                top="0"
                width={{ base: "12px", md: "16px" }}
                height={{ base: "12px", md: "16px" }}
                borderRadius="full"
                bg="#81e6d9"
                // border="4px solid"
                borderColor="white"
                zIndex={1}
                boxShadow="0 0 0 4px rgba(49, 130, 206, 0.2)"
            />
            
            {/* Card content */}
            <Box   
                p={{ base: 4, md: 6 }}
                bg="gray.900"
                borderRadius="lg"
                position="relative"
                ml={{ base: "10px", lg: "40px" }}
                _hover={{ 
                    transform: "translateY(-5px)" 
                }}
                transition="all 0.3s ease"
                boxShadow="0 4px 20px -5px rgba(129, 230, 217, 0.4), 0 4px 25px -5px rgba(40, 98, 139, 0.3)"
            >
                <Link href={url} isExternal _hover={{ textDecoration: "none" }}>
                    <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} mb={2} color="#81e6d9">
                        {company}
                    </Heading>
                </Link>
                <Text fontWeight="semibold" color="gray.400" mb={1} fontSize={{ base: "sm", md: "md" }}>
                    {position}
                </Text>
                <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }} mb={3}>
                    {duration}
                </Text>
                <Text color="gray.300" fontSize={{ base: "sm", md: "md" }}>
                    {description}
                </Text>
            </Box>
        </Box>
    );
};

export default ExperienceTimeline;