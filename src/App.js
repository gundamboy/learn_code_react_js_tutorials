import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Bootstrap from 'bootstrap.native';
import './App.css';


import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Layout from "./pages/Layout";


class App extends Component {
  
  render() {    
    return (
        <HashRouter>
          <div>
            <Route path="/" component={Layout} />
            
            
            
          </div>
        </HashRouter>
    );
  }
}

export default App;
