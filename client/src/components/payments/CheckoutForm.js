import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

import './CheckoutForm.css';

const handleChange = (change) => {
    console.log('[change]', change);
};
const handleReady = () => {
    console.log('[ready]');
};


class CheckoutForm extends React.Component {
    handleSubmit = (ev) => {
        ev.preventDefault();
        if (this.props.stripe) {
            this.props.stripe
                .createToken()
                .then((payload) => console.log('[token]', payload));
        } else {
            console.log("Stripe.js hasn't loaded yet.");
        }
    };
    render() {
        return (
            <div className="CheckoutForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Card details
                        <CardElement
                            onChange={handleChange}
                            onReady={handleReady}
                        />
                    </label>
                    <button>Pay</button>
                </form>
            </div>
        );
    }
}
export default injectStripe(CheckoutForm);