import url from "../globalVars";

let postProject = (data, callback) =>
    fetch(url + "/project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",     
        },
        body: JSON.stringify(data)
    })
    .then(response => {console.log(response)
        return response.json()})
    .then(callback('/'))
    .catch(err => console.log(err))

export default postProject;