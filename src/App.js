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
import SidebarOpen from './components/sidebar/SidebarOpen';


function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      <ScreenWidthState>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          
          <SidebarOpen toggleSidebar={toggleSidebar}/>
          {/* {toggleSidebar&&<SidebarOpen toggleSidebar={toggleSidebar}/>} */}

          <Sidebar setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
          {/* <div style={{height:"70px", backgroundColor: "var(--blue-dark)"}}></div> */}
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
