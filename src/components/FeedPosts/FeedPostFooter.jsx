import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants"
import usePostComment from "../../hooks/usePostComment"
import useAuthStore from "../../store/authStore"
import useLikePost from "../../hooks/useLikePost"
import { timeAgo } from "../../utils/timeAgo"
import CommentsModal from "../Modals/CommentModal"
const FeedPostFooter = ({post, isProfilePage, creatorProfile}) => {
    const {isCommenting, handleComment} =usePostComment();
    const [comment, setComment] = useState('');
    const authUser = useAuthStore(state => state.user);
    const commentRef = useRef(null);
    const { handleLikePost,isLiked, likes} =useLikePost(post);
    const {isOpen,onOpen, onClose} = useDisclosure()

    const handleSubmitComment = async()=>{
        await handleComment(post.id, comment)
        setComment('')
    }


  return ( 
  <>
  <Box mb={10} marginTop={"auto"}>
    <Flex
    alignItems={"center"}
    gap={4}
    w={"full"}
    pt={1}
    mb={2}
    my={3}
    >
        <Box onClick ={handleLikePost} fontSize={18} cursor={"pointer"}>
            {!isLiked ? <NotificationsLogo/> : <UnlikeLogo/>}</Box>
        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}> <CommentLogo/></Box>

    </Flex>
    <Text fontWeight={600} fontSize={"sm"}> 
        {likes} likes
    </Text>

    {isProfilePage && (
				<Text fontSize='12' color={"gray"}>
					Posted {timeAgo(post.createdAt)}
				</Text>
			)}

    {!isProfilePage && (
        <>
            <Text fontWeight={700} fontSize={"sm"}> 
            {creatorProfile?.username}{" "}
            <Text as='span' fontWeight={400}> 
                {post.caption}
            </Text>
            </Text>
            {post.comments.length > 0 && (
                <Text color={"gray"} fontSize={"sm"} cursor={"pointer"} onClick={onOpen}> 
                View all {post.comments.length} comments
            </Text>
            )}
            {/* comment modal only in the home page */}
            {
            isOpen? <CommentsModal isOpen = {isOpen} onClose={onClose} post ={post}/> : null
            }
        </>
    )}
   {authUser && (
        <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w = {"full"}
        >
            <InputGroup mb={7}>
            <Input variant = {"flushed"} placeholder = {"Add a comment..."}fontSize={14}
            onChange={(e) =>setComment(e.target.value)}
            value={comment}
            ref={commentRef}
            />
            <InputRightElement>
                <Button
                fontSize={14} color={"blue.500"} fontWeight={600} cursor={"pointer"} _hover={{color: "white"}} bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading ={isCommenting} 
                >
                    Post
                </Button>
            </InputRightElement>
            </InputGroup>
    
        </Flex>
        
    )}

  </Box>

  </>
)
}
export default FeedPostFooter