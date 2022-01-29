import './ContactForm.css';

function ContactForm() {
    
    return (
        <form className="Contact-Form">
            <h3 className="Light-Blue">Tell Us how we can help you</h3>
            <input className="Text-Field Name" type="text" placeholder="Name" />
            <input className="Text-Field Email" type="email" placeholder="Email Id" />
            <div>
                <input className="Text-Field Mobile" type="text" placeholder="Mobile No." />
                <input className="Text-Field Company" type="text" placeholder="Company Name" />
            </div>
            <textarea className="Text-Field Message" type="text" placeholder="Message" />
            <button  className="Btn-Submit" type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
