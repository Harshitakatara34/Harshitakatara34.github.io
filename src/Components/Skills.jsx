import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Center m="auto" pt={100} w="90%" id="skills" flexDirection="column">
        <Heading>Tech Stack And Developer Tools</Heading>
        <Flex
          justifyContent={"space-around"}
          direction={{ base: "column", lg: "row" }}
          marginTop={"85px"}
          gap="3rem"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box
              w={{ base: "100%", lg: "100%" }}
              borderRadius={"12px"}
              p="12px"
              boxShadow={"rgba(255, 255, 255, 0.35) 10px 5px 15px;"}
            >
              {/* here */}
              <Text fontSize={"23px"}>Tech Stack</Text>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(4, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(4, 1fr)",
                  xl: "repeat(5, 1fr)",
                }}
              >
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <Image
                    className="skills-card-img"
                    src={"https://img.icons8.com/color/1x/html-5.png"}
                  ></Image>
                  <Text className="skills-card-name">HTML</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <Image
                    className="skills-card-img"
                    src={"https://img.icons8.com/color/1x/css3.png"}
                  ></Image>
                  <Text className="skills-card-name">CSS</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <Image
                    className="skills-card-img"
                    src={"https://img.icons8.com/color/1x/javascript.png"}
                  ></Image>
                  <Text className="skills-card-name">JavaScript</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <Image
                    className="skills-card-img"
                    src={"https://img.icons8.com/color/1x/react-native.png"}
                  ></Image>
                  <Text className="skills-card-name">React</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <Image
                    className="skills-card-img"
                    src={"https://img.icons8.com/color/1x/redux.png"}
                  ></Image>
                  <Text className="skills-card-name">Redux</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 128 128"><path fill="#439934" fill-rule="evenodd" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296c.472 6.095.256 12.147-1.029 18.142c-.035.165-.109.32-.164.48c-.403.001-.814-.049-1.208.012c-3.329.523-6.655 1.065-9.981 1.604c-3.438.557-6.881 1.092-10.313 1.687c-1.216.21-2.721-.041-3.212 1.641c-.014.046-.154.054-.235.08l.166-10.051l-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281c3.129-.497 6.261-.98 9.392-1.465c1.381-.215 2.764-.412 4.148-.618" clip-rule="evenodd" /><path fill="#45a538" fill-rule="evenodd" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37c-8.717-8.222-15.093-17.899-18.233-29.566c-.865-3.211-1.442-6.474-1.627-9.792c-.13-2.322-.318-4.665-.154-6.975c.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702q2.638 7.77 5.242 15.551c5.458 16.3 10.909 32.604 16.376 48.9c.107.318.384.579.583.866z" clip-rule="evenodd" /><path fill="#46a037" fill-rule="evenodd" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616c-3.131.485-6.263.968-9.392 1.465c-2.622.417-5.242.852-7.862 1.281l-1.602.275l-.012-1.045c-.053-.859-.144-1.717-.154-2.576c-.069-5.478-.112-10.956-.18-16.434c-.042-3.429-.105-6.857-.175-10.285c-.043-2.13-.089-4.261-.185-6.388c-.052-1.143-.236-2.28-.311-3.423c-.042-.657.016-1.319.029-1.979c.817 1.583 1.616 3.178 2.456 4.749c1.327 2.484 3.441 4.314 5.344 6.311c7.523 7.892 12.864 17.068 16.193 27.433" clip-rule="evenodd" /><path fill="#409433" fill-rule="evenodd" d="M65.036 80.753c.081-.026.222-.034.235-.08c.491-1.682 1.996-1.431 3.212-1.641c3.432-.594 6.875-1.13 10.313-1.687c3.326-.539 6.652-1.081 9.981-1.604c.394-.062.805-.011 1.208-.012c-.622 2.22-1.112 4.488-1.901 6.647c-.896 2.449-1.98 4.839-3.131 7.182a49 49 0 0 1-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548c-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23l-1.214-1.038l-1.256-2.753a41.4 41.4 0 0 1-1.394-9.838l.023-.561l.171-2.426c.057-.828.133-1.655.168-2.485c.129-2.982.241-5.964.359-8.946" clip-rule="evenodd" /><path fill="#4faa41" fill-rule="evenodd" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947c-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913c-2.75-8.209-5.467-16.431-8.213-24.642a4499 4499 0 0 0-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6168 6168 0 0 1 6.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198c.116.349.308.671.491 1.062l.67-.78z" clip-rule="evenodd" /><path fill="#4aa73c" fill-rule="evenodd" d="M43.155 32.227c.21.274.511.516.617.826a4499 4499 0 0 1 6.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642c1.662 4.961 3.362 9.911 5.062 14.913l.765-.289l-.171 2.426l-.155.559c-.266 2.656-.49 5.318-.814 7.968c-.163 1.328-.509 2.632-.772 3.947c-.198-.287-.476-.548-.583-.866c-5.467-16.297-10.918-32.6-16.376-48.9a3889 3889 0 0 0-5.242-15.551c-.089-.263-.34-.469-.516-.702z" clip-rule="evenodd" /><path fill="#57ae47" fill-rule="evenodd" d="m65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062c-2.913-8.731-5.812-17.468-8.728-26.198a6168 6168 0 0 0-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769q2.52 7.382 5.003 14.778c1.547 4.604 3.071 9.215 4.636 13.813c.105.308.47.526.714.786l.012 1.045q.087 12.124.171 24.251" clip-rule="evenodd" /><path fill="#60b24f" fill-rule="evenodd" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786c-1.565-4.598-3.089-9.209-4.636-13.813q-2.483-7.395-5.003-14.778c-.099-.287-.371-.514-.562-.769c1.969-1.928 3.877-3.925 5.925-5.764c1.821-1.634 3.285-3.386 3.352-5.968c.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979c.075 1.143.259 2.28.311 3.423c.096 2.127.142 4.258.185 6.388c.069 3.428.132 6.856.175 10.285c.067 5.478.111 10.956.18 16.434c.008.861.098 1.718.152 2.577" clip-rule="evenodd" /><path fill="#a9aa88" fill-rule="evenodd" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947c.325-2.649.548-5.312.814-7.968l.066-.01l.066.011a41.4 41.4 0 0 0 1.394 9.838c-.176.232-.425.439-.518.701c-.727 2.05-1.412 4.116-2.143 6.166c-.1.28-.378.498-.574.744l-.747-2.566z" clip-rule="evenodd" /><path fill="#b6b598" fill-rule="evenodd" d="M62.476 112.621c.196-.246.475-.464.574-.744c.731-2.05 1.417-4.115 2.143-6.166c.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722z" clip-rule="evenodd" /><path fill="#c2c1a7" fill-rule="evenodd" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624c-.839 2.403-1.64 4.819-2.485 7.222c-.107.305-.404.544-.614.812q-.164-2.079-.331-4.158" clip-rule="evenodd" /><path fill="#cecdb7" fill-rule="evenodd" d="M63.503 120.763c.209-.269.506-.508.614-.812c.845-2.402 1.646-4.818 2.485-7.222c.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477c-.575 1.614-1.117 3.24-1.694 4.854c-.119.333-.347.627-.525.938c-.158-.207-.441-.407-.454-.623c-.051-.841-.016-1.688-.013-2.533" clip-rule="evenodd" /><path fill="#dbdac7" fill-rule="evenodd" d="M63.969 123.919c.178-.312.406-.606.525-.938c.578-1.613 1.119-3.239 1.694-4.854c.065-.183.263-.319.398-.477l.012 3.64l-1.218 3.124z" clip-rule="evenodd" /><path fill="#ebe9dc" fill-rule="evenodd" d="m65.38 124.415l1.218-3.124l.251 3.696z" clip-rule="evenodd" /><path fill="#cecdb7" fill-rule="evenodd" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23z" clip-rule="evenodd" /><path fill="#4faa41" fill-rule="evenodd" d="m64.316 95.172l-.066-.011l-.066.01l.155-.559z" clip-rule="evenodd" /></svg>
                  <Text className="skills-card-name">MongoDb</Text>

                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="currentColor" d="M20.493 6.725c.256-.334.652-.53 1.073-.53h.34l-4.392 5.743L22 17.803h-.34a1.35 1.35 0 0 1-1.073-.53l-3.576-4.676l-3.577 4.676a1.35 1.35 0 0 1-1.072.53h-.34l4.485-5.865l-4.391-5.743h.34c.42 0 .817.196 1.072.53l3.482 4.554z" /><path fill="currentColor" fill-rule="evenodd" d="M5.563 17.146c1.924.702 3.936-.094 4.959-1.647c.2-.305.53-.498.896-.498h.255c-.94 2.437-3.72 3.856-6.363 2.905C3.287 17.178 2 15.179 2 13.029V10.8a5.01 5.01 0 0 1 5.486-4.981c2.593.243 4.521 2.523 4.521 5.127V12.6H2.801v.444c0 1.802 1.069 3.485 2.762 4.102m1.44-10.55a4.21 4.21 0 0 0-4.202 4.202V11.8h8.406v-1a4.21 4.21 0 0 0-4.203-4.204" clip-rule="evenodd" /></svg>
                  <Text className="skills-card-name" mb="0">Express js</Text>

                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24"><path fill="currentColor" d="M17.664 17.65L10.26 8H8v8h2v-5.054l6.087 7.933a8 8 0 1 1 1.578-1.23M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2-10V8h2v4z" /></svg>
                  <Text className="skills-card-name">Next Js</Text>

                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 289"><path fill="#539e43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571" /></svg>
                  <Text className="skills-card-name">Node js</Text>
                </Flex>

                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32"><path fill="#007acc" d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z" /></svg>
                  <Text className="skills-card-name">TypeScript</Text>
                </Flex>
              </Grid>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box

              w={{ base: "100%", lg: "100%" }}
              mt={{ base: "20px", lg: "0px" }}
              borderRadius={"12px"}
              p="12px"
              boxShadow={"rgba(255, 255, 255, 0.35) 10px 5px 15px;"}
            >
              {/* here */}
              <Text fontSize={"23px"}>Developer Tools</Text>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(4, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(4, 1fr)",
                  xl: "repeat(5, 1fr)",
                }}
              >
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 9v6M3 15V9m9 12v-6m0-12v6m0 6L3 9l9-6l9 6z" /><path d="m12 21l-9-6l9-6l9 6z" /></g></svg>
                  <Text className="skills-card-name">CodePen</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 128 128"><path fill="#f34f29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501" /></svg>
                  <Text className="skills-card-name">Git</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="#0288d1" d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16" /></svg>
                  <Text className="skills-card-name">Docker</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32"><path fill="#2196f3" d="M24.003 2L12 13.303L4.84 8L2 10l6.772 6L2 22l2.84 2L12 18.702L24.003 30L30 27.087V4.913ZM24 9.434v13.132L15.289 16Z" /></svg>
                  <Text className="skills-card-name">VS Code</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#ff6c37" rx="60" /><path fill="#eee" d="m169.061 88.612l-50.54 50.541l-14.253-14.252c49.703-49.702 54.614-45.39 64.793-36.289" /><path fill="#ff6c37" d="M118.521 140.35c-.36 0-.599-.119-.839-.359l-14.372-14.252a1.157 1.157 0 0 1 0-1.676c50.541-50.542 55.81-45.751 66.47-36.17c.24.24.359.48.359.839c0 .36-.119.599-.359.837l-50.541 50.422c-.119.24-.479.359-.718.359m-12.576-15.449l12.576 12.575l48.744-48.744c-8.862-7.905-14.851-10.3-61.32 36.169" /><path fill="#eee" d="m133.012 153.645l-13.773-13.773l50.541-50.54c13.534 13.652-6.707 35.809-36.768 64.313" /><path fill="#ff6c37" d="M133.012 154.843c-.36 0-.598-.12-.838-.36l-13.773-13.773c-.24-.239-.24-.479-.24-.838c0-.36.12-.599.36-.839l50.54-50.54a1.16 1.16 0 0 1 1.677 0a14.58 14.58 0 0 1 4.671 11.138c-.239 13.293-15.33 30.18-41.439 54.852c-.359.24-.719.36-.958.36m-12.096-14.971c7.664 7.784 10.899 10.899 12.096 12.096c20.121-19.162 39.642-38.804 39.762-52.337c.12-3.114-1.077-6.228-3.114-8.624z" /><path fill="#eee" d="m104.508 125.26l10.18 10.18q.359.36 0 .719c-.12.12-.12.12-.239.12l-21.08 4.551c-1.077.12-2.035-.599-2.275-1.677c-.12-.599.12-1.197.48-1.557l12.215-12.216c.24-.24.599-.36.719-.12" /><path fill="#ff6c37" d="M93.01 142.028c-1.796 0-3.114-1.438-3.114-3.235c0-.837.36-1.676.959-2.275l12.215-12.216c.719-.599 1.678-.599 2.396 0l10.18 10.18c.718.599.718 1.677 0 2.395c-.24.24-.479.36-.839.48l-21.078 4.551c-.24 0-.48.12-.719.12m11.139-15.451l-11.737 11.737c-.24.24-.36.599-.12.958c.12.36.478.48.838.36l19.761-4.312z" /><path fill="#eee" d="M195.769 60.588c-7.665-7.425-20.001-7.186-27.427.599c-7.425 7.784-7.185 20 .599 27.426a19.35 19.35 0 0 0 23.475 2.635l-13.654-13.654z" /><path fill="#ff6c37" d="M182.355 95.2c-11.377 0-20.599-9.222-20.599-20.6S170.978 54 182.355 54c5.27 0 10.42 2.036 14.252 5.749c.24.24.36.48.36.838c0 .36-.12.6-.36.839l-16.168 16.168l12.695 12.695c.48.48.48 1.198 0 1.677l-.239.24c-3.114 1.915-6.827 2.994-10.54 2.994m0-38.684c-10.06 0-18.204 8.143-18.084 18.204c0 10.06 8.143 18.204 18.204 18.085c2.755 0 5.509-.6 8.024-1.917l-12.575-12.455c-.24-.24-.359-.48-.359-.839c0-.36.119-.599.359-.838l16.049-16.049c-3.234-2.754-7.306-4.191-11.618-4.191" /><path fill="#eee" d="m196.128 60.947l-.239-.24l-17.127 16.887l13.534 13.534c1.318-.839 2.634-1.796 3.713-2.874a19.195 19.195 0 0 0 .119-27.307" /><path fill="#ff6c37" d="M192.416 92.445c-.36 0-.599-.12-.839-.36l-13.653-13.653c-.24-.24-.359-.479-.359-.838c0-.36.119-.6.359-.839L194.93 59.75c.48-.48 1.198-.48 1.677 0l.36.24c8.024 8.023 8.024 20.958.12 29.103c-1.198 1.197-2.516 2.275-3.953 3.113c-.359.12-.598.24-.718.24m-11.977-14.851l12.097 12.096c.958-.598 1.916-1.437 2.634-2.156c6.827-6.827 7.186-17.964.599-25.15z" /><path fill="#eee" d="M171.098 90.767a7.374 7.374 0 0 0-10.42 0l-45.152 45.152l7.546 7.545l47.786-41.917c3.114-2.636 3.353-7.307.719-10.42c-.24-.12-.36-.24-.479-.36" /><path fill="#ff6c37" d="M122.952 144.662c-.359 0-.599-.12-.839-.359l-7.545-7.545a1.16 1.16 0 0 1 0-1.677l45.151-45.152a8.53 8.53 0 0 1 12.097 0a8.53 8.53 0 0 1 0 12.097l-.359.359l-47.787 41.918q-.179.359-.718.359m-5.749-8.743l5.869 5.869l46.948-41.2c2.634-2.156 2.874-6.108.718-8.742s-6.108-2.874-8.743-.72c-.119.12-.239.24-.479.36z" /><path fill="#eee" d="M80.914 187.3c-.48.239-.719.718-.6 1.197l2.037 8.624c.48 1.197-.24 2.635-1.557 2.994c-.958.359-2.035 0-2.634-.718l-13.175-13.055l42.996-42.996l14.851.239l10.06 10.061c-2.395 2.036-16.887 16.048-51.978 33.654" /><path fill="#ff6c37" d="M79.956 201.311c-.958 0-1.916-.359-2.515-1.077l-13.055-13.055c-.24-.239-.359-.479-.359-.838s.12-.599.36-.839l42.995-42.995c.24-.24.599-.36.839-.36l14.851.24c.359 0 .598.12.837.359l10.061 10.06c.24.24.359.599.359.958c0 .36-.119.599-.479.839l-.838.719c-12.695 11.137-29.942 22.276-51.38 32.935l2.037 8.503c.359 1.557-.36 3.234-1.797 4.072c-.719.359-1.317.479-1.916.479m-13.175-14.97l12.337 12.216c.358.599 1.077.838 1.676.479s.839-1.078.48-1.677l-2.036-8.623c-.24-1.078.238-2.036 1.197-2.515c21.198-10.659 38.325-21.677 50.9-32.576l-8.862-8.863l-13.773-.24z" /><path fill="#eee" d="m54.805 196.641l10.3-10.3l15.33 15.33l-24.432-1.676c-1.078-.12-1.797-1.078-1.677-2.157c0-.479.12-.958.48-1.197" /><path fill="#ff6c37" d="m80.435 202.749l-24.552-1.677c-1.797-.12-2.995-1.676-2.875-3.473c.12-.719.36-1.437.959-1.916l10.3-10.3a1.157 1.157 0 0 1 1.676 0l15.33 15.33c.36.359.48.838.24 1.318q-.36.718-1.078.718m-15.33-14.731l-9.461 9.461c-.36.24-.36.839 0 1.078c.12.12.24.24.479.24l21.198 1.437zm38.684-39.163c-.719 0-1.198-.599-1.198-1.198c0-.359.12-.598.36-.838l11.617-11.617a1.157 1.157 0 0 1 1.677 0l7.545 7.545c.359.359.479.718.359 1.198c-.12.359-.479.718-.957.838l-19.163 4.072zm11.617-11.138l-7.904 7.905l12.934-2.756z" /><path fill="#eee" d="m122.832 143.584l-13.174 2.875c-.958.24-1.917-.359-2.156-1.317c-.12-.599 0-1.198.479-1.677l7.305-7.306z" /><path fill="#ff6c37" d="M109.418 147.657a2.964 2.964 0 0 1-2.994-2.994c0-.838.359-1.557.838-2.155l7.306-7.306a1.157 1.157 0 0 1 1.677 0l7.545 7.545c.359.359.479.718.359 1.198c-.12.359-.479.718-.957.838l-13.175 2.874zm5.988-9.94l-6.467 6.467c-.239.24-.239.479-.12.719q.18.359.719.359l11.018-2.396zm80.842-65.274c-.239-.718-1.078-1.077-1.797-.837c-.718.238-1.077 1.077-.837 1.796c0 .12.119.24.119.359c.718 1.438.48 3.234-.479 4.551c-.479.6-.359 1.438.12 1.917c.599.478 1.437.36 1.916-.24c1.797-2.276 2.156-5.15.958-7.546" /></g></svg>
                  <Text className="skills-card-name">Postman</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 384"><path fill="#0acf83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" /><path fill="#a259ff" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" /><path fill="#f24e1e" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" /><path fill="#ff7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" /><path fill="#1abcfe" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" /></svg>
                  <Text className="skills-card-name">Figma</Text>
                </Flex>

                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 128 128"><path fill="#f60" d="M119.517 51.188H79.291a3.64 3.64 0 0 1-3.64-3.642V5.62A5.605 5.605 0 0 0 70.028 0H55.66a5.606 5.606 0 0 0-5.627 5.62v41.646a3.913 3.913 0 0 1-3.92 3.925l-13.188.047c-2.176 0-3.972-1.75-3.926-3.926l.094-41.687A5.606 5.606 0 0 0 23.467 0H9.1a5.61 5.61 0 0 0-5.626 5.625V122.99c0 2.737 2.22 5.01 5.01 5.01h111.033a5.014 5.014 0 0 0 5.008-5.011V56.195a4.975 4.975 0 0 0-5.008-5.007M100.66 95.242a6.545 6.545 0 0 1-6.525 6.524H82.791a6.545 6.545 0 0 1-6.523-6.524V83.9a6.545 6.545 0 0 1 6.523-6.524h11.343a6.545 6.545 0 0 1 6.525 6.523zm0 0" /></svg>
                  <Text className="skills-card-name">Rabbitmq</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z" /></g></svg>
                  <Text className="skills-card-name">Github</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 222"><path d="m128 0l128 221.705H0z" /></svg>
                  <Text className="skills-card-name">Vercel</Text>
                </Flex>
                <Flex
                  className="skills-card"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  textAlign={"center"}
                  m="20px"
                  border="1px solid white"
                  borderRadius={"8px"}
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  w="90px"
                  h="90px"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="currentColor" d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082c-.018.138-.045.272-.067.405c-.696 3.703-3.936 6.507-7.827 6.507a7.9 7.9 0 0 1-3.825-.979a.202.202 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244c-.12-3.084-2.61-5.603-5.682-5.75" /></svg>
                  <Text className="skills-card-name">Render</Text>
                </Flex>
              </Grid>
            </Box>
          </motion.div>
        </Flex>
      </Center>
    </motion.div>
  );
}
