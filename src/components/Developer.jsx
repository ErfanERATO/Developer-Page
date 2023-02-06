import React from "react";
import "./style/developer.scss"

const Developer = () => {
  return (
    <div className="developer-holder">
      <div className="row">
        <div className="col">
          <div className="ui-text">UI & UX Designer:</div>
        </div>
        <div className="col">
          <div className="ui-designer-text">AmirArsalan ChamKhorram <span className="website-span">(Website)</span></div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="ui-text">Frontend and Backend Developers:</div>
        </div>
        <div className="col">
          <div className="ui-designer-text">OmidReza Zareei & Ali Seyed Abadi <span className="website-span">(Ako Team Website)</span></div>
        </div>
      </div>


      <div className="row">
        <div className="col">
          <div className="ui-text">Development Duration:</div>
        </div>
        <div className="col">
          <div className="ui-designer-text">18 Days <span className="date-span">(2022/12/01 - 2022/12/18)</span></div>
        </div>
      </div>
    </div>

    
  );
};

export default Developer;
