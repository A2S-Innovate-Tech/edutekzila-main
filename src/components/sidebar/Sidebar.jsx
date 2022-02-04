import "./Sidebar.css";
import { useContext } from "react";
import ScreenWidthContext from "../../context/ScreenWidthContext";
import SidebarOpenIcon from "../../assets/images/sidebar_open.png"
import SidebarCloseIcon from "../../assets/images/sidebar_close.png"
import ChatIcon from "../../assets/images/chat_low.png"

const Sidebar = ({toggleSidebar,setToggleSidebar}) =>{
    const screenWidthState = useContext(ScreenWidthContext);
    
    const toggleSidebarHandler = () => {
        setToggleSidebar(value=>!value);
        !toggleSidebar
        ?   document.body.style.overflow = "hidden"
        :   document.body.style.overflow = "auto";
    }
    return <>
        {
            screenWidthState.screenWidth>=900 &&
            <div className="Sidebar">
                    <button onClick={toggleSidebarHandler} className="Btn-Toggle-Sidebar">
                        <img src={toggleSidebar ? SidebarCloseIcon : SidebarOpenIcon}  alt="menu" />
                    </button>
                    <button onClick={()=>{}} className="Btn-Comments">
                        <img src={ChatIcon} alt="chat" />
                    </button>
            </div>
        }
    </>
}

export default Sidebar;