const initialState = {
    USERDETAILSRES: '',
}

const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'userdetails':
            // console.log("Reducer Calling");
            return { ...state, USERDETAILSRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default userDetailsReducer;

