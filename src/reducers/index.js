import { combineReducers } from 'redux';

import AllCharactersReducer from './all-characters-reducer';
import SingleCharacterReducer from './single-character-reducer';
import SingleMovieReducer from './film_reducer';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    allCharactersList: AllCharactersReducer,
    singleCharacterData: SingleCharacterReducer,
    singleMovieUrl: SingleMovieReducer
});

export default rootReducer;
