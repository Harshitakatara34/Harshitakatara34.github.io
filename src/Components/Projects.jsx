import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png";
import img2 from "../Image/img2.png";
import img3 from "../Image/img3.png";
import img4 from "../Image/img4.png";
console.log(img1);

const Projects = () => {
  return (
    <Box id="projects" textAlign={"center"} mt="6rem"  >
      <Heading  color={useColorModeValue("gray.600","white")}>Projects</Heading>
      <SimpleGrid 
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        mt="5rem"
        columns={{ base: "1", md: "2", xl: "2" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "85%", md: "81%" }}
        // marginTop="70px"
        // marginBottom={"50px"}
        minH="200px" // Set a minimum height for each child
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image: `${img4}`,
    title: "Spade",
    desc: "Spade is a cutting-edge satellite data ordering platform designed to streamline archive and tasking requests across multiple global providers including ISRO, BlackSky, Umbra, Satellogic, and more. It supports SAR, Optical, and Thermal data acquisition, allowing users to compare availability, pricing, and coverage in a unified interface. Built with React, RTK Query, and Leaflet.js on the frontend, and powered by a robust backend stack including Node.js, Express, Kafka, and MongoDB/PostgreSQL, Spade ensures efficient data processing, provider integration, and real-time updates. It plays a critical role in geospatial intelligence and Earth observation workflows by simplifying the end-to-end ordering process.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "RTK Query", "Leaflet.js", "Kafka", "Node.js", "MongoDb", "PostgreSQL", "Express.js"],
    github: "",
    deploy: "https:/spade.suhora.com",
  },
  {
    image:`${img1}`,
    title: "Tackle&Trail (Clone-Of-Basspro)",
    desc: "Discover Tackle&Trail, your ultimate source for premium fishing, hunting, boating, and outdoor sporting goods. We proudly offer a comprehensive selection of top-quality equipment and gear, ensuring that outdoor enthusiasts of all kinds find everything they need to embark on unforgettable adventures.",
    techStack: ["HTML", "CSS", "JavaScript","React","Redux","Chakra-UI"],
    github: "https://github.com/Harshitakatara34/auspicious-sea-8816",
    deploy: "https://tackle-and-trail.netlify.app/",
  },
  {
    image:`${img2}`,
    desc: "Jewel Lane, a Caratlane-inspired e-commerce destination, is your go-to for exquisite gold and diamond jewellery. Our extensive collection includes a stunning  rings,  earrings, bangles, and timeless bracelets, all meticulously crafted to reflect your unique style and grace.",
    title: "JewelLane (Clone-Of-Caratlane)",
    techStack: ["HTML", "CSS", "JavaScript","React","Redux","Chakra-UI","Node.js","Express.js","Mongoose"],
    github: "https://github.com/Harshitakatara34/pointless-belief-3937",
    deploy: "https://jewellane.vercel.app/",
  },
  {
    image:`${img3}`,
    desc: "Explore our Expedia-inspired e-commerce platform, where you can effortlessly book accommodations at a wide range of hotels and access enticing vacation packages. Plan your dream getaway with ease and embark on unforgettable journeys, all from the comfort of your screen.",
    title: "Bagpacker (Clone-Of-Expedia)",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/ragged-tank-492.git",
    deploy: "https://golden-sorbet-745819.netlify.app/",
  },

  

  ];

export default Projects;
