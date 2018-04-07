
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('user_types', table => {
      table.increments().primary();
      table.string('name');
    }),

    knex.schema.createTable('users', table => {
      table.uuid('id').notNullable().primary();
      table.string('name');
      table.string('email').unique();
      table.jsonp('settings');
      table.integer('user_type_id').references('id').onTable('user_types');
      table.boolean('active').default(1);
      table.timestamps();
    }),

    knex.schema.createTable('integration_types', table => {
      table.increments().primary();
      table.string('pretty_name');
      table.string('name');
    }),

    knex.schema.createTable('integrations', table => {
      table.uuid('id').notNullable().primary();
      table.uuid('user_id').references('id').onTable('users').onDelete('cascade').notNullable();
      table.integer('integration_type_id').references('id').onTable('integration_types');
      table.jsonp('settings');
    }),

    knex.schema.createTable('plans', table => {
      table.uuid('id').notNullable().primary();
      table.string('display_name');
      table.string('name');
      table.integer('price');
      table.jsonp('features');
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTableIfExists('user_types'),
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('integration_types'),
    knex.schema.dropTableIfExists('integrations'),
    knex.schema.dropTableIfExists('plans')
  ]);
};
