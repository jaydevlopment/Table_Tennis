import { createStore, combineReducers } from 'redux';
import pageReducer from '../Reducers/pageList';
import LoginReducer from '../Reducers/LoginReducer';
import SignUpReducer from '../Reducers/SignupReducer';
import ForgotPassReducer from '../Reducers/ForgotPassReducer';
import VerifyOtpReducer from '../Reducers/VerifyOtpReducer';
import ResetPassReducer from '../Reducers/ResetPassReducer';
import ChangePassReducer from '../Reducers/ChangePassReducer';
import UploadPlayerReducer from '../Reducers/UploadPlayerReducer';
import GetPlayerListReducer from '../Reducers/GetPlayerListReducer';
import PlayerVIdeoDelReducer from '../Reducers/PlayerVIdeoDelReducer';
import UpdatePlayerReducer from '../Reducers/UpdatePlayerReducer';
import CountryListReducer from '../Reducers/CountryListReducer';
import UploadImageReducer from '../Reducers/UploadImageReducer';
import AddTeamReducer from '../Reducers/AddTeamReducer';
import GetPromotionalVideolListReducer from '../Reducers/GetPromotionalVideolListReducer';
import GetPlayerListHomeReducer from '../Reducers/GetPlayerListHomeReducer';
import ArticalListReducer from '../Reducers/ArticalListReducer';
import userDetailsReducer from '../Reducers/userDetailsReducer';
import SubcribeplanReducer from '../Reducers/SubcribePlanReducer';
import updateProfileReducer from '../Reducers/updateProfileReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
    { 
        pageList: pageReducer, 
        loginReducer: LoginReducer,
        SignUpReducer:SignUpReducer,
        ForgotPassReducer:ForgotPassReducer,
        VerifyOtpReducer: VerifyOtpReducer,
        ResetPassReducer:ResetPassReducer,
        ChangePassReducer:ChangePassReducer,
        UploadPlayerReducer:UploadPlayerReducer,
        GetPlayerListReducer:GetPlayerListReducer,
        AddTeamReducer:AddTeamReducer,
        PlayerVIdeoDelReducer:PlayerVIdeoDelReducer,
        UpdatePlayerReducer:UpdatePlayerReducer,
        CountryListReducer:CountryListReducer,
        UploadImageReducer:UploadImageReducer,
        ArticalListReducer:ArticalListReducer,
        GetPromotionalVideolListReducer:GetPromotionalVideolListReducer,
        GetPlayerListHomeReducer:GetPlayerListHomeReducer,
        userDetailsReducer:userDetailsReducer,
        SubcribeplanReducer:SubcribeplanReducer,
        updateProfileReducer:updateProfileReducer,

    }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;