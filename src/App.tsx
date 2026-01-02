import { Box, Center } from "@chakra-ui/react"
import NavBar from "./Components/NavBar"

const App = () => {
  return (
    <Box h="100vh" overflow="hidden">
      <Box>
        <NavBar/>
      </Box>

      <Box
        h="calc(100vh - 60px)"
        overflowY="auto"
        scrollSnapType="y mandatory"
      >
        <Box h="100vh" scrollSnapAlign="start" bg="green">
          <Center>Hero</Center>
        </Box>
        <Box h="100vh" scrollSnapAlign="start" bg="yellow">
          Projects
        </Box>
        <Box h="100vh" scrollSnapAlign="start" bg="red">
          Skills
        </Box>
        <Box h="100vh" scrollSnapAlign="start" bg="blue">
          Experience
        </Box>
        <Box h="100vh" scrollSnapAlign="start" bg="pink">
          Contact
        </Box>
      </Box>
    </Box>
  )
}

export default App
