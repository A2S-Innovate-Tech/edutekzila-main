import './ServiceDropdown.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp,faCaretDown} from '@fortawesome/free-solid-svg-icons'

function ServiceDropdown({service}) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const handleToggleDropdown=()=>{
    setToggleDropdown(!toggleDropdown)
  }
  return (
    <div className="Service-Dropdown" 
      unselectable="on"
      onMouseDown={()=>false}
    >
        <div className="Dropdown" onClick={handleToggleDropdown}>
          <div className="Title">{service.title}</div>
          <div className="Icon">
            <FontAwesomeIcon icon={ toggleDropdown ? faCaretUp : faCaretDown } size="lg"/>
          </div>
        </div>
        <div className="Content" style={{display: toggleDropdown? "inline-block" : "none" }}>
          <p className="P1">
            {service.description}
          </p>
          <div className="Bottom">
            <div className="Content-Images">
              {
                service.images.map((image)=>{
                  return <img key={image} src={image}  alt={image} />
                })
              }
            </div>
            <button className="Btn-Get-Quote">
                Get Quote
            </button>
          </div>
        </div>
    </div>
  );
}

export default ServiceDropdown;
