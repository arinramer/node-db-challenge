const db = require('../data/dbConfig.js');

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}

function addResource(resource) {
    return db('resource')
    .insert(resource)
}

function getResources() {
    return db('resource')
}

function addProject(project) {
    return db('project')
    .insert(project)
}

function getProjects() {
    return db('project')
}

function addTask(task) {
    return db('task')
    .insert(task)
}

function getTasks() {
    return db('task').select('name', 'project_description')
    .join('project', 'task.project_id', 'project.id')
}