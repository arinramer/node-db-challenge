const express = require('express');

const ProjectsRouter = require('./projects/projects-router.js');

const server = express();

server.use(express.json());
server.use('/api/business', ProjectsRouter);

module.exports = server;