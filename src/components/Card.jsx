import React from "react";

import "./style/card-style.scss";

const Card = ({url}) => {
  return (
    <div className="main-card">
      <div className="image-holder">
        <img src={url} className="main-image" />
      </div>
      <div className="html-text">HTML</div>
    </div>
  );
};

export default Card;
