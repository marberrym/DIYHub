import React from 'react';
import KeyWord from './FilterComponents/KeyWord';
import Category from './FilterComponents/Category';
import Cost from './FilterComponents/Cost';
import Time from './FilterComponents/Time';

let BrowseParams = (props) =>
    <form className="subText browseForm">
        <KeyWord keyword={props.keyword} update={props.update} />
        <Category category={props.category} update={props.update}/>
        <Cost cost={props.cost} update={props.update}/>
        <Time time={props.time} update={props.update}/>
    </form>

export default BrowseParams;