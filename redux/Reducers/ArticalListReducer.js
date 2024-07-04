const initialState = {
    ARTICALLISTRES: '',
}

const ArticalListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'articallist':
            console.log("Reducer Calling");
            return { ...state, ARTICALLISTRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default ArticalListReducer;

