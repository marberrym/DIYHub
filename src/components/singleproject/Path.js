import React from 'react';
import { Link } from 'react-router-dom';

let Path = (props) =>
    <div>
        <Link className="noDec" to="/">DIY Hub &raquo; </Link>    
        {/* <Link className="noDec" to="/category/crafts">Crafts &raquo; </Link> */}
    </div>

export default Path;