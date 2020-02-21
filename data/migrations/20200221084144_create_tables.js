
exports.up = function(knex) {
  return knex.schema
  .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('name')
      .notNullable();
      tbl.string('resource_description');
  })
  .createTable('project', tbl => {
      tbl.increments();
      tbl.string('name')
      .notNullable()
      tbl.string('project_description');
      tbl.boolean('completed', false)
      .notNullable();
  })
  .createTable('project_resources', tbl => {
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resource')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.primary(['resource_id', 'project_id'])
  })
  .createTable('task', tbl => {
      tbl.increments();
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.string('task_description')
      .notNullable();
      tbl.string('notes');
      tbl.boolean('completed', false)
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resource')
  .dropTableIfExists('project')
  .dropTableIfExists('project_resources')
  .dropTableIfExists('task')
};
