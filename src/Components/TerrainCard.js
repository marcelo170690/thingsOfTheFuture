import React from "react";

import './css/KeyCard.css'

class TerrainCard extends React.Component{

  render() {
    return (
      <div className="mb-2">
        {this.props.terrain.thing2 ? (
          <div className="terrain-card">
            <div className="terrain-card-top text-center">
              <div className="title">
                {this.props.terrain.thing1.description}
              </div>
            </div>
            <hr/>
            <div className="terrain-card-bottom text-center">
              <div className="title">
                {this.props.terrain.thing2.description}
              </div>
            </div>
          </div>
        ):(
          <div className="terrain-card-2">
            <div className="title text-center">
              {this.props.terrain.thing1.description}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default TerrainCard;