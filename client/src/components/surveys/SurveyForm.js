import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from "@material-ui/core/Button";
import SurveyField from './SurveyField';

export class SurveyForm extends React.Component {
    renderFields() {
        return (
            <Field name="surveyTitle" component={SurveyField} type="text" />
        )
    }
    render() {
        return (
            <article>
                <h3>Form Survey</h3>
                <form onSubmit={this.props.handleSubmit(values => console.log('### values', values))}>
                    
                    <Button color="default" size="medium" type="submit">Submit</Button>
                </form>
            </article>
        );
    };
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
