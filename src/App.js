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
import ScreenWidthState from './state/ScreenWidthState';
import Blogs from './pages/Blogs';
import SidebarOpen from './components/sidebar/SidebarOpen';
import ParticularService from './pages/ParticularService';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      <ScreenWidthState>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <SidebarOpen toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
          <Sidebar setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path=":serviceCategory/:serviceType/:serviceName" element={<ParticularService/>} />
            <Route path='*' exact={true} element={<PageNotFound />} />
          </Routes>
        </Router>
      </ScreenWidthState>
    </div>
  );
}

export default App;
