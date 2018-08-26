import { combineReducers } from "redux";
import widgetsReducer from "./widgetsReducer";
import chatReducer from "./chatReducer";
import pageViewsReducer from "./pageViewsReducer";



const reducers = {
    widgetsReducer,
    chatReducer,
    pageViewsReducer,
}

const combined = combineReducers(reducers);

module.exports = combined;
