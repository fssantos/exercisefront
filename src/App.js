import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Widgets from "./containers/Widgets";
import configureStore from './stores';


const store = configureStore();


const App = () => {
  return (
    <Provider store={store}>
      <Widgets />
    </Provider>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));