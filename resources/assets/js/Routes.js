//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UsList from './components/Usuarios';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/s" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/usuario" component={UsList} />
            <Route component={Page404} />
        </Switch>
    </App>;

export default AppRoutes;