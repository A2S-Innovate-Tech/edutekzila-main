import "./Drawer.css";
import { useState,useEffect } from "react";
import MenuIcon from "../../assets/images/menu_low.png"
import ChatIcon from "../../assets/images/chat_low.png"


const Drawer = () =>{
    const [toggleDrawer, setToggleDrawer] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleDrawerHandler = () => {
        console.log("toggle Drawer");
        setToggleDrawer(!toggleDrawer)
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
            screenWidth>=900 &&
            <div className = "Drawer-Container">
                <button onClick={toggleDrawerHandler} className="Btn-Toggle-Drawer">
                    <img src={MenuIcon} className="Menu-Icon" alt="menu" />
                </button>
                <button onClick={toggleDrawerHandler} className="Btn-Comments">
                <img src={ChatIcon} className="Chat-Icon" alt="chat" />
                </button>
                
            </div>
        }
    </>
}

export default Drawer;