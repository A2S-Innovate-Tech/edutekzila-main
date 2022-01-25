import "./Navbar.css";
import AppLogo from "../../logo.svg"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons'

const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    
    return <nav className={toggleMenu?"Nav-Collapse":"Nav"}>
        <img src={AppLogo} className="Nav-Icon" alt="logo" />
        
        <a className="Nav-Title" href="/">Edu<span>Tek</span>Zila</a>
        {
            (screenWidth < 700) &&
             <button onClick={toggleNav} className="Btn-Toggle-Nav">
                <FontAwesomeIcon icon={ toggleMenu ? faTimes : faBars} size="lg"/>
            </button>
        }
        {
            (screenWidth >= 700 || toggleMenu) &&
                <ul className="Nav-Items">
                    <li className="Nav-Item"><a href="/">Home</a></li>
                    <li className="Nav-Item"><a href="/">Portfolio</a></li>
                    <li className="Nav-Item"><a href="/">Blogs</a></li>
                    <button className = "Btn-Contact-Us">Contact Us</button>
                </ul>

        }
        
        
    </nav>
}

export default Navbar;
