import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorIndicator from "./components/wrappers-components/error-indicator";

ReactDOM.render(
    <ErrorIndicator>
        <Router>
            <App/>
        </Router>
    </ErrorIndicator>,
document.getElementById('root'));
