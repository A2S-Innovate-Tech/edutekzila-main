import "./Navbar.css";
import AppLogo from "../../assets/images/app_logo.png"
import { useState,useContext,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from "react-router-dom";
import ScreenWidthContext from "../../context/ScreenWidthContext";
import {technicalServices,educationalServices,solutions} from "../../sidebarContents";
import NavbarServiceDropdown from "./NavbarServiceDropdown";
import NavbarSolutionsDropdown from "./NavbarSolutionsDropdown";


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

    useEffect(() => {
        // document.body.style.opacity="0.4";
        toggleNav
        ?   document.body.style.overflow = "hidden"
        :   document.body.style.overflow = "auto";
    }, [toggleNav])

    return <div  className={(toggleNav && screenWidthState.screenWidth < 900 ? "Nav-Bg" :"")}>
        <nav>
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
                    {
                        // Sidebar contents in Navbar if Screen Width < 900
                        screenWidthState.screenWidth<900 && 
                        <div className="Nav-Services">
                            {/* {
                                Object.keys(sidebarContents).map((category)=>{
                                    // return <li className="Nav-Item" key={category}><Link onClick={collapseNavbar} style={{color: (decodeURI(location.pathname) === `/${category}`?"var(--blue-light)": "white")}} to={'/'+category}>{category}</Link></li>
                                    return <NavbarServiceDropdown key={category} category={category} services={sidebarContents[category]} setToggleNav = {setToggleNav}/>
                                })
                            } */}
                            
                            <NavbarServiceDropdown category={"Technical Services"} services={technicalServices} setToggleNav = {setToggleNav}/>
                            <NavbarServiceDropdown category={"Educational Services"} services={educationalServices} setToggleNav = {setToggleNav}/>
                            <NavbarSolutionsDropdown />   
                            
                        </div>
                    }
                    
                    <button onClick={handleScroll} className = "Btn-Contact-Us">Contact Us</button>
                </ul>

            }
        </nav>
    </div>
}

export default Navbar;


// https://docs.google.com/document/d/10WwyqELj4LS-nO2C5yFyAF15OLyvskud8_pPLjwVzvc/edit?usp=sharing

// For Portfolio, add these 2 apps-
// https://play.google.com/store/apps/details?id=code.farmtap
// https://play.google.com/store/apps/details?id=com.catodex


// And in Educational Services add Study Abroad Guidance as well. Its content for home page would be-

// If you are enquiring about Study Abroad options or Migration options, our in-house expert team is there to guide you