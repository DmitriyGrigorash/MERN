export default (emails) => {
	// eslint-disable-next-line
	const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const invalidEmails = emails
		.split(',')
		.map(email => email.trim())
		.filter(email => reg.test(email) === false);

	if(invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}`
	}
}
