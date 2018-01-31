import React, { Component } from 'react';

import PriceCard from './PriceCard';

class PricesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            packages: [{
                title: 'Spaces SM',
                price: 10,
                features: [
                    '2 GB/RAM',
                    '1 core CPU'
                ]
            }, {
                title: 'Spaces MD',
                price: 30,
                features: [
                    '4 GB/RAM',
                    '2 core CPU'
                ]
            }, {
                title: 'Spaces L',
                price: 90,
                features: [
                    '12 GB/RAM',
                    '16 core CPU'
                ]
            }, {
                title: 'Spaces XL',
                price: 120,
                features: [
                    '64 GB/RAM',
                    '128 core CPU'
                ]
            }, {
                title: 'Spaces XXL',
                price: 120,
                features: [
                    '128 GB/RAM',
                    '128 core CPU'
                ]
            }]
        }
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.packages.map(p => {
                        return (
                            <div className="col">
                                <PriceCard pack={p} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default PricesList;