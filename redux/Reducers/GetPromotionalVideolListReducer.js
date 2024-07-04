const initialState = {
    PROMOTIONALVIDEORES: '',
}

const GetPromotionalVideolListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'promotionalvideo':
            // console.log("Reducer Calling");
            return { ...state, PROMOTIONALVIDEORES: action.payload, loading: false };
        default:
            return state;
    }
};

export default GetPromotionalVideolListReducer;

