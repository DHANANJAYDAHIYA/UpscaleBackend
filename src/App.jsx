import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import {Route, Switch} from "react-router-dom";

//Components Import
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.js";
import Quest from "./Components/QuestPage/quest.js";
function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/quest' component={Quest}/>
        {/* <Route component={Error}/> */}
      </Switch>
    </div>
    </>
  );
}

export default App;
