// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: 'mysql2',
		connection: {
			host: 'localhost',
			user: 'root', // ou outro usuário que você criou
			password: 'nova_senha', // sua senha do MySQL, se houver
			database: 'advogadas',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './seeds',
		},
	},

	staging: {
		client: 'mysql2',
		connection: {
			host: 'localhost',
			user: 'username',
			password: 'password',
			database: 'advogadas',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},

	production: {
		client: 'mysql2',
		connection: {
			host: 'localhost',
			user: 'username',
			password: 'password',
			database: 'my_db',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
}
