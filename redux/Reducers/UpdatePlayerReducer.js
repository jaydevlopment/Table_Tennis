const initialState = {
    UPDATEPLAYERRES: '',
}

const UpdatePlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'updateplayer':
            console.log("Reducer Calling");
            return { ...state, UPDATEPLAYERRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default UpdatePlayerReducer;

