import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

// Import the FontAwesomeIcon component

import App from './App';

/**
 * render App with reactDOM to root element
 */
ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,
    document.getElementById('root')
);