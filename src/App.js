import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ExpertisePage from "./pages/expertise";
import HobbiesPage from "./pages/hobbies";
import HomePage from "./pages/home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/what-i-do" component={ExpertisePage} />
        <Route path="/hobbies" component={HobbiesPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}
