const initialState = {
    UPLOADPLAYERRES: '',
}

const UploadPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'uploadplayer':
            console.log("Reducer Calling");
            return { ...state, UPLOADPLAYERRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default UploadPlayerReducer;

