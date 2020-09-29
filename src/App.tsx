import React from "react";
import NavBar from "./components/NavBar";
import ToDoPage from "./components/TodoPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";

// const App: React.FunctionComponent = () => {
//   return <h1>Hello TS</h1>;
// };

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <ToDoPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
