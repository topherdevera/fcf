import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Home from '../components/Home/Home';
import Register from '../components/EntryForm/Register/Register';
import PassengerEntry from '../components/EntryForm/PassengerEntry/PassengerEntry';
import VehicleEntry from '../components/EntryForm/VehicleEntry/VehicleEntry';
import LocationEntry from '../components/EntryForm/LocationEntry/LocationEntry';
import BookPassenger from '../components/BookPassenger/BookPassenger';
import Signin from '../components/EntryForm/Signin/Signin';
import './App.css';
import 'tachyons';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return(
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
          {  
            this.state.route === 'signin'
            ? 
            <Signin onRouteChange={this.onRouteChange}/>
            :               
              (
                 this.state.route === 'home'
                  ? 
                  <Home onRouteChange={this.onRouteChange}/>
                  :  
                    ( 
                      this.state.route === 'register'
                      ?
                      <Register onRouteChange={this.onRouteChange}/>
                      :
                      (
                        this.state.route === 'passenger'
                        ?
                        <PassengerEntry onRouteChange={this.onRouteChange}/> 
                        :
                        (
                          this.state.route === 'vehicle'
                          ?
                          <VehicleEntry onRouteChange={this.onRouteChange}/>
                          :
                          (
                            this.state.route === 'booking'
                            ?
                            <BookPassenger onRouteChange={this.onRouteChange}/>
                            :
                            <LocationEntry onRouteChange={this.onRouteChange}/>
                          )
                          
                        )
                        
                      )
                      
                    )
              )      
          }   
      </div>
     );
  }
}

export default App;
