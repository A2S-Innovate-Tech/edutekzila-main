import "./SidebarContent.css";
// import { useContext } from "react";
// import ScreenWidthContext from "../../context/ScreenWidthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import TriangleImg from "../../assets/images/triangle.png";
import {Link} from "react-router-dom";

const SidebarContent = ({content,serviceCategory,setToggleSidebar}) =>{
    // const screenWidthState = useContext(ScreenWidthContext);
    const handleToggleSidebar =()=>{
        setToggleSidebar((val)=>{
            document.body.style.overflow = "auto";
            return !val;
        });
    }
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
                                    return <div key={listItem} className="List-Item">
                                        <FontAwesomeIcon className="Bullet" icon={ faCircle } size="sm"/>
                                        <Link onClick={handleToggleSidebar} key={listItem} to={serviceCategory+'/'+entry[0]+'/'+listItem}>{listItem} </Link>  
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