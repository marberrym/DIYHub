import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    FacebookShareButton, FacebookIcon,
    GooglePlusShareButton, GooglePlusIcon,
    LinkedinShareButton, LinkedinIcon,
    TwitterShareButton, TwitterIcon,
    RedditShareButton, RedditIcon,
    TumblrShareButton, TumblrIcon,
    EmailShareButton, EmailIcon
  } from 'react-share';
import url from '../../globalVars';

let SocialIcons = (props) =>
    <div className="socialIcons">
        <FacebookShareButton title={props.title} url={`${url}/#${props.history.location.pathname}`} className="socialBtn"
        quote={`DIYHub presents ${props.title}`}>
                <FacebookIcon size={32} round={true}/>
        </FacebookShareButton>
        <GooglePlusShareButton url={`${url}/#${props.history.location.pathname}`} className="socialBtn"
        title={props.title}>
            <GooglePlusIcon size={32} round={true}/>
        </GooglePlusShareButton>
        <LinkedinShareButton url={`${url}/#${props.history.location.pathname}`} className="socialBtn"
        title={props.title}>
            <LinkedinIcon size={32} round={true}/>
        </LinkedinShareButton>
        <TwitterShareButton url={`${url}/#${props.history.location.pathname}`} className="socialBtn"
        title={props.title} via='DIYHub'>
            <TwitterIcon size={32} round={true}/>
        </TwitterShareButton>
        <RedditShareButton url={`${url}/#${props.history.location.pathname}`} className="socialBtn"
        title={props.title}>
            <RedditIcon size={32} round={true}/>
        </RedditShareButton>
        <TumblrShareButton url={`${url}/#${props.history.location.pathname}`} className="socialBtn"
        title={props.title}>
            <TumblrIcon size={32} round={true}/>
        </TumblrShareButton>
        <EmailShareButton url={`${url}/#${props.history.location.pathname}`} className="socialBtn"
        subject={props.title}>
            <EmailIcon size={32} round={true}/>
        </EmailShareButton>
    </div>

export default withRouter(SocialIcons);