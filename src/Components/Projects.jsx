import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
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
      <Heading>Projects</Heading>
      <SimpleGrid 
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
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
  {
    image:`${img4}`,
    title: "Chicken (Clone-Of-Licious)",
    desc: "Chicken, your premier online marketplace for sourcing top-quality poultry and fish products at the most competitive prices. Our diverse range of offerings ensures that you can place orders conveniently and enjoy doorstep delivery of the freshest and finest options for your culinary delights.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/defective-impulse-1904.git",
    deploy: "https://superb-haupia-a7c7f2.netlify.app/",
  },

  ];

export default Projects;
