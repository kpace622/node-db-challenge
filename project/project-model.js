const db = require('../data/db-config');

function postResource(newResource) {
    return db('resources').insert(newResource)
}

function findResources() {
    return db('resources')
}

function postProject(newProject) {
    return db('projects').insert(newProject)
}

function findProjects() {
    return db('projects')
}

function postTask(newTask) {
    return db('task').insert(newTask)
}

function findTasks(id) {
    return db('projects as p')
    .join('task as t', 'p.id', 't.project_id')
    .select('p.project_name')
    .where({project_id: id})
}

module.exports = {
    postResource,
    findResources,
    postProject,
    findProjects,
    postTask,
    findTasks
}