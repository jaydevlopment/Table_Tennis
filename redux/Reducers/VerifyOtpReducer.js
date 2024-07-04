const initialState = {
    VERIFYOTPRES: '',
}

const VerifyOtpReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'verifyotp':
            return { ...state, VERIFYOTPRES: action.payload, loading: false };

        default:
            return state;
    }
};

export default VerifyOtpReducer;

