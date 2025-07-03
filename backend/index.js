const app = require('express')();
const consign = require('consign');



const port = 3000;


consign()
	.then('./config/middlewares.js')
	.then('./api')
	.then('./config/routes.js')
	.into(app);

app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`); });
