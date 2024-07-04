const initialState = {
    PLAYERVIDEODELETERES: '',
}

const PlayerVIdeoDelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'playerdelete':
            console.log("Reducer Calling");
            return { ...state, PLAYERVIDEODELETERES: action.payload, loading: false };
        default:
            return state;
    }
};

export default PlayerVIdeoDelReducer;

