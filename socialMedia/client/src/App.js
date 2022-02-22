import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import {useState} from 'react';
import Addpost from './components/Addpost';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EditPost from './components/Editpost';
function App() {
 
  const [user,setUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={user && user._id ? <Home setUser={setUser}/> : <Login setUser={setUser}/>}/>
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/register' element={<Registration />} />

          <Route path='/addpost' element={<Addpost />} />
    
          <Route path='/editPost' element={<EditPost />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
