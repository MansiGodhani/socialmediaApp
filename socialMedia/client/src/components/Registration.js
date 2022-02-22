import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const navigate = useNavigate();

  const user = {
    username:"",
    password:""
  }

  const onRegister = () => {
      axios.post('/api/registration',user)
      .then((res)=>
      {
      alert(res.data.msg)
      navigate('/')
      })
  }

  return (
  <>
      <h2> Registration </h2>
      <input type='text'
        placeholder='Enter Username'
        onChange={(e) => (user.username = e.target.value)}
        /><br />

        <input type='text'
        placeholder='Enter Pssword'
        onChange={(e) => (user.password = e.target.value)}
        /><br />

        <button onClick={onRegister}>Registration</button><br />
  </>
  )
};

export default Registration;
