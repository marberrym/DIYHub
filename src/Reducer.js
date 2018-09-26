let reducer = (oldState, action) => {
    if(action.type === "LOGOUT") {
        let emptyuser = {user: "",
                    id: ""}
        
        let newState = {...oldState,
            user: emptyuser}
        return newState
    } else {
        return oldState;
    }
    
}

export default reducer;