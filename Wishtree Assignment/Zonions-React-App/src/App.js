import React from "react";
import { Route, Switch } from "react-router-dom";
import AddRestaurent from "./AddRestaurent";
import Admin from "./Admin";
import "./App.css";
import EditRestaurent from "./EditRestaurent";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import RestaurentDetails from "./RestaurentDetails";
import View from "./View";


function App() {
  //Configuring Paths
  return (
    <div className="App">
      <Switch>

        <Route exact path="/" component={View} />
        <Route exact path="/details" component={RestaurentDetails} />
        <Route exact path="/add_restaurent" component={AddRestaurent} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/edit" component={EditRestaurent} />

      </Switch>
    </div>
  );
}

export default App;
