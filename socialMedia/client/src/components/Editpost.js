import React from 'react';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'
import { useState } from 'react';
const  EditPost = ()=> {
    const navigate = useNavigate();
    const {state}=useLocation();
    const [post,setPost]=useState(state.post)
  

    const onUpdatePost = () => {
        axios.post('/api/updatepost',post)
        .then(res => {
            alert(res.data.msg)
            if(res.status===200){
                navigate('/')
            }
        })
    }


  return (
    <div>
       <input type="text" placeholder='enter Post Name'   value={post.name} onChange={(e)=> setPost({...post,name:e.target.value}) } />
       <input type="text" placeholder='enter image ' value={post.image} onChange={(e) => setPost({...post,image:e.target.value})} />
       <input type='text' placeholder='enter caption'value={post.caption} onChange={(e) => setPost({...post,caption:e.target.value})} />
       <button onClick={onUpdatePost}>Update Post</button>
 
    </div>
    );
}

export default EditPost;
