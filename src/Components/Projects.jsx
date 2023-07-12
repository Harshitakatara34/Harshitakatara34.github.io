import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png"
import img2 from "../Image/img2.png"
import img3 from "../Image/img3.png"
import img4 from "../Image/img4.png"
console.log(img1)
const Projects = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.
    <Box id="projects" textAlign={"center"} pt="130px" mt={"10"}>
      <Heading>Projects</Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "2" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom={"50px"}
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
    title: "Basspro Clone",
    desc: "Bass Pro Shops is the largest trusted source for quality fishing, hunting, boating and outdoor sporting goods.",
    techStack: ["HTML", "CSS", "JavaScript","React","Redux","Chakra-UI"],
    github: "https://github.com/Harshitakatara34/auspicious-sea-8816",
    deploy: "https://tackle-and-trail.netlify.app/",
  },
  {
    image:`${img2}`,
    desc: "Jewel Lane is a clone of an e-commerce website Caratlane which sells the best gold & diamond jewellery.",
    techStack: ["HTML", "CSS", "JavaScript","React","Redux","Chakra-UI","Node.js","Express.js","Mongoose"],
    github: "https://github.com/Harshitakatara34/pointless-belief-3937",
    deploy: "https://jewellane.vercel.app/",
  },
  {
    image:`${img3}`,
    desc: "It is a clone of e-commerce website expedia where user can book hotels.",
    title: "Expedia Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/ragged-tank-492.git",
    deploy: "https://golden-sorbet-745819.netlify.app/",
  },
  {
    image:`${img4}`,
    title: "Liscious Clone",
    desc: "It is an e-commerce website where users can place orders for Poultry and Fish items.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/defective-impulse-1904.git",
    deploy: "https://superb-haupia-a7c7f2.netlify.app/",
  },

  ];

export default Projects;
