import React from 'react';
import priceRange from '../priceRange';
import timeRange from '../timeRange';

let Header = (props) =>
    <div className="headerMainPost">
        <div className="mainHead">
            {props.project_title}
            <div className="upVotes">
                <i class="fas fa-arrow-alt-circle-up voteArrow"></i>
                {`${props.votes} upvotes`}
            </div>
        </div>
        <div>By {props.first_name} {props.last_name}</div>
        <div>{props.project_description}</div>
        <div>Time: {timeRange[props.time_range]}</div>
        <div>Cost: {priceRange[props.cost_range]}</div>
    </div>

export default Header;