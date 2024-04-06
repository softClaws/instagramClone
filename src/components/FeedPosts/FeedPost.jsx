import FeedPostFooter from "./FeedPostFooter"
import FeedPostHeader from "./FeedPostHeader"
import { Box, Image } from "@chakra-ui/react"
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({post}) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return <>

    <FeedPostHeader post ={post} creatorProfile = {userProfile}/>
    <Box my={2}
    borderRadius={5}
    overflow={"hidden"}
    >
    <Image src={post.imageURL} alt={"feed post image"}/>
    </Box>

    <FeedPostFooter post={post} creatorProfile = {userProfile} />
    </>
}

export default FeedPost