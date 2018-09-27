let reducer = (oldState, action) => {
    if(action.type === "LOGOUT") {
        let emptyuser = {user: "",
                    id: ""}
        
        let newState = {...oldState,
            user: emptyuser}
        return newState
    } else if (action.type === "ASSIGN_USER"){
        let newUser = action.package
        let newState = {...oldState,
            user: newUser}
        return newState;
    } else if (action.type === "LOAD_PROJECTS") {
        return {...oldState, projects: action.projects}
    } else if (action.type === "LOAD_FEATURED") {
        return { ...oldState, featured: action.featured }
    } else if (action.type === "LOAD_PROJECT") {
        return {...oldState, project: action.project}
    }
    else {
        return oldState;
    }
}

export default reducer;