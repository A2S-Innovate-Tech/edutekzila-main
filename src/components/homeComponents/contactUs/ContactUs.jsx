import './ContactUs.css';

import GoogleMapImg from "../../../assets/images/google_map.png";
import { useState,useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

function ContactUs() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    
    return (
        <div>
            {
                screenWidth<1220
                ?  <div className="Contact-Us  Contact-Us-Mobile">
                        {
                            screenWidth<1220 && <h1>
                                CONTACT US
                            </h1>
                        }
                        <div className="Info-Container">
                            <ContactForm />
                            <div className="Contact-Info-Mobile">
                                <img className="Google-Map" src={GoogleMapImg} alt="Google Map" />
                                <ContactInfo />
                            </div>
                            <div className="Copyright-Policy">
                                <p>Privacy Policy  |  Sitemap</p>
                                <p>Copyright © 2020 EduTekZila. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                :   <div className="Contact-Us">
                        <div className="Info-Container">
                            <h1>
                                CONTACT US
                            </h1>
                            
                            <ContactInfo />
                            
                            <div className="Copyright-Policy">
                                <p>Privacy Policy  |  Sitemap</p>
                                <p>Copyright © 2020 EduTekZila. All rights reserved</p>
                            </div>
                        </div>
                        <div className="Form-Container">
                            <img className="Google-Map" src={GoogleMapImg} alt="Google Map" />
                            <ContactForm />
                        </div>
                    </div>
            }
            
        </div>
        
    );
}

export default ContactUs;
