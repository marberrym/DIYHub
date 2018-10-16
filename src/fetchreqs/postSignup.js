import url from '../globalVars';

let postSignup = (dispatch, data, redirect, cb) => 
    fetch(url + "/signup", {
        method: "POST",
        body: data
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success'){
            dispatch({
                type: 'SET_TOAST',
                toast: {
                    text: 'You are registered!',
                    type: 'success'
                }
            });
            redirect('/');
            cb();
        } else {
            dispatch({
                type: 'SET_TOAST',
                toast: {
                    text: 'Invalid sign up.  Please try again.',
                    type: 'error'
                }
            });
        }
    })

export default postSignup;