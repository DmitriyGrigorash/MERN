import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from "@material-ui/core/Button";

export class SurveyForm extends React.Component {
    render() {
        return (
            <article>
                <h3>Form Survey</h3>
                <form onSubmit={this.props.handleSubmit(values => console.log('### values', values))}>
                    <Field name="surveyTitle" component="input" type="text" />
                    <Button color="default" size="medium" type="submit">Submit</Button>
                </form>
            </article>
        );
    };
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
