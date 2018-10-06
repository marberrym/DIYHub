import React from 'react';
let MaterialSearch = (props) =>
  <div className="material-search formInputField">
    <label className="formInputField">{props.text}<input className="titleInput" type="text" value={props.materialSearch} 
        onChange={event => {
            props.update('materialSearch', event.target.value)
        }} />
    </label>
    <button className="button" type="button" onClick={() => {
      props.searchAmazon(props.materialSearch);
      props.update('materialSearch', '');
    }}>Find Material</button>
  </div>

export default MaterialSearch;