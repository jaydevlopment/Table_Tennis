const initialState = {
    ADDTEAMRES: '',
}

const AddTeamReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addteam':
            console.log("Reducer Calling");
            return { ...state, ADDTEAMRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default AddTeamReducer;

