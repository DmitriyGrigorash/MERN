import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';

class MyStoreCheckout extends React.Component {
    render() {
        return (
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
                <Elements>
                    <CheckoutForm />
                </Elements>
            </StripeProvider>
        );
    }
}

export default MyStoreCheckout;