import React from "react";

import './css/KeyCard.css'

class TerrainCard extends React.Component{

    render() {
        return (
            <div className="mb-2">
                <div className="context-card">
                    <div className="context-card-top text-center">
                        <div className="title">
                            top
                        </div>
                    </div>
                    <hr/>
                    <div className="context-card-bottom text-center">
                        <div className="title">
                            la casa del senior comedia
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TerrainCard;