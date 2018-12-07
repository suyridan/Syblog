import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Index extends Component {
    render() {
        return (
            <div>
                <h3>All Products</h3>
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
