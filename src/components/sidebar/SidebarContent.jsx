import "./SidebarContent.css";
// import { useContext } from "react";
// import ScreenWidthContext from "../../context/ScreenWidthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import TriangleImg from "../../assets/images/triangle.png";
import {Link} from "react-router-dom";
import {technicalServices,educationalServices,solutions} from "../../sidebarContents";

const SidebarContent = ({selectedOption,setToggleSidebar}) =>{
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
                selectedOption=="Technical Services" &&
                technicalServices.map((service)=>{
                    return <div className="Grid-Items" key= {Object.entries(service)[0][0]}>
                        <h3>{Object.entries(service)[0][0] } </h3>
                        <div className="List-Items">
                            {
                                Object.entries(service)[0][1].map((listItem)=>{
                                    return <div key={listItem} className="List-Item">
                                        <FontAwesomeIcon className="Bullet" icon={ faCircle } size="sm"/>
                                        <Link onClick={handleToggleSidebar} key={listItem} to={selectedOption+'/'+Object.entries(service)[0][0]+'/'+listItem}>{listItem} </Link>  
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
                
            }

            {   
                selectedOption=="Educational Services" &&
                educationalServices.map((service)=>{
                    return <div className="Grid-Items" key= {Object.entries(service)[0][0]}>
                        <h3>{Object.entries(service)[0][0] } </h3>
                        <div className="List-Items">
                            {
                                Object.entries(service)[0][1].map((listItem)=>{
                                    return <div key={listItem} className="List-Item">
                                        <FontAwesomeIcon className="Bullet" icon={ faCircle } size="sm"/>
                                        <Link onClick={handleToggleSidebar} key={listItem} to={selectedOption+'/'+Object.entries(service)[0][0]+'/'+listItem}>{listItem} </Link>  
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
                
            }
            {
                selectedOption=="Solutions" &&
                solutions.map((solution)=>{
                    return <div key={solution} className="List-Item">
                        <FontAwesomeIcon className="Bullet" icon={ faCircle } size="sm"/>
                        <Link onClick={handleToggleSidebar} key={solution} to={"Solutions"+'/'+solution}>{solution} </Link>  
                    </div>
                }) 
            }
        </div>
    </>
}

export default SidebarContent;