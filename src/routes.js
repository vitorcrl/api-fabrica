const routes = require("express").Router();

const SessionController = require("./app/controllers/SessionControler");

routes.post("/sessions", SessionController.store);

module.exports = routes;
