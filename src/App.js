import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Widgets from "./containers/Widgets";
import Chat from "./containers/Chat";
import PageViewsGraph from "./containers/PageViewsGraph";
import configureStore from './stores';


const store = configureStore();


const App = () => {
  return (
    <Provider store={store}>
      <PageViewsGraph />
    </Provider>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));