import React, { Component } from 'react';
import '../Styles/App.css';
import NavBar from '../Page Components/NavBar';
import HeadLogo from '../Page Components/HeadLogo';
import PostScreen from './PostScreen';

class App extends Component {
  render() {
    return (
      <div className="flexC">
        <NavBar/>
        <HeadLogo />
        <PostScreen />  
      </div>
    );
  }
}

export default App;
