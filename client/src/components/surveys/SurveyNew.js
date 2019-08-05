import React from 'react';

import SurveyForm from './SurveyForm';
import './surveys.scss';

export class SurveyNew extends React.Component {
    render() {
        return (
            <article className="SurveyNew">
                <h2>Surveys New</h2>
                <SurveyForm />
            </article>
        );
    };
}

export default SurveyNew;
