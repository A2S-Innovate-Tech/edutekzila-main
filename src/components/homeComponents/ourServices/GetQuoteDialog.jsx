import './GetQuoteDialog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
function GetQuoteDialog({setShowQuoteDialog}) {

    const exit = ()=>{
        setShowQuoteDialog(false);
    }
    
    return (
        <div className="Get-Quote-Dialog-BG">
            <form className="Get-Quote-Dialog">
                <div>
                    <h2><span className="Light-Blue">Get Quote on</span> App Development</h2>
                    <FontAwesomeIcon onClick={exit} className="Close-Icon" icon={ faTimes } size="lg"/>
                </div>
                <div>
                    <input className="Text-Field Name" type="text" placeholder="Name" />
                    <input className="Text-Field Email" type="email" placeholder="Email ID" />
                </div>
                <div>
                    <input className="Text-Field Mobile" type="text" placeholder="Mobile No." />
                    <input className="Text-Field Company" type="text" placeholder="Company Name" />
                </div>
                <textarea className="Text-Field Message" type="text" placeholder="Any Specific Requirement (please mention)" />
                <div>
                    <p>
                        Our executives will contact you shortly after this submission. <br />
                        For other queries you may contact us.
                    </p>
                    <button  className="Btn-Submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default GetQuoteDialog;
