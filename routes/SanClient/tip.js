const router = require("express").Router();

const TipController = require("../../controllers/SanClient/TipController");

// functions
router.route("/sanclients/tip").post((req, res) => TipController.create(req, res));
router.route("/sanclients/tip").get((req, res) => TipController.getAll(req, res));
router.route("/sanclients/tip/:id").get((req, res) => TipController.getById(req, res));
router.route("/sanclients/tip/:id").delete((req, res) => TipController.deleteById(req, res));
router.route("/sanclients/tip/:id").put((req, res) => TipController.update(req, res));

module.exports = router;