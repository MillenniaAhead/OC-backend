const router = require("express").Router();

const serviceTypeController = require("../controllers/serviceTypeController");

// functions
router.route("/").post((req, res) => serviceTypeController.create(req, res));
router.route("/").get((req, res) => serviceTypeController.getAll(req, res));
router.route("/:id").get((req, res) => serviceTypeController.getById(req, res));
router
  .route("/:id")
  .delete((req, res) => serviceTypeController.deleteById(req, res));
router.route("/:id").put((req, res) => serviceTypeController.update(req, res));

module.exports = router;
