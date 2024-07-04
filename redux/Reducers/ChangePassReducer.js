const initialState = {
    CHANGEPASSRES: '',
}

const ChangePassReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'changepassword':
            console.log("Reducer Calling");
            return { ...state, CHANGEPASSRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default ChangePassReducer;

