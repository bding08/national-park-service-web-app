import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import ActivitySearch from "./components/pages/ActivitySearch";
import Webcam from "./components/pages/WebcamSearch";
import Park from "./components/pages/ParkNames";

import ParksWithActivity from "./components/pages/ActivityParks";
import ParksContainingActivity from "./components/API/ParksContainingActivity";
import ActivityParks from "./components/pages/ActivityParks";
import ParkInfo from "./components/pages/ParkInfo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/activities" exact component={ActivitySearch} />
          <Route path="/webcam" exact component={Webcam} />
          <Route path="/parks" exact component={Park} />

          <Route path="/parkactivity" exact component={ActivityParks} />

          <Route path="/parkinfo" exact component={ParkInfo} />

          {/*<Route path="products" component={Products} />
          <Route path="sign-up" component={Sign - up} />  */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
