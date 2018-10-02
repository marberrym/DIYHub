import React from 'react';
import url from '../globalVars';

let fetchFeatured = (Component) =>
    class FetchFeatured extends React.Component{
        componentDidMount() {
            fetch(url + '/project/featured')
                .then(res => res.json())
                .then (featureprojects => {
                    this.props.dispatch({
                        type: 'LOAD_FEATURED',
                        featured: featureprojects
                    });
                });
        }
        render() {
            return <Component {...this.props}/>
        }
    }

export default fetchFeatured;
