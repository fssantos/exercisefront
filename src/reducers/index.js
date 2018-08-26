import { combineReducers } from "redux";
import widgetsReducer from "./widgetsReducer";
import chatReducer from "./chatReducer";



const reducers = {
    widgetsReducer,
    chatReducer,
}

const combined = combineReducers(reducers);

module.exports = combined;
