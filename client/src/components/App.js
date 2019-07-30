import React from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';


import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing'
import MyStoreCheckout from "./payments/MyStoreCheckout";
import Dashboard from './dashboard/Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    componentDidUpdate() {

    }

    render() {

        return(
            <main>
                <React.Fragment>
                    <Header isAuth={this.props.isAuth}/>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/charge' component={MyStoreCheckout} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/surveys' component={Dashboard} />
                        <Route path='/surveys/new' component={SurveyNew} />
                    </Switch>
                </React.Fragment>
            </main>
        )
    }
}

App.propTypes = {
    fetchUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(actions.fetchUser())
    }
};
const mapStateToProps = ({auth}) => {
    return { isAuth: auth.isAuth }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
