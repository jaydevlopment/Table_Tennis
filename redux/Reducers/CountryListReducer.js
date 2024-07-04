const initialState = {
    COUNTRYLISTRES: '',
}

const CountryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getcountrylist':
            console.log("Reducer Calling");
            return { ...state, COUNTRYLISTRES: action.payload, loading: false };
        default:
            return state;
    }
};

export default CountryListReducer;

