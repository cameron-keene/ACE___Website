import React from "react";
import "./ProfileOfficer.css";
import { SocialIcon } from "react-social-icons";

function ProfileSponsors({ src, description, linkedin, site }) {
  return (
    <div className="profile">
      <img src={src} alt="" />
      <div className="profile_info">
        <h4>{description}</h4>
        <div className="profile_icons">
          <SocialIcon url={linkedin} />
        </div>
        <div className="profile_icons">
          <SocialIcon url={site} />
        </div>
      </div>
    </div>
  );
}
export default ProfileSponsors;
