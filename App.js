import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />

          {/* <Route path="services" component={Serivces} />
          <Route path="products" component={Products} />
          <Route path="sign-up" component={Sign - up} />  */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
