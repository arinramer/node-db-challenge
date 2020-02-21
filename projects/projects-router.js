const express = require('express');

const projects = require('./projects-model.js');

const router = express.Router();

router.post('/resources', (req, res) => {
    projects.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
})

router.get('/resources', (req, res) => {
    projects.getResources()
    .then(resources => {
        res.json(resources)
    })
})

router.post('/projects', (req, res) => {
    projects.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
})

router.get('/projects', (req, res) => {
    projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
})

router.post('/tasks', (req, res) => {
    projects.addTask(req.body)
    .then(task => {
        res.status(201).json(task)
    })
})

router.get('/tasks', (req, res) => {
    projects.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
})

module.exports = router;