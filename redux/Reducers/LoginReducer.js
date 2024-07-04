const initialState = {
    LOGINRES: '',
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Login':
            console.log("Reducer Calling");
            return { ...state, LOGINRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default LoginReducer;

