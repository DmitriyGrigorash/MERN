import React from 'react';
import {connect} from "react-redux";

import * as actions from '../../actions';

import SurveyForm from './SurveyForm';
import './surveys.scss';

class SurveyNew extends React.Component {
    render() {
        return (
            <article className="SurveyNew">
                <h2>Surveys New</h2>
                <SurveyForm />
            </article>
        );
    };
}

const mapDispatchToProps = dispatch => {
    return {
        submitSurvey: () => dispatch(actions.submitSurvey())
    }
};

export default connect(null, mapDispatchToProps)(SurveyNew);