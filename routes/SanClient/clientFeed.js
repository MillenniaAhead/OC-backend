const router = require("express").Router();

const SCClientFeedController = require("../../controllers/SCClientFeedController");

// functions
router.route("/sanclients/clientfeed").post((req, res) => SCClientFeedController.create(req, res));
router.route("/sanclients/clientfeed").get((req, res) => SCClientFeedController.getAll(req, res));
router.route("/sanclients/clientfeed/:id").get((req, res) => SCClientFeedController.getById(req, res));
router.route("/sanclients/clientfeed/:id").delete((req, res) => SCClientFeedController.deleteById(req, res));
router.route("/sanclients/clientfeed/:id").put((req, res) => SCClientFeedController.update(req, res));

module.exports = router;