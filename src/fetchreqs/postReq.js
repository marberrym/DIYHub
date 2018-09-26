let postReq = (url, data, callback) => {
    console.log(data);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",     
        },
        body: JSON.stringify(data)
    })
    .then(response => {console.log(response)
        return response.json()})
    .then(response => {
        let myStorage = window.localStorage;
        console.log(response)
        if (response.token) {
            myStorage.setItem('token', response.token);
            callback('/');
        }
    }) 
}

export default postReq;