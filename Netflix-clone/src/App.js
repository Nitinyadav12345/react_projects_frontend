import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import {AuthContextProvider} from './context/AuthContext'
import Login from './pages/Login';
import Account from './pages/Account';
import Signup from './pages/Signup';
import Protected from './component/Protected';


function App() {
  return (
    <AuthContextProvider>
      <Navbar/>
      <Routes>
          <Route  exact path="/" element ={<Home/>}/>
          <Route  exact path='/login' element={<Login/>}/>
          <Route  exact path='/account' element={<Protected><Account/></Protected>}/>
          <Route  exact path='/signup' element={<Signup/>}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
