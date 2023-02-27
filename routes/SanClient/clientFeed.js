const router = require("express").Router();

const ClientFeedController = require("../../controllers/SanClient/ClientFeedController");

// functions
router.route("/sanclients/clientfeed").post((req, res) => ClientFeedController.create(req, res));
router.route("/sanclients/clientfeed").get((req, res) => ClientFeedController.getAll(req, res));
router.route("/sanclients/clientfeed/:id").get((req, res) => ClientFeedController.getById(req, res));
router.route("/sanclients/clientfeed/:id").delete((req, res) => ClientFeedController.deleteById(req, res));
router.route("/sanclients/clientfeed/:id").put((req, res) => ClientFeedController.update(req, res));

module.exports = router;