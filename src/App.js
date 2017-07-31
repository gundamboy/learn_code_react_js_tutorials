import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';
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
