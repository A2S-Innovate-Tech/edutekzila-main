import "./SidebarOpen.css";
import {  useContext, useState } from "react";
import ScreenWidthContext from "../../context/ScreenWidthContext";
import SidebarContent from "./SidebarContent";
import sidebarContents from "../../sidebarContents";

const SidebarOpen = ({toggleSidebar}) =>{
    const screenWidthState = useContext(ScreenWidthContext);
    const [selectedOption, setSelectedOption] = useState(Object.keys(sidebarContents)[0]);
    
    const selectedOptionHandler = (key)=>{
        console.log(key);
        setSelectedOption(key);
    }

    return <>
        {
            screenWidthState.screenWidth>=900 && 
            <div className={"Sidebar-Open "+ (toggleSidebar ? "Animate" : "")}>
                <div className="Left-Menu">
                    <div>
                        {
                            Object.keys(sidebarContents).map((key)=>{
                                return <h1 className={(selectedOption===key?"Dark-Blue":"")} onClick = {()=>selectedOptionHandler(key)} key={key}>
                                    {key.toUpperCase()}
                                </h1>
                            })
                        }
                    </div>
                    {/* <div>
                        <Link  to = "">
                            TECH SERVICES
                        </Link>
                        <Link  to = "">
                            EDU SERVICES
                        </Link>
                        <Link  to = "">
                            EXTENSIONS
                        </Link>
                        <Link  to = "">
                            SOLUTIONS
                        </Link>
                        <Link  to = "">
                            COMPANY
                        </Link>
                        <Link  to = "">
                            CAREERS
                        </Link>
                    </div> */}
                    <div className="Copyright">
                        <p>All rights reserved</p>
                        <p>Copyright © 2020 EduTekZila. </p>
                    </div>
                </div>
                <div className="Right-Options">
                    <SidebarContent content = {sidebarContents[selectedOption]}/>
                </div>
            </div>
        }
    </>
}

export default SidebarOpen;