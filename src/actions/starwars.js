export const mapStateToProps = (state) => {
    return {
        allCharactersData: state.allCharactersList,
        singleCharacter: state.singleCharacterData,
        singleMovieData: state.singleMovieUrl
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        // explicitly forwarding arguments
        setAllCharactersData: (data) => {
            console.log("dataaaaaaaaaaaaa", data);
            dispatch({type: 'ALL_CHARACTERS_LIST', payload: data});
        },
        setSingleCharacterData: (data) => {
            dispatch({type: 'SINGLE_CHARACTER_DATA', payload: data});
        },
        setSingleMovieData: (data) => {
            console.log("mmmmmmmmmmmmmmmmmm",data);
            dispatch({type: 'SINGLE_FILM_DATA', payload: data});
        }
        // implicitly forwarding arguments
        // onReceiveImpressions: (...impressions) =>
        //     dispatch(trackImpressions(impressions))
    }
}