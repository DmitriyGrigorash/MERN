import React from 'react';
import TextField from '@material-ui/core/TextField';

const SurveyField = ({input, label, name, meta}) => {
	console.log('meta', meta);
	return (
		<div className="SurveyField">
			<TextField
		        type="text"
		        margin="normal"
		        label={label}
		        name={name}
		        fullWidth
		        error={meta.touched && meta.error ? true : false}
		        {...input}
      		/>
		</div>
	)
}

export default SurveyField;