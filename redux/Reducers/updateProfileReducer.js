const initialState = {
    UPDATEPROFILERES: '',
}

const updateProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'updateprofile':
            console.log("Reducer Calling");
            return { ...state, UPDATEPROFILERES: action.payload, loading: false };
        default:
            return state;
    }
};

export default updateProfileReducer;

