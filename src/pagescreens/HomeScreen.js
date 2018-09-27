import React from 'react';
import { connect } from 'react-redux';
import HomePost from '../components/HomePost';
import fetchFeatured from '../components/fetchfeatured';

let HomeScreen = (props) => 
    <HomePost />;

let HomeScreenSmart = connect(state => ({featured: state.featured}))(fetchFeatured(HomeScreen))
export default HomeScreenSmart;