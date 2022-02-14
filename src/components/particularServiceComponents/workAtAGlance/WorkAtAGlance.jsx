import './WorkAtAGlance.css';

function WorkAtAGlance() {
    return (
        <div className="Particular-Service-Sub-Container Work-At-A-Glance">
            <h2 className="Heading Margin-B0">
                <span className = "Light-Blue">Work</span> At A Glance
            </h2>
            <div className="Video-Container">
                <iframe className="Youtube-Player" title="video"
                    src="https://www.youtube.com/embed/I2wvhRUVNTM"
                    allowFullScreen
                    >
                </iframe>
            </div>
        </div>
    );
}

export default WorkAtAGlance;
