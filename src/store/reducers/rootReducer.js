import authReducer from "./authReducer";
import interviewReducer from "./interviewReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    interview: interviewReducer
})

export default rootReducer