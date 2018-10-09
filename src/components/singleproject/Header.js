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
            {props.user.id ?
                !props.votestatus ?
                    <div className="upVotes">
                        <i className="fas fa-arrow-alt-circle-up voteArrow" onClick={event => {
                            let vote = {
                                project_id: props.id,
                                userid: props.user.id,
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
                            .then(response => {
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
                                userid: props.user.id,
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
                            .then(response => {
                                getPost(props.dispatch, props.id)
                            })
                        }}></i>
                        {`${props.votecount} upvotes`}
                    </div>
            :
                <div className="upVotes">
                    {`${props.votecount} upvotes`}
                </div>
            }
        </div>
        <div className="postTraits">Submitted By {props.first_name} {props.last_name}</div>
        <div className="postTraits">Required Time: {timeRange[props.time_range]}</div>
        <div className="postTraits">Material Cost: {priceRange[props.cost_range]}</div>
        <div className="postDescrip">{props.project_description}</div>
    </div>

let HeaderSmart = connect(state => ({votecount: state.project.votes, votestatus: state.project.votestatus, user: state.user}))(Header)
export default HeaderSmart;
