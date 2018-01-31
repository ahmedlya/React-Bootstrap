import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import PriceCard from "./components/PriceCard";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>

                <div className="container text-center">
                    <div className=" row">
                        <Intro/>
                    </div>

                    <div className=" row">
                        <div className="col-md-4">
                            <PriceCard title="Free" />
                        </div>
                        <div className="col-md-4">
                            <PriceCard title="Pro" />
                        </div>
                        <div className="col-md-4">
                            <PriceCard title="Entreprise" />
                        </div>
                    </div>

                    <Footer/>

                </div>
            </div>
        );
    }
}

export default App;
