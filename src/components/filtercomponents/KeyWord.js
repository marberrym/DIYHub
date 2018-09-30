import React from 'react';

let KeyWord = (props) =>
    <label className="formInputField">Keyword: <input type="text" value={props.keyword} 
    placeholder="keyword" onChange={(event) => {
        props.update('keyword', event.target.value);
    }}/></label>

export default KeyWord;