import './TeamUserProfile.css';

function TeamUserProfile({user}) {
    return (
        <div className="Team-User-Profile">
            <img src={user.img} alt="user pic" />
            <div>
                <p className="Name  Margin-T0 Margin-B0">
                    {user.name}
                </p>
                <p  className="Designation Margin-T0 Margin-B0" >
                    {user.designation}
                </p>
            </div>
        </div>
    );
}

export default TeamUserProfile;
