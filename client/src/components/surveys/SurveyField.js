import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function ({label, name}) {
	return (
		<div className="SurveyField">
			<TextField
		        type="text"
		        margin="normal"
		        label={label}
		        name={name}
		        fullWidth
      		/>
		</div>
	)
}