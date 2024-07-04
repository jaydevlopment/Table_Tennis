const initialState = {
    FORGOTPASS: '',
}

const ForgetPassReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'forgotpassword':
            return { ...state, FORGOTPASS: action.payload, loading: false };

        default:
            return state;
    }
};

export default ForgetPassReducer;

