import React from "react";
import "./VideoThumbnail.css";

function Thumbnail({ embedId, title, description, tags }) {
  return (
    <div class="container">
      <div class="row border-bottom mb-4">
      <div class="col-sm lg-mb-4 mb-2">
        <a href={"https://www.youtube.com/watch?v=" + embedId}
        rel="noopener noreferrer" target="_blank">
        <img src={"http://img.youtube.com/vi/" + embedId + '/0.jpg'}
         alt="thumbnail" class="img-fluid shadow-2-strong rounded"/>
        </a>
      </div>
      <div class="col-sm mb-4">
        <div class="row">
            <h2>{title}</h2>
        </div>
        <div class="row">
            <h4>{description}</h4>
        </div>
        <div class="row">
          <div className="tags">
            <h9>Tags: </h9>
              <span class="badge badge-pill badge-primary">{tags}</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Thumbnail;