import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class UserList extends Component{

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="className">
              <div className="className">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="usu_nom" className="label">Nombre completo</label>
                    <input type="text" id="usu_nom" className="form-control"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
