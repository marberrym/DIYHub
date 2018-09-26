let postReq = (url, data) => {
    console.log(data);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",     
        },
        body: JSON.stringify(data)
    })
    .then(response => console.log(response)); 
}

export default postReq;