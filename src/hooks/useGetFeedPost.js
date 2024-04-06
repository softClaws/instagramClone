import {useEffect, useState} from 'react'
import usePostStore from '../store/postStore';
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import useAuthStore from '../store/authStore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useGetFeedPosts = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { posts, setPost } = usePostStore();
	const authUser = useAuthStore((state) => state.user);
	const showToast = useShowToast();
	const { setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getFeedPosts = async () => {
			setIsLoading(true);
			if (authUser.following.length === 0) {
				setIsLoading(false);
				setPost([]);
				return;
			}
			const q = query(collection(firestore, "posts"), where("createdBy", "in", authUser.following));
			try {
				const querySnapshot = await getDocs(q);
				const feedPosts = [];

				querySnapshot.forEach((doc) => {
					feedPosts.push({ id: doc.id, ...doc.data() });
				});

				feedPosts.sort((a, b) => b.createdAt - a.createdAt);
				setPost(feedPosts);
			} catch (error) {
				showToast("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		if (authUser) getFeedPosts();
	}, [authUser, showToast, setPost, setUserProfile]);

	return { isLoading, posts };
};

export default useGetFeedPosts

// const useGetFeedPost = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const {posts, setPosts} = usePostStore();
//   const authUser = useAuthStore(state => state.user);
//   const showToast = useShowToast();
//   const {setUserProfile} = useUserProfileStore();
//   useEffect(() => {
//     const getFeedPost = async () =>{
//         isLoading(true);
//         if(authUser.following.length == 0){
//             setIsLoading(false);
//             setPosts([])
//             return
//         }
//         const q = query(collection(firestore, "posts"), where("createdBy", "in", authUser.following))
//         try {
//             const querySnapShot = await getDocs(q);
//             const feedPost =[];
//             querySnapShot.forEach(doc =>{
//                 feedPost.push({id: doc.id, ...doc.data()})
//             })
//             feedPost.sort((a,b) => b.createdAt - a.createdAt)
//             setPosts(feedPost);
            
//         } catch (error) {
//             showToast("Error", error.message, "error")
//         }finally{
//             setIsLoading(false)
//         }
//     }
//     if(authUser) getFeedPost()
//   }, [authUser, showToast, setPosts, setUserProfile]);
// return {isLoading, posts}
// }