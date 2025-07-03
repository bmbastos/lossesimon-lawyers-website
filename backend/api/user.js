module.exports = app => {
	const save = (req, res) => {
		res.send('Usuário salvo com sucesso!');
	};

	return { save };
};