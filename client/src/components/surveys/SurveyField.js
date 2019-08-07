import React from 'react';
import TextField from '@material-ui/core/TextField';

const SurveyField = ({input, label, name, meta}) => {
	const error = meta.touched && meta.error;
	return (
		<div className="SurveyField">
			<TextField
		        type="text"
		        margin="normal"
		        label={error ? meta.error : label}
		        name={name}
		        fullWidth
		        error={error ? true : false}
		        {...input}
      		/>
		</div>
	)
}

export default SurveyField;