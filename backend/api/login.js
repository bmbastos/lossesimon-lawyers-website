module.exports = app => {
	const colocaNome = (req, res) => {
		userName = req.body.username
		password = req.body.password
		if (userName === '' || password === '') {
			return res.status(400).send('É necessário informar o nome de usuário e a senha.');
		} else { 
			// Aqui vai rolar a autenticação via banco de dados
			return res.status(200).send(`Usuário ${userName} autenticado com sucesso!`);
		}
	};

	return { colocaNome };
};