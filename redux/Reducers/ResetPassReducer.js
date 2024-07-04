const initialState = {
    RESETPASSRES: '',
}

const ResetPassReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'resetpassword':
            return { ...state, RESETPASSRES: action.payload, loading: false };

        default:
            return state;
    }
};

export default ResetPassReducer;

