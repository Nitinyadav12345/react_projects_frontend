import './App.css';
import Navbar from './components/Navbar';
import Screen_w from './screens/Screen_w';
import About from './screens/About';
import Setting from './screens/Setting';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={ <Screen_w />}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/setting" element={<Setting/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
