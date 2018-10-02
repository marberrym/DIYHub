import React from 'react';
import priceRange from '../priceRange';
import timeRange from '../timeRange';
import url from '../../globalVars';
import { connect } from 'react-redux';
import { getPost } from '../inject-project';

let Header = (props) =>
    <div className="headerMainPost">
        <div className="mainHead">
            {props.project_title}
            {!props.votestatus ?
                <div className="upVotes">
                    <i className="fas fa-arrow-alt-circle-up voteArrow" onClick={event => {
                        let vote = {
                            project_id: props.id,
                            userid: localStorage.id,
                            token: localStorage.token,
                            method: "add"
                        }
                        fetch(`${url}/updatevote`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json; charset=utf-8",     
                            },
                            body: JSON.stringify(vote)
                        })
                        .then(response => response.json())
                        .then(response => {console.log(response)
                            getPost(props.dispatch, props.id)
                        })
                    }}></i>
                    {`${props.votecount} upvotes`}
                </div>
            :
                <div className="downVotes">
                    <i className="fas fa-arrow-alt-circle-down voteArrow" onClick={event => {
                        let vote = {
                            project_id: props.id,
                            userid: localStorage.id,
                            token: localStorage.token,
                            method: "remove"
                        }
                        fetch(`${url}/updatevote`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json; charset=utf-8",     
                            },
                            body: JSON.stringify(vote)
                        })
                        .then(response => response.json())
                        .then(response => {console.log(response)
                            getPost(props.dispatch, props.id)
                        })
                    }}></i>
                    {`${props.votecount} upvotes`}
                </div>
            }
        </div>
        <div>By {props.first_name} {props.last_name}</div>
        <div>{props.project_description}</div>
        <div>Time: {timeRange[props.time_range]}</div>
        <div>Cost: {priceRange[props.cost_range]}</div>
    </div>

let HeaderSmart = connect(state => ({votecount: state.project.votes, votestatus: state.project.votestatus}))(Header)
export default HeaderSmart;