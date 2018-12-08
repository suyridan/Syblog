import React, { Component } from 'react'

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class UsList extends Component{

  render() {
    return (
      <div>
        <div>
          <table className="table table-striped table-hover">
            <thead>
              <th>Numero</th>
              <th>Correo</th>
              <th>Nombre</th>
              <th>Creado</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>hernandezsalberto@gmail.com</td>
                <td>Alberto Hernandez Santos</td>
                <td>Ayer</td>
              </tr>
              <tr>
                <td>2</td>
                <td>alberto.hernandez@controlintegral.mx</td>
                <td>Alberto Hernandez Santos</td>
                <td>Hoy</td>
              </tr>
              <tr>
                <td>3</td>
                <td>lili@gmail.com</td>
                <td>Lilian Betzabe Herrera Padilla</td>
                <td>Hoy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

          // <Router>
          //   <div>
          //     <Link to="/usuarios">Lista de usuarios</Link>
          //     <Link to="/Usuarios/create">Crear usuario</Link>
          //     <Route exact path="/Usuarios" component={UsList}
          //     <Route exact path="/Usuarios/create" component={UsCreate}
          //   </div>
          // </Router>


    );
  }
}
