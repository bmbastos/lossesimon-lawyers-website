module.exports = app => {
	app.route('/users')
		.post(app.api.user.save);

	app.route('/login')
		.post(app.api.login.colocaNome);
}