import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import "./NavbarSolutionsDropdown.css";
import {Link} from "react-router-dom";
import { solutions } from '../../sidebarContents';

const NavbarSolutionsDropdown = ({solution,setToggleNav}) => {
    const [expanded,setExpanded] = useState(false);
    const handleSolutionOnclick = () =>{
        setExpanded(!expanded);
    }
    return (
        <div id="Navbar-Solutions-Dropdown">
            <p className="Title Nav-Item" onClick={handleSolutionOnclick} style={{color: (expanded?"var(--blue-light)": "white")}} >Solutions <FontAwesomeIcon icon={expanded ? faAngleUp : faAngleDown} style={{marginLeft:"6px"}} /></p>
            {
                expanded&&<div className="Content Grid">
                {  
                    <div className="Grid-Items">
                            <div className="List-Items">
                                {
                                    solutions.map((solution)=>{
                                        return <div key={solution} className="List-Item">
                                            <FontAwesomeIcon className="Bullet" icon={ faCircle } size="sm"/>
                                            <Link onClick={()=>{setToggleNav((val)=>!val)}} key={solution} to={"Solutions"+'/'+solution}>{solution} </Link>  
                                        </div>
                                    }) 
                                }
                            </div>
                        </div>
                    
                }
                </div>
            }
        </div>
    )
}

export default NavbarSolutionsDropdown
