import React from 'react';
import NavBar from '../components/NavBar';
import HeadLogo from '../components/HeadLogo'

let NotFound = () =>
    <div className="pageLayout">
        <NavBar/>
        <HeadLogo />
        <h1>Unfortunately, that page is not found.  Please try another link.</h1>
    </div>

export default NotFound;