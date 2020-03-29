const reducer = (state, action) => {
    switch(action.type){
        case 'SET_FAVORITE':
            const stateNotRepeat = state.myList.filter(items => items.id !== action.payload.id)
            return {
                ...state,
                myList: [
                    ...stateNotRepeat,
                    action.payload
                ]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default reducer