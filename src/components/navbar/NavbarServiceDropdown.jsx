import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import "./NavbarServiceDropdown.css";
import {Link} from "react-router-dom";

const NavbarServiceDropdown = ({category,services,setToggleNav}) => {
    const [expanded,setExpanded] = useState(false);
    const handleCategoryOnClick = () =>{
        setExpanded(!expanded);
    }
    return (
        <div id="Navbar-Service-Dropdown">
            <p className="Title Nav-Item" onClick={handleCategoryOnClick} style={{color: (expanded?"var(--blue-light)": "white")}} >{category} <FontAwesomeIcon icon={expanded ? faAngleUp : faAngleDown} style={{marginLeft:"6px"}} /></p>
            {
                expanded&&<div className="Content Grid">
                {   
                    services.map((service)=>{
                        return <div className="Grid-Items" key= {Object.entries(service)[0][0]}>
                            <h3>{Object.entries(service)[0][0] } </h3>
                            <div className="List-Items">
                                {
                                    Object.entries(service)[0][1].map((listItem)=>{
                                        return <div key={listItem} className="List-Item">
                                            <FontAwesomeIcon className="Bullet" icon={ faCircle } size="sm"/>
                                            <Link onClick={()=>{setToggleNav((val)=>!val)}} key={listItem} to={category+'/'+Object.entries(service)[0][0]+'/'+listItem}>{listItem} </Link>  
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
                    // Object.entries(services).map((entry)=>{
                    //     return <div className="Grid-Items" key= {entry[0]}>
                    //         <h3>{entry[0] } </h3>
                    //         <div className="List-Items">
                    //             {
                    //                 entry[1].map((listItem)=>{
                    //                     return <div key={listItem} className="List-Item">
                    //                         <FontAwesomeIcon className="Bullet" icon={ faCircle } size="sm"/>
                    //                         {/* <Link onClick={handleToggleSidebar} key={listItem} to={serviceCategory+'/'+entry[0]+'/'+listItem}>{listItem} </Link>   */}
                    //                         <Link onClick={()=>{setToggleNav((val)=>!val)}} key={listItem} to={category+'/'+entry[0]+'/'+listItem}>{listItem} </Link>  
                    //                     </div>
                    //                 })
                    //             }
                    //         </div>
                    //     </div>
                    // })
                
                }
                </div>
            }
        </div>
    )
}

export default NavbarServiceDropdown
