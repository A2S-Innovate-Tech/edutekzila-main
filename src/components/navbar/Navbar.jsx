import "./Navbar.css";
import AppLogo from "../../assets/images/app_logo.png"
import { useState,useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from "react-router-dom";
import ScreenWidthContext from "../../context/ScreenWidthContext";

const Navbar = () =>{
    const [toggleNav, setToggleNav] = useState(false);
    const screenWidthState = useContext(ScreenWidthContext);

    const location = useLocation();
    const handleToggleNavbar = () => {
        setToggleNav(!toggleNav)
    }

    const collapseNavbar = () => {
        setToggleNav(false)
    }

    function handleScroll() {
        collapseNavbar();
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
    }

    return <nav className={toggleNav?"Nav-Collapse":"Nav"}>
        <img src={AppLogo} className="Nav-Icon" alt="logo" />
        {
            (screenWidthState.screenWidth < 900) &&
             <button onClick={handleToggleNavbar} className="Btn-Toggle-Nav">
                <FontAwesomeIcon icon={ toggleNav ? faTimes : faBars} size="lg"/>
            </button>
        }
        {
            (screenWidthState.screenWidth >= 900 || toggleNav) &&
                <ul className="Nav-Items">
                    <li className="Nav-Item"><Link onClick={collapseNavbar} style={{color: (location.pathname === "/"?"var(--blue-light)": "white")}} to="/">Home</Link></li>
                    <li className="Nav-Item"><Link onClick={collapseNavbar} style={{color: (location.pathname === "/portfolio"?"var(--blue-light)": "white")}} to="/portfolio">Portfolio</Link></li>
                    <li className="Nav-Item"><Link onClick={collapseNavbar} style={{color: (location.pathname === "/blogs"?"var(--blue-light)": "white")}} to="/blogs">Blogs</Link></li>
                    <button onClick={handleScroll} className = "Btn-Contact-Us">Contact Us</button>
                </ul>

        }
        
        
    </nav>
}

export default Navbar;
