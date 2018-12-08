import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import UsList from '../Usuarios/UsList.js';
import UsCreate from '../Usuarios/UsCreate.js';

export default class Navigation extends Component{

  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/usuarios">Lista de usuarios</Link>
            <Link to="/Usuarios/create">Crear usuario</Link>
            <Route exact path="/Usuarios" component={UsList}/>
            <Route exact path="/Usuarios/create" component={UsCreate}/>
          </div>
        </Router>
      </div>
    );
  }
}
