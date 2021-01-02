import React, { Fragment } from "react";
import { BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
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
       <Switch>
       <Route exact path="/dashboard" component={Dashboard} />
       </Switch>
      </Fragment>
    </Router>
    </Provider>
  );
};

export default App;
