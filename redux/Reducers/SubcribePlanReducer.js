const initialState = {
   SUBCRIBEPLANRES: '',
}

const SubcribeplanReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Subcribeplan':
             console.log("Reducer Calling");
            return { ...state, SUBCRIBEPLANRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default SubcribeplanReducer;