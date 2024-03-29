import React from 'react';
import {Elements} from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';

class MyStoreCheckout extends React.Component {
    render() {
        return (
            <Elements>
                <CheckoutForm {...this.props} />
            </Elements>
        );
    }
}

export default MyStoreCheckout;