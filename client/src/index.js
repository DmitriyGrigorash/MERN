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
