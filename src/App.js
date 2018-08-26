import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Widgets from "./containers/Widgets";
import ChatContainer from "./containers/Chat";
import configureStore from './stores';


const store = configureStore();


const App = () => {
  return (
    <Provider store={store}>
      <ChatContainer />
    </Provider>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));