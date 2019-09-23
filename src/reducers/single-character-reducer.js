// Reducer
let initialState = {};
export default function (state = initialState, action) {
    switch (action.type) {
        case 'SINGLE_CHARACTER_DATA':
            return {...state, ...action.payload};
        default:
            return state
    }
}