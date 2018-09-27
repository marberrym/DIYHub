import url from '../globalVars';

let postSignup = (data, callback) => 
    fetch(url + "/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",     
        },
        body: JSON.stringify(data)
    })
    .then(response => {console.log(response)
        return response.json()})
    .then(callback('/'))

export default postSignup;