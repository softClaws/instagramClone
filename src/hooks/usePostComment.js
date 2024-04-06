import { useState } from 'react'
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import usePostStore from '../store/postStore';

const usePostComment = () => {
const [isCommenting, setIsCommenting] = useState(false);
const showToast = useShowToast();
const authUser = useAuthStore(state => state.user);
const addComment =usePostStore(state => state.addComment)

const handleComment = async(postId, comment) =>{
    if(isCommenting)return;
    if(!authUser)return showToast("Error", "Sorry! You've to login to comment", "error")
    setIsCommenting(true);
const newComment = {
    comment: comment,
    createdAt: Date.now(),
    createdBy: authUser.uid,
    postId: postId
}
    try {
        await updateDoc(doc(firestore, "posts", postId), {comments: arrayUnion(newComment)})
        addComment(postId, newComment)
    } catch (error) {
        showToast("Error", error.message, "error")
        
    }finally{
        setIsCommenting(false)
    }
}
return {isCommenting, handleComment}
}

export default usePostComment