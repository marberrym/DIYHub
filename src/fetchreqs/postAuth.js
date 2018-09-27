import url from '../globalVars';

let postAuth = (data, callback) => {
    let myStorage = window.localStorage;
    console.log(data);
    console.log(callback);
    return fetch(url + '/authenticate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",     
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        if (response.token) {
            myStorage.setItem('token', response.token);
            callback('/');
            return response;
        }
    })
    .then(response => {
        console.log(response)
        let token = {token: response.token}
        return fetch(url + "/validate", {
            method: "POST",
            headers: {"Content-Type": "application/json; charset=utf-8",},
            body: JSON.stringify(token)
        })
    }).then(response => response.json())
    .then(response => {
        myStorage.setItem('name', response.name);
        myStorage.setItem('id', response.id);
    })
}

export default postAuth;