import React from "react";
import "./App.css";
import FilterablePropertyGrid from "./components/FilterablePropertyGrid";
import Navbar from "./components/Navbar";
import PropertyPage from "./components/PropertyPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PROPERTIES from "./properties.json";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>{!data ? "Loading..." : data}</p>
  //     </header>
  //   </div>
  // );
  return (
    <>
      <Navbar />
      <Router>
        {/* Fix routing later. Won't render PropertyPage component */}
        <Switch>
          <Route path="/" exact>
            <FilterablePropertyGrid properties={PROPERTIES} />
          </Route>
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
