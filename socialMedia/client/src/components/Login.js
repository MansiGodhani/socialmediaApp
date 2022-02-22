import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {

  const navigate = useNavigate(); 

  const user = {
    username:"",
    password:""
  }

  const onLogin = () => {
    axios.post('/api/login',user)
    .then(res => {
      alert(res.data.msg)
      console.log(res.data.user)
      setUser(res.data.user)
      navigate('/')
    })

  }

  return (
    <>
      <h2>Login Page </h2>
        <input type='text'
        placeholder='Enter Username'
        onChange={(e) => (user.username = e.target.value)}
        /><br />

        <input type='text'
        placeholder='Enter Pssword'
        onChange={(e) => (user.password = e.target.value)}
        /><br />

        <button onClick={onLogin}>Login</button><br />
        or <br />
        <button onClick={() => navigate('/register')}>Registration</button>

  </>
  );
};

export default Login;
