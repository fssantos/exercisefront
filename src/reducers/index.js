import { combineReducers } from "redux";
import widgetsReducer from "./widgetsReducer";



const reducers = {
    widgetsReducer,
}

const combined = combineReducers(reducers);

module.exports = combined;
