// import './App.css';
import Navbar from './components/navbar/Navbar';
import Drawer from './components/drawer/Drawer.jsx';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Drawer />
        <div style={{height:"70px", backgroundColor: "#050F2C"}}></div>
        <Routes>
          {/* <Route exact path="/" element={<Drawer />} /> */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
