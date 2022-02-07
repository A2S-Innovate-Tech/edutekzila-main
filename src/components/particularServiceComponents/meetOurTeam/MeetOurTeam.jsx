import './MeetOurTeam.css';
import TeamUserProfile from './TeamUserProfile';
import team from '../../../ourTeam.js';

function MeetOurTeam() {
    return (
        <div className="Particular-Service-Sub-Container Meet-Our-Team">
            <h2 className="Heading Margin-B0">
                <span className = "Light-Blue">Meet</span> Our Team
            </h2>
            <div>
                {
                    team.map((user)=>{
                        return <TeamUserProfile key={user.id} user={user}/>
                    })
                }
            </div>
        </div>
    );
}

export default MeetOurTeam;
