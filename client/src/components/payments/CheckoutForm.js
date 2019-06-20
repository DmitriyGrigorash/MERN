import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {handleToken} from "../../actions";
import './CheckoutForm.css';


const handleChange = (change) => {
    console.log('[change]', change);
};
const handleReady = () => {
    console.log('[ready]');
};


class CheckoutForm extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }


    async submit(ev) {
        ev.preventDefault();
        let {token} = await this.props.stripe.createToken({name: "Charge"});
        console.log('### token', token);
        this.props.handleToken(token);
    }

    render() {
        return (
            <div className="CheckoutForm">
                <form onSubmit={this.submit}>
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


CheckoutForm.propTypes = {
    handleToken: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        handleToken: (token) => dispatch(handleToken(token))
    }
};

export default injectStripe(connect(null, mapDispatchToProps)(CheckoutForm));