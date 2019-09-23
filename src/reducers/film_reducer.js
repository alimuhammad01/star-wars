// Reducer
let initialState = "";
export default function (state = initialState, action) {
    console.log("reducerrrrrrrrrrrrrrr", action, state)
    switch (action.type) {
        case 'SINGLE_FILM_DATA':
            return {...state, ...action.payload};
        default:
            return state
    }
}