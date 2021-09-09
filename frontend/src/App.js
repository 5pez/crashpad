import React from "react";
import "./App.css";
import FilterablePropertyGrid from "./components/FilterablePropertyGrid";
import Navbar from "./components/Navbar";
import PropertyPage from "./components/PropertyPage";
import CreateListing from "./components/CreateListing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PROPERTIES from "./properties.json";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <FilterablePropertyGrid properties={PROPERTIES} />
          </Route>
          {/* TODO: Fix bug where create-listing doesnt wipe the current stuff */}
          <Route path="/create-listing" exact component={CreateListing} />
          <Route path="/pad/:id" exact component={PropertyPage} />
        </Switch>
      </Router>
      <div class="flex flex-col">
        <footer class="h-8 bg-gray-800 text-center text-yellow-500">
          <p>Disclaimer: None of the above properties are actually for rent.</p>
        </footer>
      </div>
    </>
  );
}
export default App;
