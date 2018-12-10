import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* App page importations*/
import Navigation from './page/Navigation.js';

/* An Index component */
class Index extends Component {
    render() {
        return (
            <div>
                <Navigation titulo="Bienvenido"/>
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
