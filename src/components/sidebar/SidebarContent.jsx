import "./SidebarContent.css";
// import { useContext } from "react";
// import ScreenWidthContext from "../../context/ScreenWidthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import TriangleImg from "../../assets/images/triangle.png";

const SidebarContent = ({content}) =>{
    console.log(content)
    // const screenWidthState = useContext(ScreenWidthContext);
    
    return <>
        <div className="Sidebar-Content Grid">
            <img src={TriangleImg} alt="arrow" />
            {   
                Object.entries(content).map((entry)=>{
                    return <div className="Grid-Items" key= {entry[0]}>
                        <h2>{entry[0] } </h2>
                        <div className="List-Items">
                            
                            {
                                entry[1].map((listItem)=>{
                                    return <div className="List-Item">
                                        <FontAwesomeIcon className="Bullet" icon={ faCircle } size="sm"/>
                                        <p key={listItem}>{listItem}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            
            }
        </div>
    </>
}

export default SidebarContent;