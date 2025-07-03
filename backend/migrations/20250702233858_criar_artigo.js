/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('artigos', (table) => {
		table.increments('id').primary();
		table.string('titulo').notNullable();
		table.json('tags').notNullable();
		table.text('conteudo').notNullable();
		table.integer('autor_id').unsigned().notNullable();
		table.foreign('autor_id').references('id').inTable('usuario').onDelete('CASCADE');
		table.timestamps(true, true); // created_at and updated_at
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('artigos');
};
