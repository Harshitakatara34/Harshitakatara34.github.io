import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png"
import img2 from "../Image/img2.png"
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
        columns={{ base: "1", md: "2", xl: "3" }}
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
    title: "Liscious Clone",
    desc: "It is an e-commerce website for ordering chicken or non-veg food",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/defective-impulse-1904.git",
    deploy: "https://superb-haupia-a7c7f2.netlify.app/",
  },
  {
    image:`${img2}`,
    desc: "It is a hotel booking website for vacations",
    title: "Expedia Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/ragged-tank-492.git",
    deploy: "https://golden-sorbet-745819.netlify.app/",
  },
  {
    image:`${img1}`,
    title: "Liscious Clone",
    desc: "It is an e-commerce website for ordering chicken or non-veg food",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/defective-impulse-1904.git",
    deploy: "https://superb-haupia-a7c7f2.netlify.app/",
  },
  {
    image:`${img2}`,
    desc: "It is a hotel booking website for vacations",
    title: "Expedia Clone",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harshitakatara34/ragged-tank-492.git",
    deploy: "https://golden-sorbet-745819.netlify.app/",
  },
  ];

export default Projects;
