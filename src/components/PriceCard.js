import React, { Component } from 'react';

import './Style.css';

class PriceCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pack } = this.props;
        return (
            <div class="card mb-4 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">{pack.title}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${pack.price || 0}<small class="text-muted">/ mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        {
                            pack.features.map((feature) => (<li>{feature}</li>))
                        }
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                </div>
            </div>
        )

    }
};

export default PriceCard;