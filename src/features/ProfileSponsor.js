import React from "react";
import "./ProfileSponsor.css";
import { SocialIcon } from "react-social-icons";

function ProfileSponsor({ src, description, linkedin, site }) {
  return (
    <div className="s_profile">
      <img src={src} alt="" />
      <div className="s_profile_info">
        <h4>{description}</h4>
        <div className="s_profile_icons">
          <SocialIcon url={linkedin} />
        </div>
        <div className="s_profile_icons">
          <SocialIcon url={site} />
        </div>
      </div>
    </div>
  );
}
export default ProfileSponsor;
