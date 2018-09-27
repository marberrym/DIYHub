import React from 'react';

// I've forgotten where this is set globally so...
let API_URL="http://diyhub.fun:5000"

let fetchFeatured = (Component) =>
    class FetchFeatured extends React.Component{
        componentDidMount() {
            fetch(API_URL + '/project/featured')
                .then(res => res.json())
                .then (project => {
                    console.log(project);
                    this.props.dispatch({
                        type: 'LOAD_FEATURED',
                        featured: project
                    });
                });
        }
        render() {
            return <Component {...this.props}/>
        }
    }

export default fetchFeatured;