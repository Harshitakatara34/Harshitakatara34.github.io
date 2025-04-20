import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Stats from './Components/Stats';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import AnimatedBackgroundWrapper from './Components/AnimatedBackground';
import {Box} from "@chakra-ui/react"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExperienceTimeline from './Components/Experience';
function App() {
 

  return (
    // <AnimatedBackgroundWrapper>
    <div style={{marginTop:'0px'}} >
    {/* // In your Navbar component */}
{/* <AnimatedBackgroundWrapper> */}
  {/* <Box
    as="header"
    px={4}
    position="fixed"
    w="100%"
    zIndex={"1000"}
    top={"0px"}
  > */}
      <Navbar id="nav-menu"/>
  {/* </Box> */}
{/* </AnimatedBackgroundWrapper> */}

<Home id="home"/>
<About id="about" class="about-section"/>
<Skills id="skills"/>
<ExperienceTimeline/>
<Projects id="projects"/>
<Stats/>
<Contact id="contact"/>
   
    </div>
    // </AnimatedBackgroundWrapper>
  );
}

export default App;
