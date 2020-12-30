import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from './utils/Routers'
import "./App.css";


// redux
import { Provider } from "react-redux";
import store from "./store";


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
       <Routers/>
      </Fragment>
    </Router>
    </Provider>
  );
};

export default App;
