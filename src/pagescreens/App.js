import React, { Component } from 'react';
import '../cssstyles/App.css';
import NavBar from '../components/NavBar';
import HeadLogo from '../components/HeadLogo';
import HomeScreen from './HomeScreen';
import BrowseButton from '../components/BrowseButton';

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
