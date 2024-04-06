import  { useState } from 'react'
import usePostStore from '../store/postStore';
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import { useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';


const useGetUserPost = () => {
  const [isLoading, setIsLoading] = useState('true');
  const {posts, setPost} = usePostStore()
  const showToast = useShowToast()
  const userProfile = useUserProfileStore(state => state.userProfile);
 useEffect(()=>{
    const getPosts = async ()=>{
        if(!userProfile)return
        setIsLoading(true)
        setPost([])
        try {
          const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.uid));
          const querySnapshot = await getDocs(q)

          const posts = []
          querySnapshot.forEach(doc =>(
            posts.push({...doc.data(), id: doc.id})
          ))
          posts.sort((a,b) => b.createdAt - a.createdAt )
          setPost(posts)
          
        } catch (error) {
          showToast("Error", error.message, "error")
          setPost([])
          
        }finally{
          setIsLoading(false)
        }
    }
    getPosts();
 },[setPost, userProfile, showToast])

 return {isLoading, posts}
  
}

export default useGetUserPost