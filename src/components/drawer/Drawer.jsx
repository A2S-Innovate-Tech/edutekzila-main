import "./Drawer.css";
import { useState,useEffect } from "react";
// import DrawerIcon from "../../logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments , faTimes, faBars} from '@fortawesome/free-solid-svg-icons'


const Drawer = () =>{
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

    return <>
        {
            screenWidth>=700 &&
            <div className = "Drawer-Container">
                <button onClick={toggleNav} className="Btn-Toggle-Drawer">
                    <FontAwesomeIcon icon={ faBars } size="lg"/>
                </button>
                <button onClick={toggleNav} className="Btn-Comments">
                    <FontAwesomeIcon icon={ faComments } size="lg"/>
                </button>
            </div>
        }
    </>
}

export default Drawer;