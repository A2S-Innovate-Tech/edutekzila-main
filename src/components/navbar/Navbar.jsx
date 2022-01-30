import "./Navbar.css";
import AppLogo from "../../assets/images/app_logo.png"
import { useState,useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from "react-router-dom";
import ScreenWidthContext from "../../context/ScreenWidthContext";

const Navbar = () =>{
    const [toggleNav, settoggleNav] = useState(false);
    const screenWidthState = useContext(ScreenWidthContext);

    const location = useLocation();
    const toggleNavHandler = () => {
        settoggleNav(!toggleNav)
    }

    return <nav className={toggleNav?"Nav-Collapse":"Nav"}>
        <img src={AppLogo} className="Nav-Icon" alt="logo" />
        {
            (screenWidthState.screenWidth < 900) &&
             <button onClick={toggleNavHandler} className="Btn-Toggle-Nav">
                <FontAwesomeIcon icon={ toggleNav ? faTimes : faBars} size="lg"/>
            </button>
        }
        {
            (screenWidthState.screenWidth >= 900 || toggleNav) &&
                <ul className="Nav-Items">
                    <li className="Nav-Item"><Link style={{color: (location.pathname === "/"?"#00BCE4": "white")}} to="/">Home</Link></li>
                    <li className="Nav-Item"><Link style={{color: (location.pathname === "/portfolio"?"#00BCE4": "white")}} to="/portfolio">Portfolio</Link></li>
                    <li className="Nav-Item"><Link style={{color: (location.pathname === "/blogs"?"#00BCE4": "white")}} to="/blogs">Blogs</Link></li>
                    <button className = "Btn-Contact-Us">Contact Us</button>
                </ul>

        }
        
        
    </nav>
}

export default Navbar;
