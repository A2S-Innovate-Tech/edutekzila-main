import "./Navbar.css";
import AppLogo from "../../assets/images/app_logo.png"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons'

const Navbar = () =>{
    const [toggleNav, settoggleNav] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNavHandler = () => {
        settoggleNav(!toggleNav)
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
    
    return <nav className={toggleNav?"Nav-Collapse":"Nav"}>
        <img src={AppLogo} className="Nav-Icon" alt="logo" />
        
        {/* <a className="Nav-Title" href="/">Edu<span>Tek</span>Zila</a> */}
        
        {
            (screenWidth < 900) &&
             <button onClick={toggleNavHandler} className="Btn-Toggle-Nav">
                <FontAwesomeIcon icon={ toggleNav ? faTimes : faBars} size="lg"/>
            </button>
        }
        {
            (screenWidth >= 900 || toggleNav) &&
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
