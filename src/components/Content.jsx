import React from "react";
import "./style/content-style.scss"


const Content = () => {
    return(
      <div className="content-holder">
         <div className="content">
            <div className="content-text">
               We developed it with <span className="love-text">love</span> and a few cups of <span className="love-text">Iranian tea</span>
            </div>
         </div>
      </div>
    )
}

export default Content;