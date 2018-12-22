//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './Routes';

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);
