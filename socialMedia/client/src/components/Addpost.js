import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Addpost() {
    const navigate = useNavigate();

    const addPost = {
        image:"",
        name:"",
        caption:""
    }

    const onAddPost = () => {
        axios.post('/api/addpost',addPost)
        .then(res => {
            alert(res.data.msg)
            if(res.status===200){
                navigate('/')
            }
        })
    }


  return (
    <div>
       <input type="text" placeholder='enter Post Name'  onChange={(e)=> addPost.name = e.target.value} />
       <input type="text" placeholder='enter image ' onChange={(e) => addPost.image = e.target.value} />
       <input type='text' placeholder='enter caption' onChange={(e) => addPost.caption=e.target.value} />
       <button onClick={onAddPost}>add Post</button>
 
    </div>
    );
}

export default Addpost;
