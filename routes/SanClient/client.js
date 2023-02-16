const router = require("express").Router();

const SanClientController = require("../../controllers/SanClientController");

// functions
router.route("/sanclients/client").post((req, res) => SanClientController.create(req, res));
router.route("/sanclients/client").get((req, res) => SanClientController.getAll(req, res));
router.route("/sanclients/client/:id").get((req, res) => SanClientController.getById(req, res));
router.route("/sanclients/client/:id").delete((req, res) => SanClientController.deleteById(req, res));
router.route("/sanclients/client/:id").put((req, res) => SanClientController.update(req, res));

module.exports = router;