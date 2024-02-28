export const appReducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
        case "ADD":
            return { ...state, user: [...state.user, action.payload] }
        case "DELETE":
            const newUser = state.user.filter((info) => info.id !== action.payload)
            return { ...state, user: newUser }
        case "EDIT":
            return { ...state, user: state.user.map((item) => item.id === action.payload.id ? action.payload : item) }   
        default:
            return state
    }
}