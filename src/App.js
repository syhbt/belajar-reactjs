import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBiodataComponent from './components/ListBiodataComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from "./components/FooterComponent";
import CreateBiodataComponent from "./components/CreateBiodataComponent";
import ViewBiodataComponent from "./components/ViewBiodataComponent";


function App() {
  return (
      <div>
      <Router>
            <HeaderComponent />
              <div className="container">
                  <Switch> 
                        <Route path = "/" exact component = {ListBiodataComponent}></Route>
                        <Route path = "/biodatas" component = {ListBiodataComponent}></Route>
                        <Route path = "/add-biodata/:id" component = {CreateBiodataComponent}></Route>
                        <Route path = "/view-biodata/:id" component = {ViewBiodataComponent}></Route>
                        {/* <Route path = "/update-biodata/:id" component = {UpdateBiodataComponent}></Route> */}
                  </Switch>
              </div>
            <FooterComponent />
      </Router>
      </div>
  );
}

export default App;
