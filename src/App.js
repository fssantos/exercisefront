import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import configureStore from './stores';
import Dashboard from "./components/Dashboard";


const store = configureStore();


const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));