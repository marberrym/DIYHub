import React from 'react';
import KeyWord from './filtercomponents/KeyWord';
import Category from './filtercomponents/Category';
import Cost from './filtercomponents/Cost';
import Time from './filtercomponents/Time';

let BrowseParams = (props) =>
    <form className="subText browseForm">
        <KeyWord keyword={props.keyword} update={props.update}/>
        <Category category={props.category} update={props.update}/>
        <Cost cost={props.cost} update={props.update}/>
        <Time time={props.time} update={props.update}/>
    </form>

export default BrowseParams;