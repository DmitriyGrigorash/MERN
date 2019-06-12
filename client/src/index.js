import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import {StripeProvider} from 'react-stripe-elements';

import App from "./components/App";
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(reduxThunk)
));
console.log('### process.env.REACT_APP_STRIPE_KEY', process.env.REACT_APP_STRIPE_KEY);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <StripeProvider apiKey='pk_test_C8xV6rF4m23avcSnqf1Uh6SS009JqIdgy9'>
                <App/>
            </StripeProvider>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
