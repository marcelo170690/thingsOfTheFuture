import React from "react";

import GroupCards from "../Components/GroupCards";
import FormPlay from "../Components/FormPlay";
import axios from "axios";
import api from "../Api";

class Play extends React.Component{

  state = {
    arc: '',
    loadingArc: true,
    errorArc: null,
    thing: '',
    loadingThing: true,
    errorThing: null,
    terrain: '',
    loadingTerrain: true,
    errorTerrain: null,
    mood: '',
    loadingMood: true,
    errorMood: null,
  }

  componentDidMount() {
    this.getArc()
    this.getThing()
    this.getTerrain()
    this.getMood()
  }

  refreshCards = () => {
    this.getArc()
    this.getThing()
    this.getTerrain()
    this.getMood()
  }

  getArc(){
    this.setState({errorArc: null, loadingArc: true});
    axios.get(`${api.BASE_URL}api/getArc`)
        .then(response => {
          this.setState({arc: response.data, loadingArc: false});
        })
        .catch(error => {
          this.setState({errorArc: error, loadingArc: false});
        })
  }

  getThing(){
    this.setState({errorThing: null, loadingThing: true});
    axios.get(`${api.BASE_URL}api/getThing`)
        .then(response => {
          this.setState({thing: response.data, loadingThing: false});
        })
        .catch(error => {
          this.setState({errorThing: error, loadingThing: false});
        })
  }

  getTerrain(){
    this.setState({errorTerrain: null, loadingTerrain: true});
    axios.get(`${api.BASE_URL}api/getTerrain`)
        .then(response => {
          this.setState({terrain: response.data, loadingTerrain: false});
        })
        .catch(error => {
          this.setState({errorTerrain: error, loadingTerrain: false});
        })
  }

  getMood(){
    this.setState({errorMood: null, loadingMood: true});
    axios.get(`${api.BASE_URL}api/getMood`)
        .then(response => {
          this.setState({mood: response.data, loadingMood: false});
        })
        .catch(error => {
          this.setState({errorMood: error, loadingMood: false});
        })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <GroupCards
                arc = {this.state.arc}
                loadingArc = {this.state.loadingArc}
                errorArc = {this.state.errorArc}
                thing = {this.state.thing}
                loadingThing = {this.state.loadingThing}
                errorThing = {this.state.errorThing}
                terrain = {this.state.terrain}
                loadingTerrain = {this.state.loadingTerrain}
                errorTerrain = {this.state.errorTerrain}
                mood = {this.state.mood}
                loadingMood = {this.state.loadingMood}
                errorMood = {this.state.errorMood}
            />
          </div>
          <div className="col-md-6">
            <FormPlay refreshCards={this.refreshCards}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Play;