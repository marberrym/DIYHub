import React from 'react';

let KeyWord = (props) =>
    <label className="formInputField">Keyword: <input className="keywordInput" type="text" value={props.keyword} 
    onChange={(event) => {
        props.update('keyword', event.target.value);
    }}/></label>

export default KeyWord;