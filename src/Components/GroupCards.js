import React from "react";

import './css/KeyCard.css'
import ArcCard from '../Components/ArcCard'
import ThingCard from "./ThingCard";
import MoodCard from "../Components/MoodCard";
import TerrainCard from "./TerrainCard";
import Loader from '../Components/Loader'

class GroupCards extends React.Component{

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          {this.props.loadingArc ? (
            <Loader style={'text-arc'}/>
          ):(
            <ArcCard arc={this.props.arc}/>
          )}
        </div>
        <div className="col-md-6">
          {this.props.loadingThing ? (
            <Loader style={'text-thing'}/>
          ):(
            <ThingCard thing={this.props.thing}/>
          )}
        </div>
        <div className="col-md-6">
          {this.props.loadingTerrain ? (
            <Loader style={'text-terrain'}/>
          ):(
            <TerrainCard terrain={this.props.terrain}/>
          )}
        </div>
        <div className="col-md-6">
          {this.props.loadingTerrain ? (
            <Loader style={'text-mood'}/>
          ):(
              <MoodCard mood={this.props.mood}/>
          )}
        </div>
      </div>
    );
  }
}
export default GroupCards;