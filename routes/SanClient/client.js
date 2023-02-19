const router = require("express").Router();

const ClientController = require("../../controllers/SanClient/ClientController");

// functions
router.route("/sanclients/client").post((req, res) => ClientController.create(req, res));
router.route("/sanclients/client").get((req, res) => ClientController.getAll(req, res));
router.route("/sanclients/client/:id").get((req, res) => ClientController.getById(req, res));
router.route("/sanclients/client/:id").delete((req, res) => ClientController.deleteById(req, res));
router.route("/sanclients/client/:id").put((req, res) => ClientController.update(req, res));

module.exports = router;