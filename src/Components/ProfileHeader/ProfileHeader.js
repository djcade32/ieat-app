import React from "react";
import "./ProfileHeader.css";

function ProfileHeader(props) {
  return (
    <React.Fragment>
      <div className="header">
        <img className="profile-pic" src={props.profilePic} alt="profile" />
        <div className="user-info">
          <h2 className="username">{props.name}</h2>
          <p className="user-location">
            <em>{props.location}</em>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProfileHeader;
