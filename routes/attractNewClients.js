const router = require("express").Router();

const attractNewClientController = require("../controllers/attractNewClientController");

// functions
router.route("/attractNewClients").post((req, res) => attractNewClientController.create(req, res));
router.route("/attractNewClients").get((req, res) => attractNewClientController.getAll(req, res));
router.route("/attractNewClients/:id").get((req, res) => attractNewClientController.getById(req, res));
router.route("/attractNewClients/:id").delete((req, res) => attractNewClientController.deleteById(req, res));
router.route("/attractNewClients/:id").put((req, res) => attractNewClientController.update(req, res));

module.exports = router;
