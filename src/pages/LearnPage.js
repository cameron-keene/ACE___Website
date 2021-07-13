import React from "react";
import VideoThumbnail from "../features/VideoThumbnail";
//import "./HomePage.css";

function LearnPage() {
  return (
    <div className="LearnPage">
      <h1> Latest Videos </h1>
      <div className="videos">
        <VideoThumbnail embedId="XuNux7OdOnw" title="video 1" 
        description = "description goes here description goes here  description goes here description goes here description goes here" tags="github"/>
      </div>
      <div className="videos">
        <VideoThumbnail embedId="OJ_zgmvdK1o" title="video 2" 
        description = "description goes here" tags="c++"/>
      </div>
      <div className="videos">
        <VideoThumbnail embedId="1ygFeSr1l1Y" title="video 3" 
        description = "description goes here" tags="React"/>
      </div>
      <div className="videos">
        <VideoThumbnail embedId="HJhvMSo7JAQ" title="video 4" 
        description = "description goes here" tags="Leetcode"/>
      </div>
      <div className="videos">
        <VideoThumbnail embedId="DL9EnDdZNFE" title="video 5" 
        description = "description goes here" tags="GBM"/>
      </div>
      <section id="pagination" class="d-flex justify-content-center">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
             <button class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</button>
            </li>
            <li class="page-item"><button class="page-link" href="#">1</button></li>
            <li class="page-item active" aria-current="page">
              <button class="page-link" href="#">2</button>
            </li>
            <li class="page-item"><button class="page-link" href="#">3</button></li>
            <li class="page-item">
              <button class="page-link" href="#">Next</button>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default LearnPage;
