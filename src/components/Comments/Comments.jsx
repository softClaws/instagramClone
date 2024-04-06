import { Flex,Skeleton, SkeletonCircle,Avatar, Text } from "@chakra-ui/react"
import useGetUserProfileById from "../../hooks/useGetUserProfileById"
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";

const Comments = ({comment}) => {
  const {isLoading, userProfile} =useGetUserProfileById(comment.createdBy);
  if(isLoading) return <CommentSkeleton/>
  return (
    <Flex gap={4} alignItems={"top"} justifyContent={"center"}>
      <Link to={`/${userProfile.username}`}> 
        <Avatar src = {userProfile.profilePicURL} size={"sm"}/>
      </Link>
        <Flex direction={"column"}>
            <Flex gap={2} alignItems={"top"}>

            <Link to={`/${userProfile.username}`}> 
                <Text fontWeight ={"bold"} fontSize ={12}>
                  {userProfile.username}
                </Text>
                </Link>

                <Text  fontSize ={12} justifyContent={"center"} alignItems={"center"}>{comment.comment}</Text>
            </Flex>
                <Text color ={"gray"} fontSize ={10} alignItems={"left"}>
                  {timeAgo(comment.createdAt)}
                </Text>

        </Flex>
    </Flex>
  )
}

export default Comments;

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};