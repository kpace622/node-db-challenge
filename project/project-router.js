const express = require('express');

const db = require('../data/db-config');

const Projects = require('./project-model');

const router = express.Router();

router.post('/new-resource', (req, res) => {
    const newResource = req.body;

    Projects.postResource(newResource)
        .then(newPost => {
            res.status(201).json({message: 'success'})
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to add resource', err})
        })
})

router.get('/resources', (req, res) => {
    Projects.findResources()
        .then(resource => {
            res.json(resource)
        })
        .catch(err => {
            res.status(500).json({message: 'failed to find resources'})
        })
})

router.post('/new-project', (req, res) => {
    const newProject = req.body;

    Projects.postProject(newProject)
        .then(newPost => {
            res.status(201).json({message: 'success'})
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to add project', err})
        })
})

router.get('/projects', (req, res) => {
    Projects.findProjects()
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({message: 'failed to find project'})
        })
})

router.post('/new-task', (req, res) => {
    const newTask = req.body;

    Projects.postTask(newTask)
        .then(newPost => {
            res.status(201).json({message: 'success'})
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to add task', err})
        })
})

router.get('/tasks/:id', (req, res) => {
    const { id } = req.params;

    Projects.findTasks(id)
        .then(tasks => {
            console.log(tasks)
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({message: 'failed to find task'})
        })
})

module.exports = router;