import './ServiceDropdown.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp,faCaretDown} from '@fortawesome/free-solid-svg-icons'
import GetQuoteForm from '../../widgets/GetQuoteForm';

function ServiceDropdown({service}) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [showQuoteDialog, setShowQuoteDialog] = useState(false);
  
  const handleToggleDropdown=()=>{
    setToggleDropdown(!toggleDropdown)
  }

  const quoteHandler=()=>{
    console.log("Show quote popup");
    setShowQuoteDialog(true);
  }

  return (
    <div className="Service-Dropdown" 
      unselectable="on"
      onMouseDown={()=>false}
    >
        {
          showQuoteDialog && 
          <div className="Get-Quote-Dialog-BG">
            <GetQuoteForm setShowQuoteDialog={setShowQuoteDialog} quoteTitle = {service.title}/>
          </div>
        }
        <div className="Dropdown" onClick={handleToggleDropdown}>
          <div className="P1 Title">{service.titleHtml}</div>
          <div className="Icon">
            <FontAwesomeIcon icon={ toggleDropdown ? faCaretUp : faCaretDown } size="lg"/>
          </div>
        </div>
        <div className="Content" style={{display: toggleDropdown? "inline-block" : "none" }}>
          <p className="P2">
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
            <button onClick={quoteHandler} className="Btn-Get-Quote">
                Get Quote
            </button>
          </div>
        </div>
    </div>
  );
}

export default ServiceDropdown;
