// Reducer
let initialState = {};
export default function (state = initialState, action) {
    switch (action.type) {
        case 'ALL_CHARACTERS_LIST':
            return {...state, ...action.payload};
        default:
            return state
    }
}