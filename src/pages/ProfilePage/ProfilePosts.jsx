import useGetUserPost from '../../hooks/useGetUserPosts'
import ProfilePost from './ProfilePost'
import { Grid, Skeleton, VStack, Box, Flex, Text } from '@chakra-ui/react'
// import { useState } from 'react'
// import { useEffect } from 'react'

const ProfilePosts = () => {
    // const [isLoading, setLoading] = useState(true)
    // useEffect(() =>{
    //     setTimeout(() =>{
    //         setLoading(false)
    //     }, 2000)
    // }, [])
    const {isLoading, posts} =useGetUserPost()
    const noPostFound = !isLoading &&posts.length ==0;

    if(noPostFound) return <NoPostFound/>
  return (
    <Grid
    templateColumns={{
        sm:"repeat(1, 1fr)",
        md: "repeat(3, 1fr)"
    }}
    gap={1}
    columnGap={1}
    >
        {
            isLoading && [0,1,2,].map((_, idx) =>(
                <VStack key ={idx}>
                <Skeleton w="full"
                alignItems={"flex-start"}
                gap={4}
                >
                    <Box h="300px" >
                        Content Wrapped
                    </Box> 
                </Skeleton>

                </VStack>
            ))
        }
        {
            !isLoading && <>
            {posts.map(post =>(
                <ProfilePost post ={post} key ={post.id}/>
            ))}
            </>
        }
    </Grid>
  )
}

export default ProfilePosts
const NoPostFound =()=>{
    return(
        <Flex flexDir={'column'} textAlign={"center"} mx={"auto"} mt={10}>
            <Text fontSize={"2xl"}> Ops!! No Post yet &#9971;</Text>
        </Flex>
    )
}