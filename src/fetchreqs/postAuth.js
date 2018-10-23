import url from '../globalVars';

let postAuth = (data, callback, dispatch) => {
    let myStorage = window.localStorage;
    return fetch(url + '/authenticate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",     
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        if (response.token) {
            myStorage.setItem('token', response.token);
            callback('/');
            dispatch({
                type: 'SET_TOAST',
                toast: {
                    text: 'You successfully logged in!',
                    type: 'success'
                }
            });
            return response;
        } else {
            dispatch({
                type: 'SET_TOAST',
                toast: {
                    text: 'Invalid Login.  Please try again',
                    type: 'error'
                }
            });
        }
    })
    .then(response => {
        if (response) {
            let token = {token: response.token}
            return fetch(url + "/validate", {
                method: "POST",
                headers: {"Content-Type": "application/json; charset=utf-8",},
                body: JSON.stringify(token)
            })
        }
    }).then(response => response && response.json())
    .then(response => {
        if (response) {
            dispatch({type: "ASSIGN_USER", package: {
                    name: response.name,
                    id: response.id,
                    avatar: response.avatar,
                    collaborations: response.collaborations,
                    admin: response.admin
                }})
        }
    })
}

export default postAuth;