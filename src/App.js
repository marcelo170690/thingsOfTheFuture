import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Play from './Views/Play'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container-global">
        <Switch>
          <Route exact path="/play" component={Play}/>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
