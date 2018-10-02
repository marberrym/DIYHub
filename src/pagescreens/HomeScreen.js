import React from 'react';
import { connect } from 'react-redux';
import HomePost from '../components/HomePost';
import fetchFeatured from '../components/fetchfeatured';

let HomeScreen = () => 
    <HomePost />;

let HomeScreenSmart = connect()(fetchFeatured(HomeScreen))
export default HomeScreenSmart;