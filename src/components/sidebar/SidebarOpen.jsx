import "./SidebarOpen.css";
import {  useContext, useState } from "react";
import ScreenWidthContext from "../../context/ScreenWidthContext";
import SidebarContent from "./SidebarContent";

const SidebarOpen = ({toggleSidebar, setToggleSidebar}) =>{
    const options = [
        "Technical Services",
        "Educational Services",
        "Solutions"
    ]
    
    const screenWidthState = useContext(ScreenWidthContext);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    
    const changeOption = (option)=>{
        setSelectedOption(option);
    }

    return <>
        {
            screenWidthState.screenWidth>=900 && 
            <div className={"Sidebar-Open "+ (toggleSidebar ? "Animate" : "")}>
                <div className="Left-Menu">
                    <div>
                        {
                            options.map(option=>{
                                return <h1 className={(selectedOption===option?"Dark-Blue":"")} onClick = {()=>changeOption(option)} >
                                    {option.toUpperCase()}
                                </h1>
                            })
                        }
                        {/* <h1 className={(selectedOption==="Technical Services"?"Dark-Blue":"")} onClick = {()=>changeOption("Technical Services")} >
                            TECHNICAL SERVICES
                        </h1>
                        <h1 className={(selectedOption==="Educational Services"?"Dark-Blue":"")} onClick = {()=>changeOption("Educational Services")} >
                            EDUCATIONAL SERVICES
                        </h1>
                        <h1 className={(selectedOption==="Solutions"?"Dark-Blue":"")} onClick = {()=>changeOption("Solutions")} >
                            SOLUTIONS
                        </h1> */}
                        
                    </div>
                    <div className="Copyright">
                        <p>All rights reserved</p>
                        <p>Copyright © {new Date().getFullYear()} EduTekZila. </p>
                    </div>
                </div>
                <div className="Right-Options">
                    <SidebarContent setToggleSidebar={setToggleSidebar} selectedOption = {selectedOption}/>
                </div>
            </div>
        }
    </>
}

export default SidebarOpen;