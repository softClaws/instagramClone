
import { Container, Flex, Box } from "@chakra-ui/react"
import FeedPosts from '../../components/FeedPosts/FeedPosts'
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers"
const HomePge = () => {
  return (
  <>
    <Container maxW = {"container.lg"}>
      <Flex gap={10}>
        <Box flex={2} py={10}>
          <FeedPosts/>
        </Box>
        <Box flex={3} mr={20} py={10}
        display={{base: "none", lg: "block"}}
        maxW={"300px"}
        
        >
          
            <SuggestedUsers/>
        </Box>
      </Flex>

    </Container>

  
  </>
  )
}

export default HomePge