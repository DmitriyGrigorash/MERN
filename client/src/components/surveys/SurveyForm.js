import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';

import SurveyField from './SurveyField';
import validateEmail from '../../utils/validateEmail';

const validate = (values) => {
    const errors = {};

    errors.email = validateEmail(values.email || '');

    if(!values.title) {
        errors.title = 'Provide a title'
    }
    if(!values.subject) {
        errors.subject = 'Provide a subject'
    }
    if(!values.body) {
        errors.body = 'Provide a body'
    }
    if(!values.recipients) {
        errors.recipients = 'Provide an email'
    }

    return errors;
}

//*** TODO: Add checking email field before submit form. Remove white spaces (trim) for

export class SurveyForm extends React.Component {
    render() {
        return (
            <article className="SurveyForm">
                <h3>Form Survey</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="SurveyFormFields">
                        <Field label="Survey Title" type="text" name="title" component={SurveyField} />
                        <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
                        <Field label="Email Body" type="text" name="body" component={SurveyField} />
                        <Field label="Recipients List" type="text" name="recipients" component={SurveyField} />
                    </div>
                    <div className="SurveyFormButtons">
                        <Button color="default" size="medium" type="submit" variant="contained" to="surveys">
                            <Link href="/surveys" underline="none">Cancel</Link>
                        </Button>
                        <Button color="primary" size="medium" type="submit" variant="contained">Submit</Button>
                    </div>
                </form>
            </article>
        );
    };
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);
