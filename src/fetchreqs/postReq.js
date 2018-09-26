let postReq = (url, data) => {
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
        if (response.token) {
            myStorage.setItem('webtoken', response.token)
        }
    }) 
}

export default postReq;