import React from 'react';
import { Link } from 'react-router-dom';

let BrowseButton = () =>
    <Link to='/browse'><button className="browseBtn">Browse Projects</button></Link>

export default BrowseButton;