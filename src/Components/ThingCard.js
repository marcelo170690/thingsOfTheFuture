import React from "react";
import './css/KeyCard.css'

class ThingCard extends React.Component {
  render() {
    return (
      <div className="mb-2">
        <div className="object-card">
          <div className="title text-center">
            {this.props.thing.name}
          </div>
        </div>
      </div>
    );
  }
}
export default ThingCard;