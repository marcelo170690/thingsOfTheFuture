import React from "react";

import './css/KeyCard.css'

class MoodCard extends React.Component{

    render() {
        return (
            <div className="mb-2">
                <div className="mood-card">
                    <div className="title text-center">
                      {this.props.mood.name}
                    </div>
                </div>
            </div>
        );
    }
}
export default MoodCard;