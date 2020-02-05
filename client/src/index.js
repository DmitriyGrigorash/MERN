import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';

import App from "./components/App";

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
                <App/>
            </StripeProvider>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
