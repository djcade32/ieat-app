import React from "react";
import "./ProfileHeader.css";

function ProfileHeader(props) {
  return (
    <React.Fragment>
      <div className="header">
        <img className="profile-pic" src={props.profilePic} alt="profile" />
        <div className="user-info">
          <h2 className="username">Mike Abel</h2>
          <p className="user-location">
            <em>Washington, D.C.</em>
          </p>
        </div>
      </div>
      <div className="user-stats">
        <button className="stat-button">
          <p className="stat-number">34</p>
          <p className="stat-title">Visited</p>
        </button>
        <button className="stat-button">
          <p className="stat-number">10</p>
          <p className="stat-title">Not Visited</p>
        </button>
      </div>
      <hr className="header-hr" />
    </React.Fragment>
  );
}

export default ProfileHeader;
