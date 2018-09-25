import React, { Component } from 'react';
import '../Styles/App.css';
import NavBar from '../Page Components/NavBar';
import HeadLogo from '../Page Components/HeadLogo';
import HomeScreen from './HomeScreen';
import BrowseButton from '../Page Components/BrowseButton';

class App extends Component {
  render() {
    return (
      <div className="flexC">
        <NavBar/>
        <HomeScreen /> 
        <HeadLogo />
        <BrowseButton /> 
      </div>
    );
  }
}

export default App;
