const router = require("express").Router();

const ReviewController = require("../../controllers/SanClient/ReviewController");

// functions
router.route("/sanclients/review").post((req, res) => ReviewController.create(req, res));
router.route("/sanclients/review").get((req, res) => ReviewController.getAll(req, res));
router.route("/sanclients/review/:id").get((req, res) => ReviewController.getById(req, res));
router.route("/sanclients/review/:id").delete((req, res) => ReviewController.deleteById(req, res));
router.route("/sanclients/review/:id").put((req, res) => ReviewController.update(req, res));

module.exports = router;