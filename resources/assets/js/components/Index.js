import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* App page importations*/
import Navigation from './page/Navigation.js';


/* App Importations */
import UsList from './Usuarios/UsList.js';
import UsCreate from './Usuarios/UsCreate.js';

/* An Index component */
class Index extends Component {
    render() {
        return (
            <div className="container" >
              <div className="row">
                <Navigation/>
                <div className="card col-md-12" >
                </div>
              </div>
            </div>
        );
    }
}

export default Index;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
  }
rcc
