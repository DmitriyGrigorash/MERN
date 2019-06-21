import React from 'react';
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';


import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing'
import MyStoreCheckout from "./payments/MyStoreCheckout";


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {

        return(
            <main>
                <React.Fragment>
                    <Header isAuth={this.props.isAuth}/>
                    <Route path='/' component={Landing} />
                    <Route path='/charge' component={MyStoreCheckout} />
                    <Route exact path='/surveys' component={Dashboard} />
                    <Route path='/surveys/new' component={SurveyNew} />
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
