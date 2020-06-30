import React from "react";

import './css/KeyCard.css'
import ArcCard from '../Components/ArcCard'
import ObjectCard from "../Components/ObjectCard";
import MoodCard from "../Components/MoodCard";
import TerrainCard from "./TerrainCard";

class GroupCards extends React.Component{

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <ArcCard/>
                </div>
                <div className="col-md-6">
                    <ObjectCard/>
                </div>
                <div className="col-md-6">
                    <TerrainCard/>
                </div>
                <div className="col-md-6">
                    <MoodCard/>
                </div>
            </div>
        );
    }
}
export default GroupCards;