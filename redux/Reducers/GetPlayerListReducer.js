const initialState = {
    GETPLAYERRES: '',
}

const GetPlayerListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getallplayer':
            console.log("Reducer Calling");
            return { ...state, GETPLAYERRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default GetPlayerListReducer;

