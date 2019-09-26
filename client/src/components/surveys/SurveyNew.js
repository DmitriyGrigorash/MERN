import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import * as actions from '../../actions';

import SurveyForm from './SurveyForm';
import './surveys.scss';

class SurveyNew extends React.Component {
    render() {
        return (
            <article className="SurveyNew">
                <h2>Surveys New</h2>
                <SurveyForm onSubmit={this.props.submitSurvey} />
            </article>
        );
    };
}

SurveyNew.propTypes = {
  submitSurvey: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitSurvey: (formData) => {
            dispatch(actions.submitSurvey(formData));
            ownProps.history.push('/surveys');
        }
    }
};

export default connect(null, mapDispatchToProps)(SurveyNew);
