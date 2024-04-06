
import { Flex, Avatar, Text, Button } from "@chakra-ui/react"
import useLogout from "../../hooks/useLogout"
import useAuthStore from "../../store/authStore"
import { Link } from "react-router-dom"

const SuggestedHeader = () => {
  const  {handleLogout, isLoggingOut} = useLogout()
  const authUser = useAuthStore((state) => state.user)
  if (!authUser) return null;
  
  return (
    <>
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        {/* right hand side */}
        <Flex alignItems={"center"} gap={2}>
          <Link to ={`${authUser.username}`}>
            <Avatar size={"lg"} src={authUser.profilePicURL}/>
          
          </Link>

            <Link to ={`${authUser.username}`}>
            <Text fontSize={12} fontWeight={"bold"}>
                {authUser.username}
            </Text>
          </Link>
            
        </Flex>
        <Button
        size={"xs"}
        background={"transparent"}
        _hover={{background: "transparent"}}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        isLoading ={isLoggingOut}
        onClick={handleLogout}
        cursor={"pointer"}
        >
            Log out
        </Button>
    </Flex>
    </>
  )
}

export default SuggestedHeader