import './App.css';
import './Global.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import ScreenWidthState from './api/ScreenWidthState';
import Blogs from './pages/Blogs';


function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  console.log(process.env.PUBLIC_URL);

  return (
    <div className="App">
      <ScreenWidthState>
        <Router basename={process.env.PUBLIC_URL}>
          {!toggleSidebar&&<Navbar />}
          <Sidebar setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
          
          <div style={{height:"70px", backgroundColor: "#050F2C"}}></div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/blogs" element={<Blogs />} />
          </Routes>
        </Router>
      </ScreenWidthState>
    </div>
  );
}

export default App;
