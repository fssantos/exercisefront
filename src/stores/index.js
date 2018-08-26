import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import logger from "redux-logger"
import thunk from "redux-thunk";;


function reduxStore(initialState) {
    const middleware = [thunk, logger];
    const store = createStore(reducers,
        initialState,
        compose(
            applyMiddleware(...middleware)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )

    return store;
}

export default reduxStore;

