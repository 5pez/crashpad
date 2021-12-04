import { React, Fragment } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import {
  FilterablePropertyGrid,
  PropertyPage,
  CreateListing,
  Navbar,
  Login,
  Register,
  Privacy,
} from "./index";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";
const dotenv = require("dotenv").config();

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [isLoading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URL}/properties`)
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <div className="text-center">
      Loading... or maybe something is awfully wrong
    </div>
  ) : (
    <>
      <Navbar />
      <Switch>
        <Route
          path={`/create-listing`}
          exact={true}
          component={CreateListing}
        />
        {/* <Route path={`/`} exact={true} component={Hero} /> */}
        <Route path={"/privacy"} exact={true} component={Privacy} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/auth/google" exact={true} component={Register} />
        {/* <Route path="/pad/:id" exact={true} component={PropertyPage} /> */}
        <Route path="/properties/:id" exact={true} component={PropertyPage} />
        <Route path="/" exact={true}>
          <FilterablePropertyGrid properties={properties} />
        </Route>
      </Switch>
    </>
  );
}
export default App;
