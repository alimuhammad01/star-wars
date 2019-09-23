import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import history from '../src/history';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Details from './components/details/details'
import Compare from './components/compare/compare';
import Films from './components/films/film';

import '../src/assets/css/style.css'
import '../src/assets/css/font-awesome.min.css';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import '../src/assets/js/bootstrapjs.js';
// import '../src/assets/js/bootstrapminjs';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header history={history}/>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/details/:id' component={Details}/>
                        <Route path='/compare/:id' component={Compare}/>
                        <Route path='/film' component={Films}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;