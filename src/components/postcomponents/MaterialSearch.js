import React from 'react';
let MaterialSearch = (props) =>
  <div className="material-search">
    <label className="formInputField">{props.text}<input type="text" value={props.materialSearch} 
        placeholder="Material" onChange={event => {
            props.update('materialSearch', event.target.value)
        }} />
    </label>
    <button type="button" onClick={() => {
      props.searchAmazon(props.materialSearch);
      props.update('materialSearch', '');
    }}>Find Material</button>
  </div>

export default MaterialSearch;