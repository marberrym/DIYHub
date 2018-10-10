let logout = (oldState, action) => ({...oldState, user: {}})
let assignuser = (oldState, action) => ({...oldState, user: action.package})
let loadprojects = (oldState, action) => ({...oldState, projects: action.projects})
let loadfeatured = (oldState, action) => ({...oldState, featured: action.featured })
let loadproject = (oldState, action) => ({...oldState, project: action.project})
let settoast = (oldState, action) => ({...oldState, toast: action.toast})
let loadedit = (oldState, action) => ({...oldState, edit: action.edit})
let loadamazon = (oldState, action) => ({...oldState, amazonSearch: action.items})
let loaduserstats = (oldState, action) => ({...oldState, user: {...oldState.user, stats: action.stats}}) 

let actionRouter = {
    "LOGOUT": logout,
    "ASSIGN_USER": assignuser,
    "LOAD_PROJECTS": loadprojects,
    "LOAD_FEATURED": loadfeatured,
    "LOAD_PROJECT": loadproject,
    "SET_TOAST": settoast,
    "LOAD_EDIT": loadedit,
    "LOAD_AMAZON": loadamazon,
    "LOAD_USER_STATS": loaduserstats
}

let reducer = (oldState, action) => {
    if (actionRouter[action.type]) {
        return actionRouter[action.type](oldState, action)
    } else {
        return oldState
    }
}

export default reducer;