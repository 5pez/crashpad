import { React, Fragment } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import FilterablePropertyGrid from "./components/FilterablePropertyGrid";
import PropertyPage from "./components/PropertyPage";
import CreateListing from "./components/CreateListing";
import Register from "./components/Register";
import Login from "./components/Login";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.crashpad.dev/pads")
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <div className="">Loading...</div>
  ) : (
    <>
      <Navbar />

      <Switch>
        <Route
          path={`/create-listing`}
          exact={true}
          component={CreateListing}
        />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/pad/:id" exact={true} component={PropertyPage} />
        <Route path="/" exact={true}>
          <FilterablePropertyGrid properties={properties} />
        </Route>
      </Switch>
    </>
  );
}
export default App;
