import { Container, VStack, Flex, SkeletonCircle, Skeleton, Text, Box } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import useGetFeedPosts from "../../hooks/useGetFeedPost";

const FeedPosts = () => {
  
	const { isLoading, posts } = useGetFeedPosts();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() =>{
  //   setTimeout(() =>{
  //     setIsLoading(false)
  //   }, 2000)
  // }, [])
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0,1,4].map((_, idx) =>(
        <VStack key={idx}
        gap={4}
        mb={10}
        alignItems={"flex-start"}>
            <Flex gap ="2">
              <SkeletonCircle size = '10'/>
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height = {'10px'} w ={"200px"}/>
                <Skeleton height = {'10px'} w ={"200px"}/>
              </VStack>
            </Flex>
            
            <Skeleton w ={"full"}>
              <Box h = {"500px"}> contents wrapped</Box>
            </Skeleton>
        </VStack>
      ))}
        {!isLoading && posts.length > 0 && posts.map((post, id) => <FeedPost key={id} post={post} />)}
			{!isLoading && posts.length === 0 && (
				<>
					<Text justifyContent={"center"} my={10} alignItems ={"Center"} fontSize={"md"} color={"red.300"}>
						Eh woo!!  &#128582; &#128582;. Looks like you don&apos;t have any friends. &#128557; &#128557;
					</Text>
					<Text color={"red.100"}> &#128107; Check Suggested User or go to Search to make some &#129330;!!</Text>
				</>
          ) 
        }
    </Container>
  )
}

export default FeedPosts