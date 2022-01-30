import "./Sidebar.css";
import { useContext } from "react";
import ScreenWidthContext from "../../context/ScreenWidthContext";
import MenuIcon from "../../assets/images/menu_low.png"
import ChatIcon from "../../assets/images/chat_low.png"

const Sidebar = ({toggleSidebar,setToggleSidebar}) =>{
    const screenWidthState = useContext(ScreenWidthContext);
    
    const toggleSidebarHandler = () => {
        setToggleSidebar(value=>!value)
    }
    return <>
        {
            screenWidthState.screenWidth>=900 &&
            <div className="Sidebar">
            {   toggleSidebar
                ?   <div className = "Open">
                        <div className="Center-Panel">
                            
                        </div>
                        <div className="Right-Panel">
                            <button onClick={toggleSidebarHandler} className="Btn-Toggle-Sidebar">
                                <img src={MenuIcon}  alt="menu" />
                            </button>
                            <button onClick={toggleSidebarHandler} className="Btn-Comments">
                                <img src={ChatIcon} alt="chat" />
                            </button>
                        </div>
                    </div>
                :   <div className = "Close">
                        <button onClick={toggleSidebarHandler} className="Btn-Toggle-Sidebar">
                            <img src={MenuIcon}  alt="menu" />
                        </button>
                        <button onClick={toggleSidebarHandler} className="Btn-Comments">
                            <img src={ChatIcon} alt="chat" />
                        </button>
                    </div>

            }


                
                {/* <div className = {(toggleSidebar ? "Open":"Closed")}>
                    
                    <button onClick={toggleSidebarHandler} className="Btn-Toggle-Sidebar">
                        <img src={MenuIcon}  alt="menu" />
                    </button>
                    <button onClick={toggleSidebarHandler} className="Btn-Comments">
                        <img src={ChatIcon} alt="chat" />
                    </button>
                </div> */}
            </div>
        }
    </>
}

export default Sidebar;