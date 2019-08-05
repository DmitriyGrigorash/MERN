import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from "@material-ui/core/Button";
import SurveyField from './SurveyField';

export class SurveyForm extends React.Component {
    renderFields() {
        return (
            <div className="SurveyFormFields">
                <Field label="Survey Title" type="text" name="title" component={SurveyField} />
                <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
                <Field label="Email Body" type="text" name="body" component={SurveyField} />
                <Field label="Recipients List" type="text" name="email" component={SurveyField} />
            </div>
        )
    }
    render() {
        return (
            <article className="SurveyForm">
                <h3>Form Survey</h3>
                <form onSubmit={this.props.handleSubmit(values => console.log('### values', values))}>
                    {this.renderFields()}
                    <Button color="default" size="medium" type="submit">Submit</Button>
                </form>
            </article>
        );
    };
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
