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
import Fintech from './pages/solutions/Fintech';
import ECommerce from './pages/solutions/ECommerce';
import Healthcare from './pages/solutions/Healthcare';
import Fitness from './pages/solutions/Fitness';
import FoodDelivery from './pages/solutions/FoodDelivery';
import RealEstate from './pages/solutions/RealEstate';
import Travel from './pages/solutions/Travel';
import Sports from './pages/solutions/Sports';
import SocialNetworking from './pages/solutions/SocialNetworking';
import Business from './pages/solutions/Business';
import Educational from './pages/solutions/Education';
import Entertainment from './pages/solutions/Entertainment';

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
            {/* <Route exact path="/blogs" element={<Blogs />} /> */}
            <Route exact path=":serviceCategory/:serviceType/:serviceName" element={<ParticularService/>} />
            {/* {
              solutions.map(solution=>{
                return <Route key={solution} exact path={"solutions/"+solution} element={<solution />} />
              })
            } */}
            <Route exact path="solutions/fintech" element={<Fintech />} />
            <Route exact path="solutions/e-commerce" element={<ECommerce />} />
            <Route exact path="solutions/healthcare" element={<Healthcare />} />
            <Route exact path="solutions/fitness" element={<Fitness />} />
            <Route exact path="solutions/food%20delivery" element={<FoodDelivery />} />
            <Route exact path="solutions/real%20estate" element={<RealEstate />} />
            <Route exact path="solutions/travel" element={<Travel />} />
            <Route exact path="solutions/sports" element={<Sports />} />
            <Route exact path="solutions/social%20networking" element={<SocialNetworking />} />
            <Route exact path="solutions/business" element={<Business />} />
            <Route exact path="solutions/education" element={<Educational />} />
            <Route exact path="solutions/entertainment" element={<Entertainment />} />
            <Route path='*' exact={true} element={<PageNotFound />} />
          </Routes>
        </Router>
      </ScreenWidthState>
    </div>
  );
}

export default App;
