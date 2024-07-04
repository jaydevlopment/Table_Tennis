const initialState = {
    UPLOADIMAGE: '',
}

const UploadImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'uploadimage':
            console.log("Reducer Calling");
            return { ...state, UPLOADIMAGE: action.payload, loading: false };
        default:
            return state;
    }
};

export default UploadImageReducer;

