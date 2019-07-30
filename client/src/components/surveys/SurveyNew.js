import React from 'react';

import SurveyForm from './SurveyForm';

export class SurveyNew extends React.Component {
    render() {
        return (
            <article>
                <h2>Surveys New</h2>
                <SurveyForm />
            </article>
        );
    };
}

export default SurveyNew;
