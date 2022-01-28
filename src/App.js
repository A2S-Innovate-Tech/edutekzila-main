import './App.css';
import './Global.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './pages/Home';
import { useState,useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
      const changeWidth = () => {
          setScreenWidth(window.innerWidth);
      }
      window.addEventListener('resize', changeWidth)
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  }, [])
  
  return (
    <div>
      <Router>
        {!toggleSidebar&&<Navbar />}
        <Sidebar setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar} screenWidth={screenWidth} />
        
        <div style={{height:"70px", backgroundColor: "#050F2C"}}></div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
