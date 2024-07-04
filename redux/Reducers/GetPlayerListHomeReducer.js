const initialState = {
    GETPLAYERHOMERES: '',
}

const GetPlayerListHomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'gethomeplayer':
            return { ...state, GETPLAYERHOMERES: action.payload, loading: false };
        default:
            return state;
    }
};

export default GetPlayerListHomeReducer;

