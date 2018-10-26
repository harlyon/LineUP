import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import BaseRouter from './Route';

class MainWrap extends Component {
    render() {
        return (
            <>
                <Router>
                   <BaseRouter />
                </Router>
            </>
        );
    }
}

export default MainWrap;