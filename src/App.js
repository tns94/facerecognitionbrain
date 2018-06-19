import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';

import 'tachyons'

const particlesOptions={
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:300
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
       <Navigation/>
       <Logo/>
       <Rank/>
       <ImageLinkForm/>
       {/*
       <FaceRecognition/>*/}
      </div>
    );
  }
}

export default App;
