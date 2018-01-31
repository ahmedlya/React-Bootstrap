import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import PricesList from './components/PricesList';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className="container text-center">
                    <div className=" row">
                        <Intro />
                    </div>

                    <PricesList />

                    <Footer />

                </div>
            </div>
        );
    }
}

export default App;
