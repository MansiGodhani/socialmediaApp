import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useState , useEffect} from 'react';

const Home = ({setUser}) => {
  const navigate = useNavigate();
  const [posts,setPosts] =  useState([]);

  const samplePost = [
    {
      id:1,
      image:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a...",
      name:"samplepost1",
      caption:"sdsd"
    },
    {
      id:2,
      image:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a...",
      name:"samplepost2",
      caption:"sdkn"
    },
    {
      id:3,
      image:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a...",
      name:"samplepost3",
      caption:"sdsd"
    }
]
  const getdata = () => {
    axios.get("/api/listpost")
    .then(res => {
      console.log(res.data)
      setPosts(res.data.post)
    })
  }

  useEffect(()=>{
      getdata()
  },[])

 
  const onDeletepost = (id) => {
    axios.post('/api/deletepost',{id})
    .then(res => {
        if(res.status===200)
        {
          alert(res.data.msg)
          getdata()
        }

    })
  }


  return(
  <>
  <div>   Home page</div>
  <button onClick={()=> navigate('/addpost')}>Addpost</button>
  <button onClick={()=> setUser({})} className='btn btn-danger'>Logout</button>
  <div className='row'>
    <table className='col-6 mx-auto'>
    <tbody>
       <h1>Sample Post</h1>
       {samplePost.map((post,index) => (
        <tr key={post.id}>
          <td> <img src={post.image} alt='post' width="75px" height="75px"  className='rounded'  /> </td>
          <td> <h3>{post.name}</h3></td>
           <td>{post.caption}</td>  
      </tr>
       ))}
      
      </tbody>
     <tbody>
       <h1>Your Post</h1>
       {posts.map((post,index) => (
        <tr key={post._id}>
          <td> <img src={post.image} alt='post' width="75px" height="75px"  className='rounded'  /> </td>
          <td> <h3>{post.name}</h3></td>
           <td>{post.caption}</td>
           <td><button className='btn btn-warning' onClick={()=>navigate('/editpost', {state:{post}})}>Edit</button></td>
           <td><button className='btn btn-danger' onClick={()=> onDeletepost(post._id)}>Delete</button></td>

      </tr>
       ))}
      
      </tbody>
    </table>
  </div>
  </>
  );
};

export default Home;
