
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 128).notNullable()
            tbl.string('project_desc', 256)
            tbl.integer('project_completed').defaultTo(0).notNullable()
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 128).notNullable().unique()
            tbl.string('resource_desc', 256)
        })
        .createTable('task', tbl => {
            tbl.increments()
            tbl.string('task_desc', 256).notNullable()
            tbl.string('task_notes', 128)
            tbl.integer('task_completed').defaultTo(0).notNullable()
            tbl.integer('project_id')
                .notNullable()
                .unsigned()
                .references('projects.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL')
        })
        .createTable('project_resource', tbl => {
            tbl.integer('project_id')
                .notNullable()
                .unsigned()
                .references('project.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL')
            tbl.integer('resource_id')
                .unsigned()
                .references('resources.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL')
        })
  )
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resource')
        .dropTableIfExists('task')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
