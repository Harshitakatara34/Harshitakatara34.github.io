// Components/AnimatedBackgroundWrapper.js
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AnimatedBackgroundWrapper = ({ children }) => {
  const themeBg = useColorModeValue("#ffffff", "#171923"); // Target theme-based color
  const [bgColor, setBgColor] = useState(themeBg); // Background that's applied
  const [showOverlay, setShowOverlay] = useState(false); // Whether overlay is animating
  const [overlayColor, setOverlayColor] = useState(null); // Color of overlay

  useEffect(() => {
    if (themeBg !== bgColor) {
      // Set overlay color to target theme color
      setOverlayColor(themeBg);
      setShowOverlay(true);

      // After animation, update the background and remove overlay
      const timer = setTimeout(() => {
        setBgColor(themeBg);
        setShowOverlay(false);
      }, 1000); // Must match animation duration

      return () => clearTimeout(timer);
    }
  }, [themeBg]);

  return (
    <Box minH="100vh" position="relative" bg={bgColor} transition="background-color 0.5s ease" border="10px solid red">
      {/* Animated overlay */}
      {showOverlay && (
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg={overlayColor}
          zIndex={1}
          animation="wipeDiagonal 1s ease forwards"
          pointerEvents="none"
        />
      )}

      {/* Your page content */}
      <Box position="relative" zIndex={2} >
        {children}
      </Box>

      {/* Wipe animation */}
      <style>{`
        @keyframes wipeDiagonal {
          0% {
            clip-path: polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%);
          }
          100% {
            clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
          }
        }
      `}</style>
    </Box>
  );
};

export default AnimatedBackgroundWrapper;
