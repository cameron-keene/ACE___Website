import React from "react";
import "./AboutPage.css";
import ProfileOfficer from "../features/ProfileOfficer.js";
import ProfileSponsors from "../features/ProfileSponsors.js";
import test_img from "./kayton.jpeg";
import jpm_logo from "../imgs/jpm-logo.jpg";

function AboutPage() {
  return (
    <div className="aboutpage">
      <h1>What Ace is:</h1>
      <h5>
        Founded in 2014, the Association of Computer Engineers serves as a
        community dedicated to representing the union of computer science and
        electrical engineering. We provide an opportunity for students at the
        University of Florida to develop their technical skills, learn from
        upperclassmen, and develop as professionals. Come out to one of our
        events and meet an amazing group of students to help you through your
        academic journey.
      </h5>

      <div className="sponsors">
        <h2>Sponsors</h2>
        <ProfileSponsors
          src={jpm_logo}
          description="J.P. Morgan is a global leader in financial services, offering solutions to the world's most important corporations, governments and institutions in more than 100 countries."
          linkedin="https://www.linkedin.com/company/jpmorgan/"
          site="https://www.jpmorgan.com/global"
        />
      </div>

      <h2>Officers</h2>
      <div className="about_officers">
        <ProfileOfficer
          src={test_img}
          title="President"
          name="Kayton Fletcher"
          linkedin="https://www.linkedin.com/in/cameron-keene-53643b19b/"
          github="https://github.com/cameron-keene"
        />
        <ProfileOfficer
          src={test_img}
          title="President"
          name="Kayton Fletcher"
          linkedin="https://www.linkedin.com/in/cameron-keene-53643b19b/"
          github="https://github.com/cameron-keene"
        />
        <ProfileOfficer
          src={test_img}
          title="President"
          name="Kayton Fletcher"
          linkedin="https://www.linkedin.com/in/cameron-keene-53643b19b/"
          github="https://github.com/cameron-keene"
        />
      </div>
    </div>
  );
}

export default AboutPage;
