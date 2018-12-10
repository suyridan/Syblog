import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import UsList from '../Usuarios/UsList.js';
import UsCreate from '../Usuarios/UsCreate.js';

export default class Navigation extends Component{

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Logo</a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/usuarios" className="nav-link">Listado de usuarios</Link>
              </li>
              <li className="nav-item">
                <Link to="/usuarios/create" className="nav-link">Usuario Nuevo</Link>
              </li>
            </ul>
          </nav>
          <div className="container">
            <Route exact path="/usuarios" component={UsList}/>
            <Route exact path="/usuarios/create" component={UsCreate}/>
          </div>
        </div>
      </Router>
    );
  }
}
