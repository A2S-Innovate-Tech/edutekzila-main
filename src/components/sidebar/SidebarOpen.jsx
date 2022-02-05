import "./SidebarOpen.css";
import {  useContext, useState } from "react";
import ScreenWidthContext from "../../context/ScreenWidthContext";
import SidebarContent from "./SidebarContent";
import sidebarContents from "../../sidebarContents";

const SidebarOpen = ({toggleSidebar, setToggleSidebar}) =>{
    const screenWidthState = useContext(ScreenWidthContext);
    const [serviceCategory, setServiceCategory] = useState(Object.keys(sidebarContents)[0]);
    
    const serviceCategoryHandler = (key)=>{
        setServiceCategory(key);
    }

    return <>
        {
            screenWidthState.screenWidth>=900 && 
            <div className={"Sidebar-Open "+ (toggleSidebar ? "Animate" : "")}>
                <div className="Left-Menu">
                    <div>
                        {
                            Object.keys(sidebarContents).map((serviceCategory)=>{
                                return <h1 className={(serviceCategory===serviceCategory?"Dark-Blue":"")} onClick = {()=>serviceCategoryHandler(serviceCategory)} key={serviceCategory}>
                                    {serviceCategory.toUpperCase()}
                                </h1>
                            })
                        }
                    </div>
                    <div className="Copyright">
                        <p>All rights reserved</p>
                        <p>Copyright © 2020 EduTekZila. </p>
                    </div>
                </div>
                <div className="Right-Options">
                    <SidebarContent setToggleSidebar={setToggleSidebar} content = {sidebarContents[serviceCategory]} serviceCategory = {serviceCategory}/>
                </div>
            </div>
        }
    </>
}

export default SidebarOpen;