import React from "react";

import './css/KeyCard.css'

class ArcCard extends React.Component{

  render() {
    return (
      <div className="mb-2">
        <div className="arc-card">
          <img src="" alt=""/>
          <div className="title text-center">
            {this.props.arc.scenario}
            <div className="sub-title text-center">
              {this.props.arc.time}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ArcCard;