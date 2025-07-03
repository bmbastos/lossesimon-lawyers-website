/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('usuario', (table) => {
		table.increments('id').primary();
		table.string('nome').notNullable();
		table.string('email').notNullable().unique();
		table.string('senha').notNullable();
		table.timestamps(true, true); // created_at and updated_at
	});
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('usuario');
};
