import React from 'react';
import priceRange from '../priceRange';
import timeRange from '../timeRange';
import url from '../../globalVars';

let Header = (props) =>
    <div className="headerMainPost">
        <div className="mainHead">
            {props.project_title}
            <div className="upVotes">
                <i class="fas fa-arrow-alt-circle-up voteArrow" onClick={event => {
                    let newVoteTally = props.votes + 1;
                    let vote = {
                        project_id: props.id,
                        votes: newVoteTally,
                        userid: localStorage.id,
                        token: localStorage.token
                    }
                    fetch(`${url}/updatevote`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",     
                        },
                        body: JSON.stringify(vote)
                    })
                    .then(response => response.json())
                    .then(response => console.log(response))
                }}></i>
                {`${props.votes} upvotes`}
            </div>
        </div>
        <div>By {props.first_name} {props.last_name}</div>
        <div>{props.project_description}</div>
        <div>Time: {timeRange[props.time_range]}</div>
        <div>Cost: {priceRange[props.cost_range]}</div>
    </div>

export default Header;